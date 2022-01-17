import React from 'react';
import moment from 'moment';
// import Cookies from 'js-cookie'

// import content from './../../Content'

// let lang = Cookies.get('lang')
// lang = (lang === undefined)? "fr" : lang

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
        difference: this.props.difference
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            if(this.state.difference >= 1000) {
                
                let diff = this.state.difference - 1000;
                const days =  moment(diff).format('DDD') - 1;
                const hours = moment(diff).format('HH') ;
                const minutes = moment(diff).format('mm');
                const seconds = moment(diff).format('s');
                this.setState({ days, hours, minutes, seconds, difference: diff  });
                
            }else {
                // clearInterval(this.interval)
            }
           
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h2> La consultation commancera  {moment.utc( this.props.now + this.props.difference ).calendar() } </h2>
                <div className="countdown-wrapper">
                    
                    <div className="countdown-item">
                        <SVGCircle radius={daysRadius} />
                        { Math.floor( days)}
                        <span> jours </span>
                    </div>
                
                
                    <div className="countdown-item">
                        <SVGCircle radius={hoursRadius} />
                        {Math.floor(hours)}
                        <span> heurs </span>
                    </div>
                
                
                    <div className="countdown-item">
                        <SVGCircle radius={minutesRadius} />
                        {Math.floor(minutes)}
                        <span> minutes </span>
                    </div>
                
                    <div className="countdown-item">
                        <SVGCircle radius={secondsRadius} />
                        {seconds}
                        <span> secondes </span>
                    </div>
                    
                </div>
            </div>
        );
    }
}
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}
const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

