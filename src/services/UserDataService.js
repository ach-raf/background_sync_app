import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

class UserDataService {
    //return axios.get(`${API_URL}/users`, { crossdomain: true });
    retrieveAllUsers() {
        return axios.get(`${API_URL}/users`);
    }
    retrieveUser(id) {
        return axios.get(`${API_URL}/users/` + id);
    }
}

export default new UserDataService();

