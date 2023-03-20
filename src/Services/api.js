import axios from 'axios';
//https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=878f50dfcec80fb4a31c7bf1527cc55d

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;