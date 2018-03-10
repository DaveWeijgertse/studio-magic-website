import {
    FACEBOOK,
} from './socialMediaTypes';

export default function getSocialMediaHref(type) {
    const socialMediaHref = {
        [FACEBOOK]: "https://www.facebook.com/studiomagicnl",
    }

    return socialMediaHref[type];
}
