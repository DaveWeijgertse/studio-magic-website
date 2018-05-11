export default function formatEpisodeNumber(number) {
    const hashtag = ' #';
    const numberAsString = number.toString();
    const length = numberAsString.length;

    if (length === 1) {
        return hashtag + '00' + numberAsString;
    } else if (length === 2) {
        return hashtag + '0' + numberAsString;
    } else if (length === 3) {
        return hashtag + numberAsString;
    }

    return ' ???';
}
