import React from 'react';
import i18n from 'i18n-react';
import { reverse } from 'lodash';

// Data imports
import { episodes } from 'appUtils/episodes/episodes.json';

// Subcomponent imports
import EpisodeTile from './Subcomponents/EpisodeTile';

// Styling imports
import './PageEpisodesList.scss';


class PageEpisodesList extends React.Component {
    render() {
        return (
            <div className="page-all-episodes">
                <h1>{i18n.translate('episode.all')}</h1>
                <div className="all-episode-container">
                    {reverse(episodes).map(
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
