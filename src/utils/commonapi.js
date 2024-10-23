import { appAxios } from './axios-base-utils';


export const userMe = () => appAxios.get('/api/v1/user/me');
export const userLoginApi = (data) => appAxios.post('/api/v1/login', data);
export const userRegisterApi = (data) => appAxios.post('/api/v1/register', data);
export const Logout = () => appAxios.get('/api/v1/logout');
export const VerifyEmailApi = (data) => appAxios.get(`/api/v1/verify-email?token=${data}`);
export const getProducts = (data) => appAxios.get(`/api/v1/products?page=${data}`);
export const getProductById = (id) => appAxios.get(`/api/v1/product/${id}`);
export const collections = (data) => appAxios.get(`/api/v1/product-collection?${data}`);
