import React from 'react';

// Subcomponent imports
import Description from './Subcomponents/Description';
import Info from './Subcomponents/Info';
import MoreInfo from './Subcomponents/MoreInfo';
import PlayButton from './Subcomponents/PlayButton';

// Styling import
import './EpisodeTile.scss';


const EpisodeTile = ({id, date, name, description, url, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode}) => (
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
                    url={url}
                />
            </div>
        </div>
    </div>
);

export default EpisodeTile;
