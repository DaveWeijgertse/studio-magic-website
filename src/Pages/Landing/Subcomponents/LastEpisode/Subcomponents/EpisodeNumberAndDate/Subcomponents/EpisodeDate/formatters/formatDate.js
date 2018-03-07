import i18n from 'i18n-react';


export default function formatDate(date) {
    const parts = date.split('-');

    // Name the parts to what they represent
    const year  = parts[0];
    const month = parts[1];
    const day   = parts[2];

    return day + " " + formatMonthNumberToName(month) + " " + year;
}

function formatMonthNumberToName(monthNumber) {
    let monthName = "";

    switch(monthNumber) {
        case "01":
            monthName = i18n.translate('months.january');
            break;
        case "02":
            monthName = i18n.translate('months.february');
            break;
        case "03":
            monthName = i18n.translate('months.march');
            break;
        case "04":
            monthName = i18n.translate('months.april');
            break;
        case "05":
            monthName = i18n.translate('months.may');
            break;
        case "06":
            monthName = i18n.translate('months.june');
            break;
        case "07":
            monthName = i18n.translate('months.july');
            break;
        case "08":
            monthName = i18n.translate('months.august');
            break;
        case "09":
            monthName = i18n.translate('months.september');
            break;
        case "10":
            monthName = i18n.translate('months.october');
            break;
        case "11":
            monthName = i18n.translate('months.november');
            break;
        case "12":
            monthName = i18n.translate('months.december');
            break;
        default:
            monthName = monthNumber;
            break;
    }

    return monthName.toLowerCase();
}
