import React from 'react';
import { reverse } from 'lodash';



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
        return (
            <div className="earlier-episodes-container">

            </div>
        )
    }
}

export default EarlierEpisodes;
