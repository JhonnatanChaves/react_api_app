import React,{useState} from "react";
import CompanyDataService from "../../../services/Company/index";

const Add = () => {

    const initialCompanyState = {id:null, fancyName: ""};

    const [company,setCompany]= useState(initialCompanyState);

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name,value} = event.target;
        setCompany({...company,[name]:value})
    };

    const saveCompany = () => {
        var data = {
            fancyName:company.fancyName
        };

        CompanyDataService.create(data).then(response => {
            setCompany({
                id: response.data.id,
                name:response.data.fancyName
            });
            setSubmitted(true);
            console.log(response.data);
        })
        .catch(e=> {
            console.log(e);
        });

    };

    const newCompany = () => {
        setCompany(initialCompanyState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Companhia salva</h4>
                    <button className="btn btn-sucess" onClick= {newCompany}>Add</button>
                </div>
            ):(
                <div>

                <div className="form-group">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" className="form-control" id="fancyName" required value={handleInputChange} name="fancyName" />

                </div>
                <button onClick={saveCompany} className="btn btn-sucess">Salvar</button>

                </div>
            )}
        </div>
    );
};

export default Add;