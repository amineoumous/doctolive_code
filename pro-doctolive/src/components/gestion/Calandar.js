import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import Form from 'react-bootstrap/Form';

import DetailsModal from './../modals/DetailsModal'
// import ColorPicker from 'rc-color-picker'
import moment from 'moment'

import {Row, Col} from 'react-bootstrap'
import { FaRegPlusSquare,FaPlus } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import 'rc-color-picker/assets/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import AddModal from './../modals/AddModals';
import CategoryModal from './../modals/CategoryModal';
import { useAuth } from "context/Auth";
import UpdateModal from './../modals/UpdateModal';
import Timeline from 'components/gestion/Timeline.js';
import {StoreTarifs,DeleteTarif, UpdateTarif} from 'services/medecin/MedecinService'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Axios from 'axios'
import Config from 'Config'
import { FaTrash } from "react-icons/fa";

const propTypes = {}


const localizer = momentLocalizer(moment);

function CreateEventWithNoOverlap (props) {

  const {UserData} = useAuth();
  const [addEvent, setAddEvent] = useState({show: false, slot: {}});
  const [updateEvent, setUpdateEvent] = useState({show: false, slot: {}});
  const [showEvent, setShowEvent] = useState({show: false, slot: {}});
  const [eventsToShow, setEventsToShow] = useState([])
  const [selectedDay, setSelectedDay] = useState(new Date()); // Default to today
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weeks, setWeeks] = useState([]);
  const [categories, setCategories] = useState([]);


  const [view, setView] = useState("month");
  // const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {
    if(props.events){
      let data = [...props.events];
      console.log("cc",props.events)

      setEventsToShow(data);
    }
    setNewCategory();
    

    return () => {
      
    }
  }, [props.events]);
  const [showAddModal, setShowAddModal] = useState(false);
  const _addEvent = ()  => {
    // setAddEveno(true)
    // setAddEvent({show: true,currentDate:currentDate});
    setShowAddModal(true);
    setAddEvent({ slot: { start: new Date() } });
  }
  const _showEvent =(slot) => {
    setShowEvent({show: true, slot});
  }
  const _updateEvent =(slot) => {
    setShowEvent({show: false});
    setUpdateEvent({show: true, slot});
  }
  const setNewEvent = (newEvent) => {
    // alert("jj");
    // props.setEvents(events => [...events, newEvent]);
    setShowAddModal(false);
    const today = new Date(currentDate).toISOString().split('T')[0]; 
    Axios.get(`${Config.BACKEND_URL}/medecin/consultation`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${UserData.token}`,
      },
      params: {
          date: today, // Add today's date as a query parameter
      }
  })
    .then(response =>{

      if(response){
        if (!response.data.error) { 
          if(response.data.consultation){
            props.setEvents(response.data.consultation)
          }
          
        }else{
          props.setErrors( (errors) => {return {...errors, events: true}})
        }
      }
     
    })
    .catch(err=> {
      if(err.response){

        if(err.response.status === 500){

        }
      }
      
    });
  }
  const setDeletedEvent = (id) => {
    let index = props.events.findIndex((event => event.id === id));
    if(index !== -1){
      let cloneEvents = [...props.events];
      cloneEvents.splice(index, 1);
      props.setEvents(cloneEvents);
    }else{

    }
    setShowEvent({show: false});
  }
  const events2 = [
    { name: 'Event 1', startHour: 17, endHour: 18, color: '#E5968A' },
    { name: 'Event 2', startHour: 5, endHour: 7, color: '#7DC1BF' },
    { name: 'Event 3', startHour: 12, endHour: 14, color: '#7DC1BF' },
  ];
  const setChanageUpdate = (newUpdate) => {
    let index = props.events.findIndex((event => event.id === newUpdate.id));
    if(index !== -1){
      let cloneEvents = [...props.events]
      cloneEvents[index] = newUpdate;
      props.setEvents(cloneEvents);
    }
    setUpdateEvent({show: false, slot:{}})
  }

  // const setSelectedCategories = (newCategorieToShow) => {
  //   setCategoriesToShow(newCategorieToShow)
  //   const result = props.events.filter(event => {
  //     let index = newCategorieToShow.findIndex(e => (e.id === event.categoryId))
  //     return index !== -1
  //   });
  //   setEventsToShow(result)
  // }
  const formats = {
    dateFormat: 'dd',
    dayHeaderFormat: 'dddd DD MMM',

  }
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// add simo


useEffect(() => {
  generateWeeks();
}, [currentDate]);

const generateWeeks = () => {
  // Get previous month last week

const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
const startOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), 1);
const endOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0);
const lastWeekPrevMonth = getWeeksForMonth(endOfPrevMonth).slice(-1)[0];

// Get current month weeks
const currentMonthWeeks = getWeeksForMonth(currentDate);

// Get next month first week
const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const firstWeekNextMonth = getWeeksForMonth(nextMonth)[0];

// Assign weeks to the correct sections
const weeksLayout = [
  currentMonthWeeks[0], // 1st week of current month
  currentMonthWeeks[1], // 2nd week of current month
  currentMonthWeeks[2],    // Last week of previous month
  currentMonthWeeks[3]   // 1st week of next month
];

setWeeks(weeksLayout);
};

const getWeeksForMonth = (date) => {
const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const startDay = startOfMonth.getDay();

let days = [];
for (let i = 1 - startDay; i <= endOfMonth.getDate(); i++) {
  days.push(new Date(date.getFullYear(), date.getMonth(), i));
}

let weeks = [];
while (days.length) {
  weeks.push(days.splice(0, 7));
}

return weeks;
};

const selectDate = (date) => {
setSelectedDate(date);
setCurrentDate(date);
let  date_info = new Date(date).toISOString().split('T')[0]; 
Axios.get(`${Config.BACKEND_URL}/medecin/consultation`, {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${UserData.token}`,
  },
  params: {
      date: date_info, // Add today's date as a query parameter
  }
})
.then(response =>{

  if(response){
    if (!response.data.error) { 
      if(response.data.consultation){
        props.setEvents(response.data.consultation)
      }
      
    }else{
      props.setErrors( (errors) => {return {...errors, events: true}})
    }
  }
 
})
.catch(err=> {
  if(err.response){

    if(err.response.status === 500){

    }
  }
  
});
};

