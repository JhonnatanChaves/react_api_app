import React, { useState, useEffect } from "react";
import CompanyDataService from  "../../../services/Company/index";
import { Link } from "react-router-dom";
//import "./style.css";

const List = () => {

    const [companies, setCompanies] = useState([]);
    const [currentCompany, setCurrentCompany] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveCompanies();
      }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };  

    const retrieveCompanies = () => {
        CompanyDataService.getAll()
          .then(response => {
            setCompanies(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const setActiveCompany = (company, index) => {
          setCurrentCompany(company);
          setCurrentIndex(index);
      }

      const findByName = () => {

        if(searchName !== ''){
        CompanyDataService.findByName(searchName)
          .then(response => {
            setCompanies(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        }else{
          retrieveCompanies();
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
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4>Lista de Companhias </h4>

        <ul className="list-group">
          {companies &&
            companies.map((company, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{cursor:'pointer'}}
                onClick={() => setActiveCompany(company, index)}
                key={index}
              >
                {company.fancyName}
              </li>
            ))}
        </ul>
        
              
    </div>

      <div className="col-md-6">
        {currentCompany ? (
          <div>
            <h4>Companhia</h4>
            <div>
              <label>
                <strong>Nome: </strong>
              </label>{" "}
              {currentCompany.fancyName}
            </div>
            
            <Link
              to={"/company/" + currentCompany.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor click sobre uma Companhia...</p>
          </div>
        )}
      </div>

    </div>
      );
};

export default List;