import axios from 'axios';

export const register = (prescription, request) => {
    let formdata = new FormData();
    formdata.append("file", prescription);
    formdata.append("request", JSON.stringify(request));

    return axios.post("http://localhost:8080/api/v1/recipient", formdata, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const findAll = () => {
    return axios.get("http://localhost:8080/api/v1/recipients");
}

export const deleteRecipient = (id) => {
    return axios.delete(`http://localhost:8080/api/v1/recipient/${id}`)
}

export const getRecipient = (id) => {
    return axios.get(`http://localhost:8080/api/v1/recipient/${id}`)
}

export const updateRecipient = (id, status, comment) => {
    return axios.patch(`http://localhost:8080/api/v1/recipient/${id}`, {
        "status": status,
        "comment": comment
    })
}