const getMonthName = (date) => {
return date.toLocaleString('default', { month: 'long' });
};
const changeDate = (offset) => {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + offset);
  setCurrentDate(newDate);
 
 let  date_info = new Date(newDate).toISOString().split('T')[0]; 
Axios.get(`${Config.BACKEND_URL}/medecin/consultation`, {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${UserData.token}`,
  },
  params: {
      date: date_info, // Add today's date as a query parameter
  }
})
.then(response =>{

  if(response){
    if (!response.data.error) { 
      if(response.data.consultation){
        props.setEvents(response.data.consultation)
      }
      
    }else{
      props.setErrors( (errors) => {return {...errors, events: true}})
    }
  }
 
})
.catch(err=> {
  if(err.response){

    if(err.response.status === 500){

    }
  }
  
});
};

const getActiveClass = (offset) => {
  const today = new Date(currentDate);
  today.setHours(0, 0, 0, 0); // Normalize today's date

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + offset);
  targetDate.setHours(0, 0, 0, 0); // Normalize target date

  return today.getTime() === targetDate.getTime() ? 'active' : '';
};
const isSameDay = (date1, date2) => {
  return date1?.toDateString() === date2.toDateString();
};
// end simo
const [addCategory, setAddCategory] = useState(false);
const [addEveno, setAddEveno] = useState(false);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [color, setColor] = useState('');
const handleClose = () => {
  setAddCategory(false);
};
const saveCategory = (data) => {
  // Save logic here
  setAddCategory(false);
  StoreTarifs(data, UserData.token)
  .then(response =>{
    if (!response.data.error) { 
      handleClose();
      setNewCategory();
      if (!response.data.error) { 

      }else{
        // setErrors( (errors) => {return {events: true}})
      }
    }
   
  })
  .catch(err=> {

    if(err.response){
      if(err.response.status === 500){

      }
      if(err.response.status === 403){
        let setingError= {};
        err.response.data.errors.map(error => {
          return setingError[error.param] = true
        })
      //  setErrors(setingError)
      }
    }
  });
};

const setNewCategory =() => {
  Axios.get(`${Config.BACKEND_URL}/medecin/tarifs`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${UserData.token}`,
    }})
  .then(response =>{

    if(response){
      if (!response.data.error) { 

        if(response.data.typeConsultation){
          setCategories(response.data.typeConsultation.reverse())
        }
        
      }else{
        // setErrors( (errors) => {return {events: true}})
      }
    }
   
  })
  .catch(err=> {
    if(err.response){

      if(err.response.data.errors){
        if(err.response.data.errors.name === "SequelizeConnectionError"){

        }
        if(err.response.status === 500){

        }
        if(err.response.status === 403){

        }
      }
      
    }
    
  });

}

