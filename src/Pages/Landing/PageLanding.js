import React from 'react';

import {
    last,
} from 'lodash';

// Subcomponent imports
import LastEpisode from './Subcomponents/LastEpisode';

// Data imports
import { episodes } from 'appUtils/episodes/episodes.json';


class PageLanding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastEpisode: last(episodes)
        }
    }

    render() {
        const {
            lastEpisode,
        } = this.state;

        return (
            <div className="page-landing">
                <LastEpisode
                    lastEpisode={lastEpisode}
                />
            </div>
        )
    }
}

export default PageLanding;
