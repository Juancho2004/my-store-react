import { api } from "../Api/Api"

export function buildUrlWithParams(baseUrl, params) {
    const url = new URL(baseUrl);
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined) {
        url.searchParams.append(key, params[key]);
      }
    });
    return url.toString();
  }

export const getProducts = async (url) => {
    try {
        const response = await api.get(url)
        return response.data    
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const getCategories = async (url) => {
    try {
        const response = await api.get(url)
        return response.data    
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const getProduct= async (url, id) => {
    try {
        const response = await api.get(url, id)
        return response.data    
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}