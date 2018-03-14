import React from 'react';

// Subcompoent imports
import TimerDisplay from './Subcomponents/TimerDisplay';

// Styling imports
import './CurrentTimeAndMaxDuration.scss';


const CurrentTimeAndMaxDuration = ({currentTime, maxDuration}) => (
    <div className="current-time-max-duration">
        <TimerDisplay type="currentTime" time={currentTime} />
        <div className="divider">/</div>
        <TimerDisplay type="maxDuration" time={maxDuration} />
    </div>
);

export default CurrentTimeAndMaxDuration;
