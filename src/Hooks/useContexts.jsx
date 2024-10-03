import { createContext, useContext } from "react"

const ProductContext = createContext();

export function useContexts() {
  return useContext(ProductContext)
}

export const ProductsProvider = ({children, value}) => {
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
