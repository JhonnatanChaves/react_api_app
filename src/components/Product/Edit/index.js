import React, { useState, useEffect } from "react";
import ProductDataService from  "../../../services/Company/index";


const FormOfPayment = (props) => {
   
    const [currentProduct, setCurrentProduct] = useState(null);


    const retrieveProduct = (id) => {     
      
      ProductDataService.get(id)
      .then(response => {
          setCurrentProduct(response.data);
          console.log(response.data);
                        
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        retrieveProduct(props.match.params.id);
        }, [props.match.params.id]);
       

      return(
        <div>
          <div>
           
          </div>  
        </div>
      );

}

export default FormOfPayment;