import {
    ITUNES,
    STITCHER,
} from './socialMediaTypes';

export default function getSocialMediaHref(type) {
    const socialMediaHref = {
        [ITUNES]: "https://itunes.apple.com/us/podcast/studio-magic/id1309473851",
        [STITCHER]: "https://www.stitcher.com/podcast/studio-magic",
    }

    return socialMediaHref[type];
}
