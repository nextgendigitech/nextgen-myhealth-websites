import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

export const getUUID = () => {
    // Fetch, if not found, set a new uuid
    if (!localStorage.getItem("nh-uuid")) localStorage.setItem("nh-uuid", uuidv4());

    return localStorage.getItem("nh-uuid");
}


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

export const removeHttp = (url) => {
    return url.replace(/^https?:\/\//, '');
}

export const trimText = (text, length) => {
    if(text?.length > length) {
        return text.slice(0, length) + '...';
    }
    else {
        return text;
    }
}
