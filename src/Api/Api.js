import axios from "axios"

export const API = 'https://fakestoreapi.com/'
export const API_PRODUCTS = `${API}products/`
export const API_LOGIN = `${API}auth/login`
export const API_USER = `${API}users/`
export const API_USER_CART = `${API}carts/user/`
export const API_CART = `${API}carts/`


export const api = axios.create({
    baseURL: API
})