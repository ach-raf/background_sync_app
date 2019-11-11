import axios from 'axios'
//import API_URL from '../utils'
const SERVER_PORT = 6060
const API_URL = 'http://localhost:' + SERVER_PORT + '/api/'

const getUsers = async () => {
    const url = API_URL + 'users';
    let response = await axios.get(url);
    let data  = response.data;
    return data
}
const getUser = async (id) => {
    const url = API_URL + 'user/' + id;
    let { data } =  await axios.get(url)
    return data
}
function updateUser(user){
    const url = API_URL + 'user/' + user.id
    console.log(url)
    axios.put(url, user);

}

export default {
    getUsers: getUsers,
    getUser: getUser,
    updateUser:updateUser
}

