import moment from "moment";

export const getDate = (date, format="medium") => {
    let dateObj = moment(date);
    
    if (moment().format('YYYY-MM-DD') === dateObj.format('YYYY-MM-DD')) {
        return "Today"
    }
    else if (format==="long")
        return dateObj.format('D MMMM YYYY');
    else if (format==="medium")
        return dateObj.format('D MMM YY');
    else
        return dateObj.format('D MMM');
}

export const getTime = (time) => {
    return moment(time, 'HH:mm:ss').format('hh:mm A')
}

export const getTimeFromDateTime = (datetime) => {
    return moment(datetime).format('hh:mm A')
}

