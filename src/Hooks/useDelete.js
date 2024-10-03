import { useEffect, useState } from "react";
import { api, API_CART, API_PRODUCTS } from "../Api/Api";

export function useDelete(car) {
  const [currentDelete, setCurrentDelete] = useState(null);

  const fetchDelete = async () => {

      if (!currentDelete) {
        console.error("No existe Id");
        return;
      }

    try {
      const response = await api.delete(`${API_CART}${currentDelete}`);
      console.log("Product remove", response);
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  const deteleCart = (productId) => {
    setCurrentDelete(productId);
    fetchDelete();
  };

  return { deteleCart };
}
