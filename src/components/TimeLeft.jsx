import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import React, { useState }from 'react';

momentDurationFormatSetup(moment)

//create a new state using REACT HOOK
const TimeLeft = ({ sessionLength }) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')
    return <div>{formattedTimeLeft}</div>;
    //MM:SS
    //25:00
};


export default TimeLeft

