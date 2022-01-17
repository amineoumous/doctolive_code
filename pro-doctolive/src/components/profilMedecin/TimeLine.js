import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function OutlinedTimeline(props) {
  return (
    <Timeline align="left" className="MuiTimeline-alignLeft">
        {
            props.items.length > 0 ?
            props.items.map((item, index) => {
                return (
                    <TimelineItem key={index} >
                        <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary"/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>  
                                <strong> {item.name} </strong>
                                <p> {item.domaine} </p> 
                                <span> {item.annee} </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                )
            })
            : null
        }
      
      
     
    </Timeline>
  );
}
