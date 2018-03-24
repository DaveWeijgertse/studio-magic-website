import React from 'react';

// Subcomponent imports
import AllEpisodesButton from './Subcomponents/AllEpisodeButton';
import NextEpisodeButton from './Subcomponents/NextEpisodeButton';
import PreviousEpisodeButton from './Subcomponents/PreviousEpisodeButton';


const EpisodeNavigation = ({ currentEpisode, totalEpisodes, onClickEpisodeButton }) => {
    const isFirstEpisode = currentEpisode === 1;
    const isLastEpisode  = currentEpisode === totalEpisodes;

    return (
        <div className="episode-navigation-container">
            {!isLastEpisode && (
                <NextEpisodeButton
                    nextEpisode={currentEpisode + 1}
                    onClick={onClickEpisodeButton}
                />
            )}
            {!isFirstEpisode && (
                <PreviousEpisodeButton
                    previousEpisode={currentEpisode - 1}
                    onClick={onClickEpisodeButton}
                />
            )}
            <AllEpisodesButton />
        </div>
    );
}

export default EpisodeNavigation;
