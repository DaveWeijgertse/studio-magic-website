import { ITUNES, SPOTIFY, STITCHER, TUNEIN } from './podcastSourceTypes';

import iTunesIcon from '../Icons/itunes.png';
import spotifyIcon from '../Icons/spotify.png';
import stitcherIcon from '../Icons/stitcher.png';
import tuneInIcon from '../Icons/tunein.png';

export default function getPodcastSourceIcon(type) {
    const podcastSourceIcon = {
        [ITUNES]: iTunesIcon,
        [SPOTIFY]: spotifyIcon,
        [STITCHER]: stitcherIcon,
        [TUNEIN]: tuneInIcon,
    };

    return podcastSourceIcon[type];
}
