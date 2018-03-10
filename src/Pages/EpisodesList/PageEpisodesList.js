import React from 'react';

// Data imports
import { episodes } from 'appUtils/episodes/episodes.json';

// Subcomponent imports
import EpisodeTile from './Subcomponents/EpisodeTile';

// Styling imports
import './PageEpisodesList.scss';


class PageEpisodesList extends React.Component {
    render() {
        return (
            <div>
                <div className="all-episode-container">
                    {episodes.map(
                        (episode) => {
                            const {
                                date,
                                id,
                                name,
                            } = episode;

                            return (
                                <EpisodeTile
                                    key={id}
                                    date={date}
                                    id={id}
                                    name={name}
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
