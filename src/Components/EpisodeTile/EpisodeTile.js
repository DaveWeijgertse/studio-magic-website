import React from 'react';

// Subcomponent imports
import Description from './Description';
import Info from './Info';
import MoreInfo from './MoreInfo';
import PlayButton from './PlayButton';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id, date, name, description, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode}) => (
    <div className="episode-tile">
        <Info
            id={id}
            date={date}
            name={name}
        />
        <Description description={description} />
        <div className="play-button-more-info-container">
            <div className="play-button-more-info">
                <PlayButton
                    id={id}
                    playingEpisodeId={playingEpisodeId}
                    playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                    onStopPlayingEpisode={onStopPlayingEpisode}
                />
                <MoreInfo
                    id={id}
                />
            </div>
        </div>
    </div>
);

export default EpisodeTile;
