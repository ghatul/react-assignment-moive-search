import axios from 'axios';


function request(url, method, data, headers = {}) {
    return axios({
        url,
        method,
        data,
        headers,
    });
}

export default class RequestService {

    static fetch(url) {
        return request(url, 'get', {})
    }

    static save(url, data) {
        return request(url, 'post', data);
    }

}