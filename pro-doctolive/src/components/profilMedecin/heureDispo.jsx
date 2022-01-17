import React, { Component } from 'react'

import moment from 'moment'
export default class HeureDispo extends Component {

    constructor(props){
        super(props)
        this.state= {
            disponibilite: {
                id: 1,
                debutMatin: "08:00:00",
                finMatin: "12:30:00",
                debutSoir: "14:30:00",
                finSoir: "19:00:00",
                dureeConsultation: "15"
            },            
        }
        
    }

    createHoursMatin = () =>{

        let table = []
        let startHour = moment(this.state.disponibilite.debutMatin, 'HH:mm:ss')
        let i=0
        let hour = startHour.format("HH:mm") 

        do {
            // const element = this.state.reservation.find(
       //  e => moment(e.date_de_reservation).format('HH:mm') == hour
       //     )
            //  if (element != undefined) {
            table.push(
            // <li key={i} className="cell hours-element" onClick={this.selectHour.bind(null, hour)}>
            //                <span className="hour">{hour}  </span>
            //            </li>
            <li key={i}>
                <input type="radio" id={"radio"+ hour} name="radio_time" value={hour} />
                <label for={"radio" + hour}> {hour} </label>
            </li>
            )
            i++
            //  }
            hour = moment(hour, 'HH:mm').add(this.state.disponibilite.dureeConsultation, 'minutes').format('HH:mm')

        } while (moment(hour, 'HH:mm').isBefore(moment(this.state.disponibilite.finMatin, 'HH:mm:ss')) );

        return table

    }

    createHoursSoir = () =>{

        let table = []
        let i=0     
        let startHour = moment(this.state.disponibilite.debutSoir, 'HH:mm:ss')
        let hour =  startHour.format("HH:mm")

        do {
            // const element = this.state.reservation.find(
       //  e => moment(e.date_de_reservation).format('HH:mm') == hours
       //     )

            //  if (element != undefined) {
            table.push(

            <li key ={i}>
            <input type="radio" id={"radio"+ hour} name="radio_time" value={hour} />
            <label for={"radio"+ hour}>{hour}</label>
        </li>
            )
            i++
            //  }
            hour = moment(hour,'HH:mm').add(this.state.disponibilite.dureeConsultation, 'minutes').format('HH:mm')
         
        } while (moment(hour, 'HH:mm').isBefore(moment(this.state.disponibilite.finSoir,'HH:mm:ss')) );
        return table

    }

    render() {
        return (
            <div>
                 <div className="main_title_3 text-center">
                    <h3><strong>2</strong>Select your time</h3>
                </div>
                <div className="row justify-content-center add_bottom_45">
                    <div className="col-md-3 col-6 text-center">
                        <h4>matin</h4>
                        <ul className="time_select">
                            {this.createHoursMatin()}
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <h4>aprés midi</h4>
                        <ul className="time_select">
                            {this.createHoursSoir()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
