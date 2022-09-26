import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e8e038458595d260049b261decf3bfb1",
        language: "ko-KR",
    },
});

export default instance;