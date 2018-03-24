import React from 'react';

// Subcomponent imports
import NextEpisodeButton from './Subcomponents/NextEpisodeButton';


const EpisodeNavigation = ({ currentEpisode, totalEpisodes }) => {
    const isLastEpisode  = currentEpisode === totalEpisodes;

    return (
        <div className="episode-navigation-container">
            {!isLastEpisode && (
                <NextEpisodeButton
                    nextEpisode={currentEpisode + 1}
                />
            )}
        </div>
    );
}

export default EpisodeNavigation;
