import React from 'react';

// Subcomponent imports
import AllEpisodesButton from './Subcomponents/AllEpisodeButton';
import NextEpisodeButton from './Subcomponents/NextEpisodeButton';
import PreviousEpisodeButton from './Subcomponents/PreviousEpisodeButton';


const EpisodeNavigation = ({ currentEpisode, totalEpisodes }) => {
    const isFirstEpisode = currentEpisode === 1;
    const isLastEpisode  = currentEpisode === totalEpisodes;

    return (
        <div className="episode-navigation-container">
            {!isLastEpisode && (
                <NextEpisodeButton
                    nextEpisode={currentEpisode + 1}
                />
            )}
            {!isFirstEpisode && (
                <PreviousEpisodeButton
                    previousEpisode={currentEpisode - 1}
                />
            )}
            <AllEpisodesButton />
        </div>
    );
}

export default EpisodeNavigation;
