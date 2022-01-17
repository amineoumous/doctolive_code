
import Axios from 'axios'
import Config from 'Config';


function activateElement (id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}admin/medecin/activate/${id}`,{} , { 
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

function _blockingElement (id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}admin/medecin/inactivate/${id}`,{} , { 
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

function _deblockingElement (id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}admin/medecin/deblock/${id}`,{} , { 
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

function deleteElement (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.delete(`${Config.BACKEND_URL}admin/medecin/${id}` , { 
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

    let postData = {...data, cityId:data.city.id, };
    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}admin/medecin`, postData, {
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

function updateElement (data, access_token) {
    let postData = {...data, cityId:data.city.id, };

    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}admin/medecin/${data.id}`, postData, { 
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
        Axios.get(`${Config.BACKEND_URL}medecin`, {
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

function getMedecinConsultation (id, access_token) {  
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}admin/medecin/consultations/${id}`, {
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
        Axios.get(`${Config.BACKEND_URL}medecin/${id}`, {
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
    getMedecinConsultation,
    deleteElement,
    _blockingElement,
    _deblockingElement,
};