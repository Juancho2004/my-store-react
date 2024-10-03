import { useEffect, useMemo, useState } from "react";
import { buildUrlWithParams, getProducts } from "../Services/Services";
import { API_PRODUCTS } from "../Api/Api";

export function useFetchProducts() {
  const [limit, setLimit] = useState(8);
  const [products, setProducts] = useState([]);

  
  const params = useMemo(
    () => ({
      limit,
    }),
    [limit]
  );

  useEffect(() => {
    fetchData();
  }, [params]);

  const handleLimits = (value) => {
    setLimit(value);
  };
  const fetchData = async () => {
    const url = buildUrlWithParams(API_PRODUCTS, params);
    try {
      const response = await getProducts(url);
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAll = () => {
    fetchData();
  };

  return { products, limit, handleLimits, handleAll };
}
