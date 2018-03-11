import React from 'react';

// Subcomponent imports
import EpisodeTile from '../../../../../../Components/EpisodeTile';

// Styling import
import './VisibleEpisodes.scss';


const VisibleEpisodes = ({visibleEpisodes, playingEpisodeId, playEpisodeInEpisodeBar, onStopPlayingEpisode}) => (
    <div className="visible-episodes">
        {visibleEpisodes.map(
            (episode) => {
                const {
                    date,
                    shortDescription,
                    id,
                    name,
                    url,
                } = episode;

                return (
                    <EpisodeTile
                        key={id}
                        date={date}
                        description={shortDescription}
                        id={id}
                        name={name}
                        url={url}
                        playingEpisodeId={playingEpisodeId}
                        playEpisodeInEpisodeBar={playEpisodeInEpisodeBar}
                        onStopPlayingEpisode={onStopPlayingEpisode}
                    />
                );
            }
        )}
    </div>
);

export default VisibleEpisodes;