const setDelete = (categorie) => {
  DeleteTarif(categorie.id, UserData.token)
  .then(response => {
   setNewCategory()
  })
  .catch(err => {

  })
}
const setSaveUpdate = (categorie,active) => {
  console.log(categorie)
  let data = {id:categorie.id,name:categorie.name, color: categorie.color, price:categorie.price,active:active };
  console.log(data)

  // Axios.put(`${backendUrl}category/${categorie.id}`, data,{headers: {'Content-Type': 'application/json'}})
  UpdateTarif(data, categorie.id, UserData.token)
    .then(response =>{
      
      if(response){
        if (!response.data.error) { 
       setNewCategory();
            
        }else{
          // setErrors( (errors) => {return {events: true}})
        }
      }
     
    })
    .catch(err=> {
      if(err.response){
        if(err.response.status === 500){

        }
      }
    });

}

  return (
      <Col>
      {
        props.errors.events ? 
        <Row>
          <h2> Une erreur inconnue est survenue réssayer plus tard. </h2>
        </Row>
        :
        null
      }

        <Row>
        {(localizer &&!localizer && eventsToShow) &&
      
         
          <Calendar
           formats={formats}
            selectable
            popup
            popupOffset={30}
            localizer={localizer}
            min={ new Date(moment("07:00", "HH:mm"))}
            max={new Date(moment("20:00", "HH:mm"))}
            events={eventsToShow}
            startAccessor="date"
            endAccessor="end"
            onView={(vw) => setView(vw)}
            views={['month', 'day', 'week', 'agenda']}
            components={{
              toolbar: CustomToolbar ,
            }}
            messages={{noEventsInRange: <Emptyagenda />}}
            onSelectEvent ={_showEvent}
            onSelectSlot={(slotInfo) => setSelectedDay(slotInfo.start)}
             //onSelectSlot={_addEvent}
            startAccessor ={(event) => {
              return new Date(moment(event.date + event.time, "YYYY/MM/DDHH:mm"))
            }}
            step={15} // Set the step interval to 15 minutes
            defaultView="week"
          
            // TO DO => SET REAL INTERVAL
            endAccessor={(event) => new Date(moment(event.date + event.time, "YYYY/MM/DDHH:mm").add(15, 'minutes'))}
            view={view}
            style={{ height: "100vh", width: "100%" }}
            eventPropGetter={(
              event,
              start,
              end,
              isSelected
          ) => { 
            if(event.tarif !== undefined ){
              return {className: "hello" , style: {background: !event.tarif ? "#4caf50" : event.tarif.color, borderRadius: 15, textAlign: "center"}}
            } else{
              return {className: "hello" , style: {background:"blue"}}
            }
          }}
          />
        }
        </Row>
        <Row>
          <Col md={12} className='p-0'>
          
          <div className="calendar-container">
      <div className="calendar-header">
        <span className='titre-month-last'  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}><FaAngleLeft size={25} />{getMonthName(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}</span>
        <span  className='titre-month-current'>{getMonthName(currentDate)} <span className='year-current'>{currentDate.getFullYear()}</span></span>
        <span  className='titre-month-last' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>{getMonthName(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))} <FaAngleRight size={25} /></span>
      </div>
      
      <div className="calendar-body">
        {weeks.map((week, index) => (
          <div key={index} className="calendar-week" style={{ width: `${100 / 4}%` }}>
            <div className="calendar-day-names">
              {dayNames.map((dayName, i) => (
                <div key={i} className="calendar-day-name">
                         {dayName.slice(0, 1)}
                </div>
              ))}
            </div>
            <div className="calendar-days">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`calendar-day ${day.getMonth() === currentDate.getMonth() ? '' : 'inactive'} ${isSameDay(selectedDate, day) ? 'selected' : ''}`}
                  onClick={() => selectDate(day)}
                >
                  {day.getDate()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
          </Col>
        </Row>
        <Row>
        <Col md={4} className='calendrier-list-court'>
        <div className='flex pb-5'>
        <h5>Calendrier </h5>
        <FaRegPlusSquare className='calendar-cursor ' onClick={() => setAddCategory(true)} color={"#A4A8B5"} size={25} />
        </div>
      
 
          {/* {eventsToShow.filter(event => moment(event.date).isSame(selectedDay, 'day')).map(event => (
            <li key={event.id}>{event.title}</li>
          ))} */}

{categories.filter(event => event.active == '1').map(event => (
            <div className='flex item-cal'> 
            <span style={{width:"20px"}}><IoMdCheckmarkCircleOutline color='#FF6161' size={25} /></span>
            <span key={event.id} className='title-calendrier'>{event.name}</span>
            <span className='carre' color=''></span>
      
            <span style={{
  backgroundColor: event.color, 
  width: 15, 
  height: 15, 
  borderBlockColor:"black",
  borderWidth:1,
  borderRadius: 2, 
  marginTop:6,
  display: 'inline-block'
}}>
</span>
<Form>
      <Form.Check // prettier-ignore
        type="switch"
        id={event.id}
        label=""
        checked={event.active ? true:false}
        onClick={()=>setSaveUpdate(event,false)}
      />
    </Form>
            </div>

          ))}


<div className='flex mt-5 pb-3'>
        <h5>Autres </h5>
      
        </div>
        


        {categories.filter(event => event.active != '1').map(event => (
            <div className='flex item-cal'> 
            <span style={{width:"20px"}}><IoMdCheckmarkCircleOutline color='#FF6161' size={25} /></span>
            <span key={event.id} className='title-calendrier'>{event.name}</span>
            <span className='carre' color=''></span>
      
            <span style={{
  backgroundColor: event.color, 
  width: 15, 
  height: 15, 
  borderBlockColor:"black",
  borderWidth:1,
  borderRadius: 2, 
  marginTop:6,
  display: 'inline-block'
}}>

</span>
<span className='delete-cat' onClick={() => setDelete(event)} >
       <FaTrash style={{cursor:"pointer"}} color='#FF6161' size={16} />

      </span>
<Form>
      <Form.Check // prettier-ignore
        type="switch"
        id={event.id}
        label=""
        checked={event.active ? true:false}
        onClick={()=>setSaveUpdate(event,true)}
      />
    </Form>
            </div>

          ))}

      </Col>

      <Col md={8} className='timeline-content'>
        <Timeline events={eventsToShow} _showEvent={_showEvent} />
        <div className="three-button">
        <span className={getActiveClass(-1)} onClick={() => changeDate(-1)}>Hier</span>
        <span className={getActiveClass(0)} onClick={() => changeDate(0)}>Aujourd’hui</span>
        <span className={getActiveClass(1)} onClick={() => changeDate(1)}>Demain</span>
      </div>

      <span className='add-event' onClick={() => _addEvent()} >
       <FaPlus color='#ffffff' size={16} />

      </span>
      </Col>
      </Row>
   
      <AddModal
                addEveno={showAddModal}
                setAddEveno={setShowAddModal}
                currentDate={currentDate}
                addEvent={addEvent}
                setNewEvent={setNewEvent}
                categories={categories}
            />
      { updateEvent.slot ?
        <UpdateModal updateEvent={updateEvent} setModalShow={setUpdateEvent} setChanageUpdate={setChanageUpdate} categories={categories} />
        :
        null
      }
      { showEvent.slot ?
        <DetailsModal DetailsEvent={showEvent} setModalShow={setShowEvent} updateEvent={_updateEvent} deleteEvent={setDeletedEvent}  />
        :
        null
      }

<CategoryModal 
        show={addCategory} 
        handleClose={handleClose} 
        saveCategory={saveCategory} 
      />
      </Col>
    )
  
}


const CustomToolbar = (toolbar) => {
  const goToBack = (e) => {
    let direction = moment(toolbar.date).add(1, toolbar.view === "agenda" ? "month" : toolbar.view );
    let target = e.target;
    
    toolbar.onNavigate('prev', new Date(direction));
    setTimeout(() => {
      target.blur();
    }, 200);
    
  };

  const goToNext = (e) => {
    let direction = moment(toolbar.date).subtract(1, toolbar.view === "agenda" ? "month" : toolbar.view );
    let target = e.target;

    toolbar.onNavigate('next', new Date(direction));
    setTimeout(() => {
      target.blur();
    }, 200);
  };

  const goToCurrent = (e) => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate('current');
    
  };

  const goToView = (e, view) => {
      toolbar.onView(view);
      let target = e.target
     setTimeout(() => {
      target.blur();
    }, 200);
  }
 

  return (
    <div className="rbc-toolbar">  
        <span className="rbc-btn-group">
        <button onClick={goToNext} type="button"> 
            <FaAngleLeft />
          </button>

          { toolbar.view === "month" ? <button onClick={goToCurrent} type="button"> { content.toolbar.today["fr"]} </button> : null}

          <button onClick={goToBack} type="button"> 
            <FaAngleRight />
          </button>
          
        </span>

        {/* <span className="rbc-toolbar-label">نوفمبر 2020</span> */}
        <span className="rbc-toolbar-label"> <p> {toolbar.label} </p> </span>

        <span className="rbc-btn-group">
          {
          views.map((view, index) => 
            <button key={index} disabled={toolbar.view === view} onClick={ (e) => goToView(e, view)} type="button" className={ toolbar.view === view ? "rbc-active": ""}> 
              {content.toolbar[view]["fr"]} 
            </button>
          )
          }
        </span>
 
    </div>
  );
};

