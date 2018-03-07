import React from 'react';

// Subcomponent imports
import ExtraTopics from './Subcomponents/ExtraTopics';


const ExtraTopicsAndPlayButton = ({extraTopics}) => (
    <div className="extra-topics-and-play-button-container">
        <ExtraTopics extraTopics={extraTopics} />
    </div>
);

export default ExtraTopicsAndPlayButton;
