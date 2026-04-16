import axios from 'axios';

const conn = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
    'Content-Type': 'application/json',
    'Origin': import.meta.env.VITE_APP_ORIGIN_URL,
  },
});

function getGroups(payload) {
    return new Promise( async (resolve,reject) => {
        const url = "/get-groups";

        conn.post(url,payload, {withCredentials: true})
        .then( (response) => {
            return resolve(response.data);
        }).catch((err) => {
            console.error("ERROR REJECT",err);
            return reject(err);
        });
    });
} 


export {conn, getGroups};