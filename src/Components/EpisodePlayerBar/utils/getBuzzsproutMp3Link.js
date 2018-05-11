export default function getBuzzsproutMp3Link(id, episodeData) {
    const episodeUrl = episodeData[id - 1].url;
    const urlParts = episodeUrl.split('/');
    const urlWithoutProtocol = urlParts.splice(2).join('/');

    return 'https://' + urlWithoutProtocol;
}
