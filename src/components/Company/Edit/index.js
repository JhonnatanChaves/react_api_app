import React, { useState, useEffect } from "react";
import CompanyDataService from  "../../../services/Company/index";

const Edit = props => {
    const initialCompanyState = {
        id: null,
        fancyName: ""
    };

    const [currentCompany, setCurrentCompany] = useState(initialCompanyState);

    const [message, setMessage] = useState("");

    const getCompany = id => {
        CompanyDataService.get(id)
          .then(response => {
            setCurrentCompany(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        getCompany(props.match.params.id);
      }, [props.match.params.id]);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentCompany({ ...currentCompany, [name]: value });
      };

      const updateCompany = () => {
        CompanyDataService.update(currentCompany.id, currentCompany)
          .then(response => {
            console.log(response.data);
            setMessage("The company was updated successfully!");
          })
          .catch(e => {
            console.log(e);
          });
      };

      const deleteCompany = () => {
        CompanyDataService.remove(currentCompany.id)
          .then(response => {
            console.log(response.data);
            props.history.push("/company");
          })
          .catch(e => {
            console.log(e);
          });
      };

      return (
        <div>
            {currentCompany ? (
                <div className="edit-form"><h4>Company</h4>
                <form>
                    <div className="form-group">
                      <label htmlFor="name">Nome: </label>
                      <input type="text" className="form-control" id="fancyName" name="fancyName" value={currentCompany.fancyName} onChange = {handleInputChange} />
                    </div>
                </form>

                <button className="badge badge-danger mr-2" onClick={deleteCompany}>Apagar</button>

                <button type="submit" className="badge badge-sucess" onClick={updateCompany}>Atualizar</button>

                <p>{message}</p>
                </div>

            ):(
                <div>
                <br />
                <p>Please click on a company...</p>
              </div>
        
            )}
        </div>
      );

};

export default Edit;