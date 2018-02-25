import {
    ITUNES,
} from './socialMediaTypes';

import iTunesIcon from '../Subcomponents/Icons/itunes.png';


export default function getSocialMediaIcon(type) {
    const socialMediaIcon = {
        [ITUNES]:   iTunesIcon,
    }

    return socialMediaIcon[type];
}
