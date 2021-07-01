import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductDataService from  "../../services/Product/index";
import {Link} from "react-router-dom"

const ListProducts = () => {

    const {fancyName}=useParams();
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");


    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };  

    const retrieveProducts = (fancyName) => {     
      
      ProductDataService.findProductByCompany(fancyName)
      .then(response => {
            setProducts(response.data);
            console.log(response.data);
                        
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        retrieveProducts(fancyName);
        }, [fancyName]);
  

      const setActiveProduct = (product, index) => {
          setCurrentProduct(product);
          setCurrentIndex(index);
      }

      const findByName = () => {

        
        if(searchName !== '') {
           ProductDataService.findByName(searchName)
          .then(response => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        }else{
          retrieveProducts();
        }
      };

      return(
        <div>

<div className="col-md-8">

  
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h3>Lista de Produtos </h3>

        <ul className="list-group">
          {products &&
           products.map((product, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{cursor:'pointer'}}
                onClick={() => setActiveProduct(product, index)}
                key={index}
              >
                {product.name}
              </li>
            ))}
        </ul>
        
              
    </div>

      <div className="col-md-6">
        {currentProduct ? (
          <div>
            <h2>Produto Selecionado :</h2>
            <div>
              <label>
                <strong>Nome: </strong>
              </label>{" "}
              {currentProduct.name}
            </div>
            <div>
              <label>
                <strong>Descrição: </strong>
              </label>{" "}
              {currentProduct.description}
            </div>
            <div>
              <label>
                <strong>Valor: </strong>
              </label>{" "}
              {currentProduct.value}
            </div>

            <Link to={"/product/" + currentProduct.id} >
                  Continuar
              </Link>
              
            
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor, click sobre uma Companhia...</p>
          </div>
        )}
      </div>

    </div>
      );
};

export default ListProducts;