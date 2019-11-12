import requestService from './request.service';

export default class MovieService {
    static login(data) {
        let url = 'http://jsonplaceholder.typicode.com/users/1';
        return requestService.fetch(url, data).then(res => {
            return res.data;
        }).catch(err => err);
    }

    static searchMovies(title) {
        let url = `https://www.omdbapi.com?i=tt3896198&apikey=2933c48b&type=movie&r=json&s=${title}`;
        return requestService.fetch(url).then(res => {
            if(res.data && res.data.Response === 'True' && res.data.Search) {
                return res.data;
            } else {
                return {Search:[]};
            }
        }).catch(err => err);
    }

    static getMovie(id) {
        console.log(id);
        let url = `https://www.omdbapi.com?i=${id}&apikey=2933c48b&type=movie&r=json`;
        return requestService.fetch(url).then(res => {
           return res.data;
        }).catch(err => err);
    }
}