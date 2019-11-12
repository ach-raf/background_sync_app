import axios from 'axios'

const SERVER_PORT = 6060
const API_URL = 'http://localhost:' + SERVER_PORT + '/api/'

//config for axios
var config = {
    headers: {
        //allow cross origin calls between server and client.
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
};

// methode to get all users from the server
const getUsers = async () => {
    const url = API_URL + 'users';
    var data = [];
    axios.get(url, config)
        .then((response) => {
            data = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return data;
}

//update the user with a put request to the api
function updateUser(user) {
    const url = API_URL + 'user/' + user.id
    axios.put(url, user);
}

export default {
    getUsers: getUsers,
    updateUser: updateUser
}

