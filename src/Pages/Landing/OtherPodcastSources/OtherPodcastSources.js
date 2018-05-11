import React from 'react';
import i18n from 'i18n-react';

import { ITUNES, SPOTIFY, STITCHER, TUNEIN } from './utils/podcastSourceTypes';

// Subcomponents import
import PodcastSource from './PodcastSource';
import RssFeedSource from './RssFeedSource';

// Styling import
import './OtherPodcastSources.scss';

const OtherPodcastSources = () => {
    return (
        <div className="other-podcast-sources-container">
            <div className="other-podcast-sources">
                <h1>{i18n.translate('listen-also-via')}</h1>
                <div className="podcast-sources-container">
                    <PodcastSource source={ITUNES} />
                    <PodcastSource source={SPOTIFY} />
                    <PodcastSource source={STITCHER} />
                    <PodcastSource source={TUNEIN} />
                    <RssFeedSource />
                </div>
            </div>
        </div>
    );
};

export default OtherPodcastSources;
