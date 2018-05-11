import i18n from 'i18n-react';

import { ITUNES, STITCHER, TUNEIN, RSS } from './podcastSourceTypes';

export default function getTooltipText(source) {
    const tooltipText = {
        [ITUNES]: i18n.translate('podcast-sources.itunes'),
        [STITCHER]: i18n.translate('podcast-sources.stitcher'),
        [TUNEIN]: i18n.translate('podcast-sources.tune-in'),
        [RSS]: i18n.translate('podcast-sources.rss'),
    };

    return tooltipText[source];
}
