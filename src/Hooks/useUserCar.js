import { useEffect, useState } from "react";
import { API_PRODUCTS, API_USER_CART } from "../Api/Api";
import { getProduct } from "../Services/Services";

export function useUserCar(user) {
  const [car, setCar] = useState([])
  const [product, setProduct] = useState([]);
  const [productQuantity, setProductQuantity] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchUserCart = async () => {
        const response = await getProduct(`${API_USER_CART}${user.id}`);
        setCar(response.id)

        if (response) {
          let productArray = response.map((dt) => dt.products).flat();
          
          if (productArray.length > 0) {
            let productQuantityMap = {};
            productArray.forEach((product) => {
              productQuantityMap[product.productId] = product.quantity;
            });
            setProductQuantity(productQuantityMap);
            console.log(productQuantityMap)

            let productIds = productArray.map((product) => product.productId);
            setProductId(productIds)

            const productDetails = await Promise.all(
              productIds.map((id) => getProduct(`${API_PRODUCTS}${id}`))
            );
            setProduct(productDetails);

            let totalValue = productDetails.reduce((sum, item) => sum + item.price, 0);
            setTotalPrice(totalValue)
          }
        }
      };
      fetchUserCart();
    }
  }, [user]);
  return { product, productQuantity, totalPrice, car };
}
