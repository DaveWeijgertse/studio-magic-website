import {
    ITUNES,
    STITCHER,
} from './socialMediaTypes';

import iTunesIcon from '../Subcomponents/Icons/itunes.png';
import stitcherIcon from '../Subcomponents/Icons/stitcher.png';


export default function getSocialMediaIcon(type) {
    const socialMediaIcon = {
        [ITUNES]:   iTunesIcon,
        [STITCHER]: stitcherIcon,
    }

    return socialMediaIcon[type];
}
