const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTJmZTgzZDc3NWE2NGY5MDgxMWE3NTA5ZTA1YTdjYSIsIm5iZiI6MTcyNTgzNTA0MC4yNzA0MjMsInN1YiI6IjY2ZDBmNzVjZWEyMmFkNTYyYzk0MWE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-tUsoJbhZtySw_gR7rxAWXC5mz4EPqHZ3vPTejuh1m0'
    }
})

export default apiMovie