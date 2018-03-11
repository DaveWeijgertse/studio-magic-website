import React from 'react';
import { reverse } from 'lodash';

// Subcomponent imports
import EpisodeTile from '../../../../Components/EpisodeTile';



class EarlierEpisodes extends React.Component {
    constructor(props) {
        super(props);

        const episodesList = reverse(JSON.parse(JSON.stringify(this.props.episodes)));

        // Show the second-to-last, third-to-last and fourth-to-last episode
        const visibleEpisodes = episodesList.splice(1, 3);

        this.state = {
            visibleEpisodes
        }
    }

    render() {
        const {
            visibleEpisodes,
        } = this.state;

        const {
            playingEpisodeId,
            playEpisodeInEpisodeBar,
            onStopPlayingEpisode,
        } = this.props;

        return (
            <div className="earlier-episodes-container">
                <div className="earlier-episodes">
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
            </div>
        )
    }
}

export default EarlierEpisodes;
