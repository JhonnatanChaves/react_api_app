import React, {useState} from 'react';
import UserDataService from  "../../../services/User/index";
import {TOKEN_KEY} from  "../../../services/Shared/api";

const Login = props => {
    const [user,setUser] = useState ({
        id:null,
        email:"",
        password:""
    });  


const handleInputChange = event => {
    const {name,value} = event.target;
    setUser({ ...user, [name]: value});
};

const sendLogin = () => {
    var data = {
        email: user.email,
        password: user.password
    };

    UserDataService.login(data)
    .then(response => {
        localStorage.setItem(TOKEN_KEY,response.data?.result?.token);
        console.log(TOKEN_KEY+": "+localStorage.getItem(TOKEN_KEY));
        props.history.push("/company");
    })
    .catch(e => {
        console.log(e);
    });

};

return (
    <div>
        <div className="form-group">
            <label htmlFor="name">Login</label>                        
            <input 
            type="text" 
            className="form-control"
            id="email" 
            required 
            value = {user.email}
            onChange={handleInputChange}
            name="email"
            /> 
        </div>

        <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange} 
              name="password"
            />
        </div>      
        
        <button onClick={sendLogin} className="btn btn-success">
            Entrar
          </button>

    </div>
);

};
export default Login;