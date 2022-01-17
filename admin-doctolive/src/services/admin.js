
import Axios from 'axios'
import Config from 'Config';

function getDashbord (access_token) {  
    return new Promise( (resolve, reject) => {
        Axios.get(`${Config.BACKEND_URL}admin/dashbord`, {
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
    getDashbord,
};