


import Config from 'Config';
import Axios from 'axios'

function uploadImages  (data, access_token) {  
    try {

        return new Promise( async (resolve, reject) => {

        let response = await fetch(`${Config.BACKEND_URL}/upload/cabinet`, {
            method: 'POST',
            body: JSON.stringify({ data}),
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


function uploadDocuments (data, access_token, consultation) {  
    try {

        return new Promise( async (resolve, reject) => {

        let response = await fetch(`${Config.BACKEND_URL}/upload/document`, {
            method: 'POST',
            body: JSON.stringify({ data: data, consultation: consultation, sentTo:"patient" }),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json',
              'Authorization': `token ${access_token}`,
            },
        });
      response.json()
      .then(json =>{
          return resolve(json);
  
      }).catch(err => {return reject(err)})

      
    })
    } catch (err) {
      
    }  
}


function deleteImage (file, access_token ) {
    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/upload/delete-cabinet`,file,  {
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


function deleteDocument (file, access_token ) {
    return new Promise( (resolve, reject) => {
        Axios.post(`${Config.BACKEND_URL}/upload/delete-document`,file,  {
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
    uploadImages,
    deleteImage,
    uploadDocuments,
    deleteDocument,
};