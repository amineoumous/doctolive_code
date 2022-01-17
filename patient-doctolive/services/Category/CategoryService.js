
import Axios from 'axios'
import Config from './../../config.js';

function activateElement (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.patch(`${Config.BACKEND_URL}/category/activate/${id}`,{} , { 
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
        Axios.post(`${Config.BACKEND_URL}/category`, data, {
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
        Axios.put(`${Config.BACKEND_URL}/category/${id}`, data, {
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

function updateSousCategory (data, id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}/category/sous-category/${id}`, data, {
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


function uploadImage  (data, access_token) {  
    try {
    //   setSaving(true)
    return new Promise( async (resolve, reject) => {

        let response = await fetch(`${Config.BACKEND_URL}/category/upload-icon`, {
            method: 'POST',
            body: JSON.stringify({ data: data.filePath, fileType: data.fileType, realName: data.realName }),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${access_token}`,
            },
        });
      response.json()
      .then(json =>{
        //   data = {...data, fileName: json.fileName}
          return resolve(json);
  
      }).catch(err => {return reject(err)})

      
    })
    } catch (err) {
      
    }  
}

function getAllCategory (access_token) {
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/category`, {
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
        Axios.get(`${Config.BACKEND_URL}/category/${id}`, {
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

function getOneElementSousCategory (id, access_token) {
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/category/sous-category/${id}`, {
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
    getAllCategory,
    getOneElement,
    updateElement,
    getOneElementSousCategory,
    updateSousCategory,
    uploadImage,

};