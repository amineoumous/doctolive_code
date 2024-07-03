import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'

import DetailsModal from './../modals/DetailsModal'
// import ColorPicker from 'rc-color-picker'
import moment from 'moment'

import {Row, Col} from 'react-bootstrap'

import 'rc-color-picker/assets/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import AddModal from './../modals/AddModals';
import UpdateModal from './../modals/UpdateModal';

// import MultipleSelect from './MultiSelect'

import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
const propTypes = {}


const localizer = momentLocalizer(moment);

function CreateEventWithNoOverlap (props) {


  const [addEvent, setAddEvent] = useState({show: false, slot: {}});
  const [updateEvent, setUpdateEvent] = useState({show: false, slot: {}});
  const [showEvent, setShowEvent] = useState({show: false, slot: {}});
  const [eventsToShow, setEventsToShow] = useState([])

  const [view, setView] = useState("month");
  // const [categoriesToShow, setCategoriesToShow] = useState([]);

  useEffect(() => {
    if(props.events){
      let data = [...props.events];
      setEventsToShow(data);
    }
    

    return () => {
      
    }
  }, [props.events]);

  const _addEvent = (slot)  => {
    setAddEvent({show: true, slot});
  }
  const _showEvent =(slot) => {
    setShowEvent({show: true, slot});
  }
  const _updateEvent =(slot) => {
    setShowEvent({show: false});
    setUpdateEvent({show: true, slot});
  }
  const setNewEvent = (newEvent) => {
    props.setEvents(events => [...events, newEvent]);
    setAddEvent({show: false, slot:{}})
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
        {/* <Row className="justify-content-center my-4">
            <MultipleSelect categories= {props.categories} setCategoriesToShow={setSelectedCategories} categoriesToShow={categoriesToShow} />
        </Row> */}
        <Row>
        {(localizer && eventsToShow) &&
      
         
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
     
      { addEvent.slot ?
        <AddModal addEvent={addEvent} setModalShow={setAddEvent} setNewEvent={setNewEvent} categories={props.categories} />
        :
        null
      }
      { updateEvent.slot ?
        <UpdateModal updateEvent={updateEvent} setModalShow={setUpdateEvent} setChanageUpdate={setChanageUpdate} categories={props.categories} />
        :
        null
      }
      { showEvent.slot ?
        <DetailsModal DetailsEvent={showEvent} setModalShow={setShowEvent} updateEvent={_updateEvent} deleteEvent={setDeletedEvent}  />
        :
        null
      }
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