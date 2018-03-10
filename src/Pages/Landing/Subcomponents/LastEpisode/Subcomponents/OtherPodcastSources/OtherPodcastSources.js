import React from 'react';

import {
    ITUNES,
    STITCHER,
    TUNEIN,
} from './utils/podcastSourceTypes';

// Subcomponents import
import PodcastSource from './Subcomponents/PodcastSource';

// Styling import
import './OtherPodcastSources.scss';


const OtherPodcastSources = () => {
    return (
        <div className="other-podcast-sources-container">
            <div className="other-podcast-sources">
                <div className="podcast-sources-container">
                    <PodcastSource source={ITUNES} />
                    <PodcastSource source={STITCHER} />
                    <PodcastSource source={TUNEIN} />
                </div>
            </div>
        </div>
    );
}

export default OtherPodcastSources;
