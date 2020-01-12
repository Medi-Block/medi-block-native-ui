// 2019-12-21
export const formatDate = (dateStr) => {
    if (isValidTimestamp(dateStr)) {
        dateStr = new Date(dateStr);
    }
    var d = new Date(dateStr),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = d.getUTCFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    let date = [year, month, day].join('-');
    return date;
}

// 21 Dec
export const formatDate2 = (dateStr) => {
    if (isValidTimestamp(dateStr * 1000)) {
        dateStr = new Date(dateStr * 1000);
    }
    var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    var d = new Date(dateStr);
    var month = d.getUTCMonth();
    var day = d.getUTCDate();
    return [day.toString(), months[month]].join(' ');
}

// 21 Dec. 2019
export const formatDate3 = (dateStr) => {
    if (isValidTimestamp(dateStr * 1000)) {
        dateStr = new Date(dateStr * 1000);
    }
    var months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    var d = new Date(dateStr);
    var month = d.getUTCMonth();
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();
    return [day.toString(), months[month], year].join(' ');
}

// 21
export const day = (dateStr) => {
    if (isValidTimestamp(dateStr)) {
        dateStr = new Date(dateStr);
    }
    var d = new Date(dateStr);
    var day = d.getUTCDate();
    return day.toString();
}

// Dec.
export const month = (dateStr) => {
    if (isValidTimestamp(dateStr)) {
        dateStr = new Date(dateStr);
    }
    var months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    var d = new Date(dateStr);
    var month = d.getUTCMonth();
    return months[month];
}

// 2019
export const year = (dateStr) => {
    if (isValidTimestamp(dateStr)) {
        dateStr = new Date(dateStr);
    }
    var d = new Date(dateStr);
    var year = d.getUTCFullYear();
    return year.toString();
}

// 21st Dec. 2019
export const headerDate = (dateStr) => {
    if (isValidTimestamp(dateStr * 1000)) {
        dateStr = new Date(dateStr * 1000);
    }
    var months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    var d = new Date(dateStr);
    // UTC issue where dateStr is shifted by timezone
    // When we pass dateStr as "2019-03-21" we need to use getUTC* methods
    var month = d.getUTCMonth();
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();
    var suffix = "y";
    if (day > 3 && day < 21)
        suffix = "th";
    else {
        switch (day % 10) {
            case 1: suffix = "st"; break;
            case 2: suffix = "nd"; break;
            case 3: suffix = "rd"; break;
            default: suffix = "th"; break;
        }
    }
    let formattedDateStr = [day.toString() + suffix, months[month], year].join(' ');
    return formattedDateStr;
}

export const currentDate = () => {
    dateStr = formatDate(new Date());
    return dateStr;
}

function isValidTimestamp(_timestamp) {
    const newTimestamp = new Date(_timestamp).getTime();
    return isNumeric(newTimestamp);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// 17:20 -> 5.20 PM && 17:00 -> 5 PM
export const formatTime = (time) => {
    var hours = time.substring(0, 2);
    var minutes = time.substring(3, 5);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours >= 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (minutes > 0) {
        var strTime = hours + '.' + minutes + ' ' + ampm;
        return strTime;
    } else {
        var strTime = hours + ' ' + ampm;
        return strTime;
    }
}