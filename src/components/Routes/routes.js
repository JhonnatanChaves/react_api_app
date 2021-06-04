import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from "../User/index";
//import StepperDemo from "../Stepper/index"
import ListCompanies from "../Company/List/index"
import ListProducts from '../Product';
//import ListProducts from "../Product/index"
const Routes = () => {

    return(
        
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/user"]} component={Login} />                      
            <Route exact path="/home" component={ListCompanies}/>
            <Route exact path="/product/GetProductByCompany/:fancyName" component={ListProducts}/>
        </Switch>

    </BrowserRouter>

    );

}
export default Routes;