import axios from "axios";


const url = "https://jsonplaceholder.typicode.com/posts"


export const get = () => {
    return axios.get(url);
}
