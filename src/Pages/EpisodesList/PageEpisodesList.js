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
    constructor(props) {
        super(props);

        this.state = {
            episodesList: reverse(JSON.parse(JSON.stringify(episodes)))
        }
    }

    render() {
        const {
            episodesList,
        } = this.state;

        const {
            playingEpisodeId,
            playEpisodeInEpisodeBar,
            onStopPlayingEpisode,
        } = this.props;

        return (
            <div className="page-all-episodes">
                <h1>{i18n.translate('episode.all')}</h1>
                <div className="all-episode-container">
                    {episodesList.map(
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
            </div>
        )
    }
}

export default PageEpisodesList;
