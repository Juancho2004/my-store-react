import { useContexts } from "../../../../Hooks/useContexts";
import { ProductsCars } from "./ProductsCars";
import closeCart from '../../../../assets/close.svg'
import "./cart.css";

export function Cart() {
  const { handleCloseShowModalCart  } = useContexts();

  return (
    <>
      <div className="cart__overlay"></div>
      <aside className="cart">
        <span className="cart__header">
            <p>Your Products</p>
            <img src={closeCart} alt="image close" onClick={handleCloseShowModalCart}/>
        </span>
          <>
            <ProductsCars/>
          </>
      </aside>
    </>
  );
}
