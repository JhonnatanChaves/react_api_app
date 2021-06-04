import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from '../Routes/routes';  
import './style.css';


const App = () => {
  
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
              <h4 >SuperMarket</h4> 
             
        </nav>
        
       <Routes/>
    
      </div>

    );
  }



export default App;
