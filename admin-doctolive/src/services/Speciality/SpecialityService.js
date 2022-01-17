

import Axios from 'axios'
import Config from 'Config';


function activateElement (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}speciality/activate/${id}`,{} , { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then(result => {
            resolve(result);
        }).catch(e => {
            reject(e)
        });
    })
}


function addElement (data, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}speciality`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch(err => {
            reject(err)
        });
    })
}

function updateElement (data, id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}speciality/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch(err => {
            reject(err)
        });
    })
}



function getAllElement (access_token) {
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}speciality`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch(err => {
            reject(err)
        });
    })
}

function getOneElement (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}speciality/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch(err => {
            reject(err)
        });
    })
}


function deleteElement (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.delete(`${Config.BACKEND_URL}speciality/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${access_token}`,
            }
        })
        .then((result) => {
            resolve(result);
        })
        .catch(err => {
            reject(err)
        });
    })
}

export { 
    activateElement, 
    addElement,
    getAllElement,
    getOneElement,
    updateElement,
    deleteElement,
};