import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login} from "../User/index";
import ListCompanies from "../Company/List/index"
import ListProducts from '../Product';
import FormOfPayment from "../Product/Edit/index"
const Routes = () => {

    return(
        
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/user"]} component={Login} />                      
            <Route exact path="/home" component={ListCompanies}/>
            <Route exact path="/product/GetProductByCompany/:fancyName" component={ListProducts}/>
            <Route exact path="/product/:id" component={FormOfPayment}/>
        </Switch>

    </BrowserRouter>

    );

}
export default Routes;