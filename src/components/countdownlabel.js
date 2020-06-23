
import PropTypes from "prop-types";
import React, { useState } from "react";
import moment from 'moment';
import { target } from "tailwindcss/stubs/defaultConfig.stub";

function CountdownLabel({targetTime}) {
    const [currentTime, setTime] = useState(moment());
    const isOver =  currentTime.isAfter(targetTime);
    const diff = targetTime - currentTime;
    var duration = moment.duration(targetTime.diff(currentTime));
    if(targetTime.isValid() && !isOver) {
        return (
            <div className="mt-1 text-sm text-gray-600">Reopens in {duration.days()} days, {duration.hours()} hours, {duration.minutes()} minutes</div>
        );
    } else {
        return null;
    }
}

CountdownLabel.propTypes = {
    targetTime: PropTypes.object,
  };

export default CountdownLabel;