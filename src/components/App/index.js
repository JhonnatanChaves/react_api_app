import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import {Edit,Add,List} from "../Company/index";
import {Login} from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./style.css";


function App() {
    return (
      <div >
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand" to={"/user"}>
            Meu Mercado Favorito
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link  to={"/company"} className="nav-link">
                Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link  to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
  
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/user"]} component={Login} />
            <Route exact path={"/company"} component={List} />
            <Route exact path="/add" component={Add} />
            <Route path="/company/:id" component={Edit} />
          </Switch>
        </div>
      </div>
    );
  }



export default App;
