
import Axios from 'axios'
import Config from 'Config';


function activateElement (id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}feedback/activate/${id}`,{} , { 
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

function getCity ( ) {
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}feedback`, {
            headers: {
                'Content-Type': 'application/json',
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

function addElement (data, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}feedback`, data, {
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
        Axios.put(`${Config.BACKEND_URL}city/${id}`, data, {
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
        Axios.get(`${Config.BACKEND_URL}feedback`, {
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
        Axios.get(`${Config.BACKEND_URL}feedback/${id}`, {
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
        Axios.delete(`${Config.BACKEND_URL}feedback/${id}`, {
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
    getCity,
    addElement,
    getAllElement,
    getOneElement,
    updateElement,
    deleteElement,

};