import { FACEBOOK, TWITTER } from 'utils/constants/socialMediaTypes';

export default function getSocialMediaHref(type) {
    const socialMediaHref = {
        [FACEBOOK]: 'https://www.facebook.com/studiomagicnl',
        [TWITTER]: 'https://twitter.com/StudioMagicNL',
    };

    return socialMediaHref[type];
}
