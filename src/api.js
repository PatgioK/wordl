import axios from 'axios';


export function fetchUserData () {
    return axios.get('https://randomuser.me/api')
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.error(err);
    })
}