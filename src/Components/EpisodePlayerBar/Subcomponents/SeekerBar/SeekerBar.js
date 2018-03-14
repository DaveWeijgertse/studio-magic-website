import React from 'react';


const SeekerBar = ({ played, onSeekChange, onSeekMouseDown, onSeekMouseUp }) => (
    <div className="seeker-bar">
        <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onChange={onSeekChange}
            onMouseDown={onSeekMouseDown}
            onMouseUp={onSeekMouseUp}
        />
    </div>
);

export default SeekerBar;
