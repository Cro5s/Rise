import axios from 'axios';

//Category index page
export const getProducts = (category) => {
    return axios.get(`/api/products/${category}`);
};

//Products index page
export const getProductTypes = (category, productType) => {
    return axios.get(`/api/products/${category}/${productType}`);
};

//Product show page
export const getProduct = (Id) => {
    return axios.get(`/api/products/${Id}`);
};