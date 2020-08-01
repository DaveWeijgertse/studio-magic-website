import { INSTAGRAM, FACEBOOK, TWITTER, LINKEDIN } from 'utils/constants/socialMediaTypes';

export default function getSocialMediaHref(type) {
    const socialMediaHref = {
        [INSTAGRAM]: 'https://www.instagram.com/studiomagicpodcast',
        [FACEBOOK]: 'https://www.facebook.com/studiomagicnl',
        [TWITTER]: 'https://twitter.com/StudioMagicNL',
        [LINKEDIN]: 'https://www.linkedin.com/company/studiomagicnl',
    };

    return socialMediaHref[type];
}
