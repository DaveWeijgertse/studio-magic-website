import {
    ITUNES,
    STITCHER,
    TUNEIN,
} from './podcastSourceTypes';

import iTunesIcon from '../Icons/itunes.png';
import stitcherIcon from '../Icons/stitcher.png';
import tuneInIcon from '../Icons/tunein.png';


export default function getPodcastSourceIcon(type) {
    const podcastSourceIcon = {
        [ITUNES]:   iTunesIcon,
        [STITCHER]: stitcherIcon,
        [TUNEIN]:   tuneInIcon,
    }

    return podcastSourceIcon[type];
}
