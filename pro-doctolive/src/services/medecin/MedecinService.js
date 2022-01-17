
import Axios from 'axios'
import Config from 'Config';


function signupMedecin (data) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin`,data , { 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(result => {
            resolve(result);
        }).catch(e => {
            reject(e)
        });
    })
}

function GeneralInfoUpdate (data, UserData) {

    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}/medecin/${UserData.user.id}`,data , { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${UserData.token}`,
            }
        })
        .then(result => {
            resolve(result);
        }).catch(e => {
            reject(e)
        });
    })
}


function uploadImage  (data, access_token) {  
    try {
    //   setSaving(true)
    return new Promise( async (resolve, reject) => {

        let response = await fetch(`${Config.BACKEND_URL}/upload/medecin-profil`, {
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

function signinMedecin (data) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/auth`,data , { 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(result => {
            resolve(result);
        }).catch(e => {
            reject(e)
        });
    })
}

function getCity ( access_token) {

    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/city`, {
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

function StoreSpeciality (data, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/specialities`, data, {
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

function StoreExperiences (data, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/experience`, data, {
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

function StoreTarifs (data, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/tarif`, data, {
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

function DeleteTarif ( id, access_token) {
    console.log(access_token)
    return new Promise( (resolve, reject) => {
        Axios.delete(`${Config.BACKEND_URL}/medecin/tarif/${id}`, {
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

function UpdateTarif (data, id, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}/medecin/tarif/${id}`, data, {
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

function StoreHoraire (data, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/horaire`, data, {
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


function accessInfoStore (data, access_token) {

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/medecin/access`, data, {
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


function getMedecinInfos ( access_token) {

    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/medecin/info`,  {
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
function getMedecinById ( id) {

    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/medecin/${id}`,  {
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

function recherche (specialite, ville) {

    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/medecin/${specialite}/${ville}`,  {
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
function getSpecialities ( ) {

    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/speciality`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `token ${access_token}`,
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

    let postData = {fullName: data.fullName, email: data.email, phone: data.phone, vehicule: data.vehicule, allWeek: data.allWeek, allDay: data.allDay, cityId:data.city.id};

    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/delivery-man`, postData, { 
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

    let postData = {fullName: data.fullName, email: data.email, phone: data.phone, vehicule: data.vehicule, allWeek: data.allWeek, allDay: data.allDay, cityId:data.city.id};

    return new Promise( (resolve, reject) => {
        Axios.put(`${Config.BACKEND_URL}/delivery-man/${data.id}`, postData, { 
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
        Axios.get(`${Config.BACKEND_URL}/delivery-man`, {
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
        Axios.get(`${Config.BACKEND_URL}/delivery-man/${id}`, {
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

function getSpecialitiesSearched (value) {  
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}/medecin/search/specialite/${value}`, {
            headers: {
                'Content-Type': 'application/json'
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
    signupMedecin, 
    getCity,
    addElement,
    getAllElement,
    getOneElement,
    updateEelement,
    signinMedecin,
    getSpecialities,
    StoreSpeciality,
    StoreExperiences,
    StoreTarifs,
    DeleteTarif,
    UpdateTarif,
    StoreHoraire,
    getMedecinInfos,
    GeneralInfoUpdate,
    uploadImage,
    recherche,
    accessInfoStore,
    getSpecialitiesSearched,
    getMedecinById,

};