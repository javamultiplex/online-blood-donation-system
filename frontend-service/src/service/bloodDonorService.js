import axios from 'axios';

export const register = (image, request) => {
    let formdata = new FormData();
    formdata.append("file", image);
    formdata.append("request", JSON.stringify(request));

    return axios.post("http://localhost:8080/api/v1/register", formdata, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}