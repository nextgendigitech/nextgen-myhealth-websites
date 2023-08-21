import axios from "axios";

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        throw response;
    }
}

const HttpClient = async (config) => {
    const { url, method='GET', data=null, params=null} = config;

    return (
        await axios({
            method: method,
            url: url,
            data: data,
            params: params
        })
        .then(checkStatus)
        .catch((error) => {
            throw error;
        })
    )
}

export default HttpClient;