import React from 'react';

// Utils import
import formatTimeFromSeconds from './utils/formatTimeFromSeconds';

// Styling import
import './TimerDisplay.scss';

const TimerDisplay = ({ type, time }) => <div className={'timer-display ' + type}>{formatTimeFromSeconds(time)}</div>;

export default TimerDisplay;
