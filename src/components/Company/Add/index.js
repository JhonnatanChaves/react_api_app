import React,{useState} from "react";
import CompanyDataService from "../../../services/Company/index";

const Add = () => {

    const initialCompanyState = {id:null, name: ""};

    const [company,setCompany]= useState(initialCompanyState);

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name,value} = event.target;
        setCompany({...company,[name]:value})
    };

    const saveCompany = () => {
        var data = {
            name:company.name
        };

        CompanyDataService.create(data).then(response => {
            setCompany({
                id: response.data.id,
                name:response.data.name
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
                    <h4>You submitted sucessfully!</h4>
                    <button className="btn btn-sucess" onClick=  {newCompany}>Add</button>
                </div>
            ):(
                <div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" required value={handleInputChange} name="name" />

                </div>
                <button onClick={saveCompany} className="btn btn-sucess">Salvar</button>

                </div>
            )}
        </div>
    );
};

export default Add;