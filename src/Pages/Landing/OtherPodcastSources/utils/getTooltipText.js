import i18n from 'i18n-react';

import { APPLEPODCASTS, STITCHER, TUNEIN, RSS } from './podcastSourceTypes';

export default function getTooltipText(source) {
    const tooltipText = {
        [APPLEPODCASTS]: i18n.translate('podcast-sources.applepodcasts'),
        [STITCHER]: i18n.translate('podcast-sources.stitcher'),
        [TUNEIN]: i18n.translate('podcast-sources.tune-in'),
        [RSS]: i18n.translate('podcast-sources.rss'),
    };

    return tooltipText[source];
}
