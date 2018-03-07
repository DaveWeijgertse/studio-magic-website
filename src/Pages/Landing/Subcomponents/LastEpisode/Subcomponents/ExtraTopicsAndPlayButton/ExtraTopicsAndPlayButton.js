import React from 'react';

// Subcomponent imports
import ExtraTopics from './Subcomponents/ExtraTopics';
import PlayButton from './Subcomponents/PlayButton';


const ExtraTopicsAndPlayButton = ({extraTopics}) => (
    <div className="extra-topics-and-play-button-container">
        <ExtraTopics extraTopics={extraTopics} />
        <PlayButton />
    </div>
);

export default ExtraTopicsAndPlayButton;
