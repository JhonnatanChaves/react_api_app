
import api from "../Shared/api";

const login = data => {
    return api.post("/authentication",data);
};

const UserDataService = {
    login
};

export default UserDataService;
