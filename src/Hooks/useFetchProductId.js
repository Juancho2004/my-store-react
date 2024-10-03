import { useEffect, useState } from "react";
import { getProduct } from "../Services/Services";
import { API_PRODUCTS } from "../Api/Api";

export function useFetchProductId() {
  const [details, setDetails] = useState(null);
  const [current, setCurrent] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const productsDetails = (product) => {
    if (product && product.id) {
      const id = product.id;
      console.log(id);
      setCurrent(id);
    } else {
      console.log("No Exist Id");
    }
  };

  const handleProductClick = (product) => {
    productsDetails(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct(`${API_PRODUCTS}${current}`);
        setDetails(response);
      } catch (error) {
        console.error("Error al conseguir personajes", error);
      }
    };

    fetchData();
  }, [current]);

  return { details, productsDetails, handleProductClick, handleCloseModal, modalVisible};
}