const Emptyagenda = () => 
<div className="container"> 
  <h3 className="text-right">
    {content.emptyAgenda["fr"]} 
  </h3>

</div>

let views = ["month", "week", "day", "agenda"];

CreateEventWithNoOverlap.propTypes = propTypes

export default CreateEventWithNoOverlap


const Content = {
  calendar:{
      toolbar:{
          month:{
              ar: "شهر",
              fr:"Mois"
          },
          week:{
              ar: "أسبوع",
              fr:"Semaine"
          },
          day:{
              ar: "يوم",
              fr:"Jour"
          },
          agenda:{
              ar: "جدول أعمال",
              fr:"Calendrier"
          },
          today:{
              ar: "اليوم",
              fr:"Ajourd'hui"
          },
          nextMonth:{
              ar: "الشهر المقبل",
              fr:"mois prochan"
          },
          previousMonth:{
              ar: "الشهر الماضى",
              fr:"mois précédent"
          },
          nextWeek:{
              ar: "الاسبوع المقبل",
              fr:"semaine prochaine"
          },
          previousWeek:{
              ar: "الأسبوع الماضي",
              fr:"semaine précédente"
          },
          tomorrow:{
              ar: "غدا",
              fr:"Demain"
          },
          yesterday:{
              ar: "البارحة",
              fr:"Hier"
          },
         
      },
      emptyAgenda:{
          ar:"لا توجد أحداث في هذا النطاق.",
          fr:" Il n'y a aucun événement dans cette plage.",
      },
  }
}
let content = Content.calendar;