import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-clone-4851b/us-central1/api',//Api cloud function url
});
export default instance