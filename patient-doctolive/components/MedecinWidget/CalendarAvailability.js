
import {useState, useEffect} from 'react'

import moment from 'moment'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { Divider } from '@material-ui/core';

import Config from './../../EndPoint'
import { useAuth } from './../../context/AuthContext';

export default function CalendarAvailability(props) {
    const [startDate, setStartDate] = useState(moment())
    const [calandar, setMedecinCalendar] = useState([])

    const {userData} = useAuth();

    const selectHour = (day, hour, disable) => {
        console.log(hour)
        if(disable){
        //    this.setState({ error: true, expired:true, message: 'ce moment est indisponible' })
        //    setTimeout(() => {
        //        this.setState({expired: false})
        //    }, 5000);
        }else{
            props.setSelectedHour(day.format('YYYY/MM/DD'), hour)
        }
    }


    const changeDate = (direction) => {
       
        if (direction === 'next'){
            setStartDate( moment(startDate).add(7, 'days'))
        }else{
            if (moment(startDate).isAfter(moment())){
                setStartDate( moment(startDate).subtract(7, 'days') )
            //    this.setState({ startDate: moment(this.state.startDate).subtract(7, 'days') })
           }
        }
    }

    const createHoursSoir = (day) => {
        const disponibiliteDay = props.showDisponibilite.horaires.find(h => h.jour === day.format('dddd'));

        if(!disponibiliteDay) return []

        let table = [];
        let endHour = moment(disponibiliteDay.fin_soir, 'HH:mm:ss');
        let hour = moment(disponibiliteDay.debut_soir, 'HH:mm:ss');

        let i=0;

         while (hour.isBefore(endHour) && i< 100 ){

            
            let element= undefined;

            if(calandar){
                // element = calandar.find( e => moment.utc(e.date).format('HH:mm') === hour)
                element = calandar.find( e => {
                    // return moment(e.date).isSame(day.format('YYYY-MM-DDT') + hour.format('HH:mm')+":00.000Z", "minutes")
                    return e.time === hour.format('HH:mm:ss') && day.format('YYYY-MM-DD') === e.date
                })
            }
            let HourInTheDay = moment( moment(day).format('YYYY/MM/DD') + hour.format('HH:mm'), 'YYYY/MM/DDHH:mm');
            let isDisabled = (element !== undefined) || (moment().isAfter(HourInTheDay));

            let cloneHour = hour.format('HH:mm')
            let hourDiv = !isDisabled ?  <div 
                disabled={isDisabled} 
                key={i} 
                className={isDisabled ? "cell hours-element disabled" : "cell hours-element"} 
                onClick={ () => selectHour(day, cloneHour, isDisabled)}
                >
                    <span className="hour"> {hour.format('HH:mm')} </span>
                </div>
                : <div key={i}  className=" hours-element-disabled" > <div className="hour-empty"> </div> </div>
            table.push(hourDiv)
            i++
            hour = hour.add(disponibiliteDay.duree, 'minutes')
        }

        return table
    }
    


    const createHoursMatin = (day) => {
        const disponibiliteDay = props.showDisponibilite.horaires.find(h => h.jour === day.lang("fr").format('dddd'));

        if(!disponibiliteDay) return []

        let table = [];
        let endHour = moment(disponibiliteDay.fin_matin, 'HH:mm:ss') ;
        let hour = moment(disponibiliteDay.debut_matin, 'HH:mm:ss');

        let i=0;

         while (hour.isBefore(endHour) && i< 100 ){
            let element= undefined;

            if(calandar){
                element = calandar.find( e => {
                    return e.time === hour.format('HH:mm:ss') && day.format('YYYY-MM-DD') === e.date
                
                })
            }
            
            let HourInTheDay = moment( moment(day).format('YYYY/MM/DD') + hour, 'YYYY/MM/DDHH:mm');
            let cloneHour = hour.format('HH:mm')

            let isDisabled = (element !== undefined) || (moment().isAfter(HourInTheDay));
            let hourDiv = !isDisabled ?  <div 
                disabled={isDisabled} 
                key={i} 
                className={isDisabled ? "cell hours-element disabled" : "cell hours-element"} 
                onClick={ () => selectHour(day, cloneHour, isDisabled)}
                >
                    <span className="hour">{hour.format('HH:mm')}  </span>
                </div>
                : <div key={i} className=" hours-element-disabled" > <div className="hour-empty"> </div> </div>

            table.push(hourDiv)
            i++
            hour = hour.add(disponibiliteDay.duree, 'minutes')
        }

        return table
    }

    useEffect( async () => {
        const res =  await fetch(`${Config.BACKEND_URL}/consultation/medecin-calendar/${props.showDisponibilite.id}/${startDate}`, {
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `token ${userData.token}`,

            },
        })
        const data = await res.json();
        setMedecinCalendar(data.medecinCalendar)
    }, [startDate]);


    const createCalendar = () => {
        let table = [];
        for (let i = 0; i <= 6; i++) {
            let date = moment(startDate).add(i, 'days');
                let dayAvailability = <div key={i} className="calendar-day">
                    <div className="calendar-day-title">
                        <div className="cell-content">
                            <div className="calendar-day-name">{date.format('dddd')} </div>
                            <div className="calendar-day-date">{date.format('D')+ " " +date.format("MMM")}</div>
                        </div>
                    </div> 
                    <div>
                        {createHoursMatin(date)}
                        <Divider />
                        {createHoursSoir(date)}
                    </div>
            </div>
            table.push(dayAvailability)
            
        }
        return table
    }

    return(
        <section>
            <div className="date-range-calendar" style={props.locale === "ar" ? {direction: "rtl", textAlign: "right"}: {direction: "ltr"}}>

                <div className="range-calendar">
                    <div className="calendar-pagination">
                        <button className="" id="date-range-preview" onClick={() => changeDate('preview')}  >  {props.locale === "ar" ? <MdChevronRight/>: <MdChevronLeft />}  </button>
                    </div>
                    <div className="calendar">
                        {props.showDisponibilite? createCalendar() : null}
                    </div>
                    <div className="calendar-pagination">
                        <button className="" id="date-range-next" onClick={() => changeDate('next')}  >  {props.locale === "ar" ? <MdChevronLeft />: <MdChevronRight />} </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
