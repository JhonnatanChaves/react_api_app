import api from "../Shared/api";

const getAll = () => {
    return api.get("/product");
};

const get = id => {
    return api.get(`/product/${id}`);
  };
  

const findByName = name => {
   return api.get(`/product/GetByName/${name}`);
};

const findProductByCompany = companyName => {
    return api.get(`/product/GetProductByCompany/${companyName}`);
 };
 
  
const create = data => {
    return api.post("/product",data);
};
const update = (id,data) => {
    return api.put(`/product/${id}`,data);
};
const remove = id => {
    return api.delete(`/product/${id}`);
};

const ProductDataService= {
    getAll,
    get,
    findByName,
    findProductByCompany,
    create,
    update,
    remove
};

export default ProductDataService;
