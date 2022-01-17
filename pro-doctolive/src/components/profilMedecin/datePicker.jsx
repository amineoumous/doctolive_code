import React, { Component } from 'react'

import { MdChevronLeft, MdChevronRight} from 'react-icons/md'


import moment from 'moment'
export default class DatePicker extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedMounth: moment().startOf('month'),
            calendar:[]
        }
    }
    selctDate = (d) => {

        this.props.selectedDate(d.target.getAttribute('date-data'))

    }
    createCalendar = (selected) => {
        let table = []
        let dateBegining = moment(selected).startOf('month').startOf('week')
        for (let j = 1; j <= 5; j++) {
            let ligne =[]
                for(let i = 1; i <= 7; i++){
                    ligne.push(<td key={dateBegining.format('DMM')} date-data={[dateBegining.format('DD-MM-YY')]} onClick={this.selctDate} className={ ((dateBegining.isSame(moment(),'month'))? "" : "old") + " day"}>{dateBegining.format('D')}</td>)
                    dateBegining.add(1,'days')
                }
                table.push(<tr key={dateBegining.format('MMD')}>{ligne}</tr>)
        }
        return table
    }

    nextMounth =()=>{
        this.setState({
            selectedMounth: moment(this.state.selectedMounth).add(6, 'weeks')   })

    }
    prevMounth = () =>{
        if (( moment(this.state.selectedMounth).subtract(1, 'months').isAfter(moment(), 'month')) || (moment(this.state.selectedMounth).subtract(1, 'months').isSame(moment(), 'month')) ){
            this.setState({
                selectedMounth: moment(this.state.selectedMounth).subtract(1, 'months')
            })

        }
    }

    render() {
        return (
            <div className="datepicker">
                 <table className="table-condensed">
                        <thead>
                            <tr><th colSpan="7" className="datepicker-title" style={{display: "none"}}></th></tr>
                            <tr>
                                <th className="prev" onClick={this.prevMounth}> <MdChevronLeft /> </th>
                                <th colSpan="5" className="datepicker-switch">{this.state.selectedMounth.format('YYYY MMMM')}</th>
                                <th className="next" onClick={this.nextMounth}> <MdChevronRight/> </th>
                            </tr>
                            <tr><th className="dow">Mo</th><th className="dow">Tu</th><th className="dow">We</th><th className="dow">Th</th><th className="dow">Fr</th><th className="dow">Sa</th><th className="dow">Su</th></tr>
                            </thead>
                            <tbody>
                                {this.createCalendar(this.state.selectedMounth)}
                            </tbody>
                        </table>
            </div>
        )
    }
}
