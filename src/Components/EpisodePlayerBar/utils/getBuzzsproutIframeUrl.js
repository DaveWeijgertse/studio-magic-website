export default function getBuzzsproutIframeUrl(id, episodeData) {
    return episodeData[id - 1].url + '?iframe=true';
}
