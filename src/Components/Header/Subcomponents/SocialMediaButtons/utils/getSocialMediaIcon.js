import {
    ITUNES,
    STITCHER,
    TUNEIN,
} from './socialMediaTypes';

import iTunesIcon from '../Subcomponents/Icons/itunes.png';
import stitcherIcon from '../Subcomponents/Icons/stitcher.png';
import tuneInIcon from '../Subcomponents/Icons/tunein.png';


export default function getSocialMediaIcon(type) {
    const socialMediaIcon = {
        [ITUNES]:   iTunesIcon,
        [STITCHER]: stitcherIcon,
        [TUNEIN]:   tuneInIcon,
    }

    return socialMediaIcon[type];
}
