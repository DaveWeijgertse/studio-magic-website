import React from 'react';

// Data imports
import { episodes } from 'appUtils/episodes/episodes.json';

// Subcomponent imports
import EpisodeTile from './Subcomponents/EpisodeTile';


class PageEpisodesList extends React.Component {
    render() {
        return (
            <div>
                <div className="all-episode-container">
                    {episodes.map(
                        (episode) => {
                            const {
                                id,
                            } = episode;

                            return (
                                <EpisodeTile
                                    key={id}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default PageEpisodesList;
