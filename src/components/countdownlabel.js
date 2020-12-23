
import PropTypes from "prop-types";
import React, { useState } from "react";
import moment from 'moment';
import { target } from "tailwindcss/stubs/defaultConfig.stub";

function CountdownLabel({targetTime}) {
    const [currentTime, setTime] = useState(moment());
    const isOver =  currentTime.isAfter(targetTime);
    const diff = targetTime - currentTime;
    var duration = moment.duration(targetTime.diff(currentTime));
    if(targetTime.isValid() && !isOver && targetTime.year() === 2021) {
        const targetDateString = targetTime.format("MMMM Do");
        var monthsLeft = duration.months();
        var monthsLeftString = '';
        if(monthsLeft == 1) { monthsLeftString = '1 month, '}
        else if(monthsLeft > 1) { monthsLeftString = `${monthsLeft} months, `}
        var daysLeft = duration.days();
        var daysLeftString = '';
        if(daysLeft == 1) { daysLeftString = '1 day, '}
        else if(daysLeft > 1) { daysLeftString = `${daysLeft} days, `}
        var hoursLeft = duration.hours();
        var hoursLeftString = '';
        if(hoursLeft == 1) { hoursLeftString = '1 hour, '}
        else if(hoursLeft > 1) { hoursLeftString = `${hoursLeft} hours, `}
        var minutesLeft = duration.minutes();
        var minutesLeftString = '';
        if(minutesLeft == 1) { minutesLeftString = '1 minute, '}
        else if(minutesLeft > 1) { minutesLeftString = `${minutesLeft} minutes`}
        return (
            <div className="mt-1 text-sm text-gray-600">Reopens <div className="font-medium inline">{targetDateString}</div> ({monthsLeftString}{daysLeftString}{hoursLeftString}{minutesLeftString})</div>
        );
    } else {
        return null;
    }
}

CountdownLabel.propTypes = {
    targetTime: PropTypes.object,
  };

export default CountdownLabel;