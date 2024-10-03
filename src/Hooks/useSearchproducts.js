import { useState } from "react";

export function useSearchProducts({ products }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({searchValue})
  };

  const searchproducts = products ? products.filter((product) => {
    const searchingProducts = product.title ? product.title.toLowerCase(): '';
    const searchingProduct = searchValue.toLowerCase();

    return searchingProducts.includes(searchingProduct)
  }) : [];

  const handleSearch = (value) =>{
    setSearchValue(value)
    handleSubmit(value)
  }

  return {searchValue, setSearchValue, searchproducts, handleSearch, handleSubmit};
}
