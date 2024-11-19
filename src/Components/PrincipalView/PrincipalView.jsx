import { useLocation } from "react-router-dom";
import { ProductsProvider } from "../../Hooks/useContexts";
import { useFetchProductId } from "../../Hooks/useFetchProductId";
import { useFetchProducts } from "../../Hooks/useFetchProducts";
import { useSearchProducts } from "../../Hooks/useSearchproducts";
import { useTabCategories } from "../../Hooks/useTabCategories";
import { Navbar } from "./Navbar/Navbar";
import { Products } from "./Products/Products";
import { useUserID } from "../../Hooks/useUserID";
import { useLogic } from "../../Hooks/useLogic";
import { useUserCar } from "../../Hooks/useUserCar";
import { useDelete } from "../../Hooks/useDelete";
// import { User } from "./User/User";
// import { User } from "./User/User";

export function PrincipalView() {
  const { activeTab, setActiveTab, filterCategories, dataFilter } =
    useTabCategories();
  const { products, limit, handleLimits, handleAll } = useFetchProducts();
  const { details, handleProductClick, handleCloseModal, modalVisible } =
    useFetchProductId();
  const {
    searchValue,
    setSearchValue,
    searchproducts,
    handleSearch,
    handleSubmit,
  } = useSearchProducts({ products });
  const location = useLocation();
  const { user } = location.state || {};
  const { userDetails } = useUserID(user);
  const { product, productQuantity, totalPrice, car } = useUserCar(user);
  const {
    handleShowModal,
    handleCloseShowModal,
    showModal,
    handleShowModalCart,
    handleCloseShowModalCart,
    showModalCart,
    length,
  } = useLogic(product);
  const { deteleCart, carDelete } = useDelete(car);

  const contextValue = {
    activeTab,
    setActiveTab,
    filterCategories,
    dataFilter,
    products,
    limit,
    handleLimits,
    handleAll,
    searchValue,
    setSearchValue,
    searchproducts,
    details,
    handleProductClick,
    handleCloseModal,
    modalVisible,
    handleSearch,
    handleSubmit,
    user,
    userDetails,
    handleShowModal,
    handleCloseShowModal,
    showModal,
    product,
    productQuantity,
    totalPrice,
    handleShowModalCart,
    handleCloseShowModalCart,
    showModalCart,
    length,
    deteleCart,
    carDelete,
  };

  return (
    <>
      <ProductsProvider value={contextValue}>
        <header>
          <Navbar />
        </header>
        <body>
          <Products />
        </body>
      </ProductsProvider>
    </>
  );
}
