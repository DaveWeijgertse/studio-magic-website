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
