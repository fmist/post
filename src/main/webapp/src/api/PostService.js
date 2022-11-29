import axios from "axios";

export default class PostService {
    static request = axios.create({baseURL: "http://localhost:8081"})

    static deletePost = async (id) => {
        await PostService.request.post(`/delete/${id}`)
            .then(response => response.data);
        window.location.reload()
    }
}