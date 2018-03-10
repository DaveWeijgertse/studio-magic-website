import React from 'react';

// Utils import
import formatTimeFromSeconds from './utils/formatTimeFromSeconds';

// Styling import
import './TimerDisplay.scss';


const TimerDisplay = ({time}) => (
    <div className="timer-display">
        {formatTimeFromSeconds(time)}
    </div>
);

export default TimerDisplay;
