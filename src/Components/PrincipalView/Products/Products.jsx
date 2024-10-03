import { ItemsProducts } from "./ItemsProducts";
import { Limits } from "./Limits";
import "./main.css";

export function Products() {
  return (
    <section className="products">
      <ItemsProducts/>
      <Limits/>
    </section>
  );
}
