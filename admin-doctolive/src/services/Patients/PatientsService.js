
import Axios from 'axios'
import Config from 'Config';


function activateElement (id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}patient/activate/${id}`,{} , { 
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
        Axios.patch(`${Config.BACKEND_URL}patient/inactivate/${id}`,{} , { 
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
        Axios.patch(`${Config.BACKEND_URL}patient/deblock/${id}`,{} , { 
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
        Axios.delete(`${Config.BACKEND_URL}admin/patient/${id}` , { 
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
        Axios.post(`${Config.BACKEND_URL}admin/patient`, data, { 
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

function updateEelement (data, access_token) {


    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}admin/patient/${data.id}`, data, { 
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
        Axios.get(`${Config.BACKEND_URL}patient`, {
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
        Axios.get(`${Config.BACKEND_URL}patient/consultation/${id}`, {
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
    updateEelement,
    deleteElement,
    _blockingElement, 
    _deblockingElement,
};