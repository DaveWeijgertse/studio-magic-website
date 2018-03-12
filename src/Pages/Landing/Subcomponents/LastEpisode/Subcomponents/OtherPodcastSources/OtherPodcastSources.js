import React from 'react';
import i18n from 'i18n-react';

import {
    ITUNES,
    STITCHER,
    TUNEIN,
} from './utils/podcastSourceTypes';

// Subcomponents import
import PodcastSource from './Subcomponents/PodcastSource';
import RssFeedSource from './Subcomponents/RssFeedSource';

// Styling import
import './OtherPodcastSources.scss';


const OtherPodcastSources = () => {
    return (
        <div className="other-podcast-sources-container">
            <div className="other-podcast-sources">
                {i18n.translate('listen-also-via')}
                <div className="podcast-sources-container">
                    <PodcastSource source={ITUNES} />
                    <PodcastSource source={STITCHER} />
                    <PodcastSource source={TUNEIN} />
                    <RssFeedSource />
                </div>
            </div>
        </div>
    );
}

export default OtherPodcastSources;
