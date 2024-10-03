import { useContexts } from "../../../../Hooks/useContexts";

export function ProductsCars() {
  const { product, productQuantity, totalPrice, deteleCart } = useContexts();

  return (
    <div className="cart__container">
      {product.map((product) => (
        <div className="display" key={product.id}>
          <figure className="cart__container--img">
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="cart__container--text">
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            {productQuantity && (
              <p>Quantity: {productQuantity[product.id]}</p>
            )}
          </div>
          <button onClick={() => deteleCart(product.id)}>Remove</button>
        </div>
      ))}
      <div className="cart__subtotal">
        <span className="subtotal__container">
          <p>Subtotal:</p>
          <p>${totalPrice}</p>
        </span>
        <span className="subtotal__container--2">
          <p>* Impuestos, envío y descuentos calculados en el checkout.</p>
        </span>
      </div>
    </div>
  );
}
