import { APPLEPODCASTS, SPOTIFY, STITCHER, TUNEIN } from './podcastSourceTypes';

import applePodcastsIcon from '../Icons/applepodcasts.png';
import spotifyIcon from '../Icons/spotify.png';
import stitcherIcon from '../Icons/stitcher.png';
import tuneInIcon from '../Icons/tunein.png';

export default function getPodcastSourceIcon(type) {
    const podcastSourceIcon = {
        [APPLEPODCASTS]: applePodcastsIcon,
        [SPOTIFY]: spotifyIcon,
        [STITCHER]: stitcherIcon,
        [TUNEIN]: tuneInIcon,
    };

    return podcastSourceIcon[type];
}
