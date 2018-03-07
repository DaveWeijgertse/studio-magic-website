import React from 'react';

// Subcomponent imports
import ExtraTopics from './Subcomponents/ExtraTopics';
import PlayButton from './Subcomponents/PlayButton';


const ExtraTopicsAndPlayButton = ({extraTopics, url}) => (
    <div className="extra-topics-and-play-button-container">
        {extraTopics.length > 0 ? <ExtraTopics extraTopics={extraTopics} /> : null}
        <PlayButton url={url} />
    </div>
);

export default ExtraTopicsAndPlayButton;
