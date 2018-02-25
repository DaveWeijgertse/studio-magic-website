import {
    ITUNES,
} from './socialMediaTypes';

export default function getSocialMediaHref(type) {
    const socialMediaHref = {
        [ITUNES]: "https://itunes.apple.com/us/podcast/studio-magic/id1309473851",
    }

    return socialMediaHref[type];
}
