import httpClient from "../http-comman";

const getAll = ()=>{
    return httpClient.get('')
};

const getSingleProduct = (id)=>{
    return httpClient.get(`${id}`)
};

const createProduct =(data)=> {

   return  httpClient.post('',data);
}

export default {getAll,getSingleProduct, createProduct}