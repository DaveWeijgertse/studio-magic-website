import React from 'react';

// Library import
import InputRange from 'react-input-range';

// Styling import
import './SeekerBar.scss';

const SeekerBar = ({ played, onSeekChange, onSeekMouseDown, onSeekMouseUp }) => (
    <div className="seeker-bar">
        <InputRange
            minValue={0}
            maxValue={1}
            step={0.000000001}
            value={played}
            onChange={onSeekChange}
            onChangeStart={onSeekMouseDown}
            onChangeComplete={onSeekMouseUp}
        />
    </div>
);

export default SeekerBar;
