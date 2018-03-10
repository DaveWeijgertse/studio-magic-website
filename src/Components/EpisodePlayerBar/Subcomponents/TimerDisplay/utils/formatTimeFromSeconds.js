export default function formatTimeFromSeconds(secs) {
    let seconds = secs;
    let minutes = Math.floor(secs / 60);
    seconds     = seconds % 60;
    const hours = Math.floor(minutes / 60)
    minutes     = minutes % 60;

    return formatTimePart(hours) + ":" + formatTimePart(minutes) + ":" + formatTimePart(seconds);
}

function formatTimePart(timePart) {
    const roundedTimePart = Math.round(timePart);

    // Add a 0 in front of the timePart, if it's only a single number
    // Return "00" if there is no timePart yet
    if (roundedTimePart === null) {
        return "00";
    } else if (roundedTimePart >= 0 && roundedTimePart <= 9) {
        return "0" + roundedTimePart.toString();
    }

    return roundedTimePart.toString();
}
