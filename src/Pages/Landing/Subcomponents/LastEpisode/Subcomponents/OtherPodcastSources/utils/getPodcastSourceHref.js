import {
    ITUNES,
    STITCHER,
    TUNEIN,
} from './podcastSourceTypes';

export default function getPodcastSourceHref(type) {
    const podcastSourceHref = {
        [ITUNES]:   "https://itunes.apple.com/us/podcast/studio-magic/id1309473851",
        [STITCHER]: "https://www.stitcher.com/podcast/studio-magic",
        [TUNEIN]:   "https://tunein.com/radio/Studio-Magic-p1085711"
    }

    return podcastSourceHref[type];
}
