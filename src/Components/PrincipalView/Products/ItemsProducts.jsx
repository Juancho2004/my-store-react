import { Card } from "antd";
import { ProductId } from "./ProductId";
import { useContexts } from "../../../Hooks/useContexts";

const { Meta } = Card;

export function ItemsProducts() {

  const {filterCategories, dataFilter, activeTab, products, handleAll, setActiveTab, handleProductClick} = useContexts();

  const handleClick = () =>{
    handleAll()
    setActiveTab("")
  }

  return (
    <div className="products__contents">
      <ul className="products__tabs">
        <li
          onClick={handleClick}
          className={`products__tab ${
            activeTab === "" ? "selected" : ""
          }`}
        >
          All
        </li>
        <li
          onClick={() => filterCategories("men's clothing")}
          className={`products__tab ${
            activeTab === "men's clothing" ? "selected" : ""
          }`}
        >
          Men
        </li>
        <li
          onClick={() => filterCategories("women's clothing")}
          className={`products__tab ${
            activeTab === "women's clothing" ? "selected" : ""
          }`}
        >
          Women
        </li>
        <li
          onClick={() => filterCategories("jewelery")}
          className={`products__tab ${
            activeTab === "jewelery" ? "selected" : ""
          }`}
        >
          Jewelery
        </li>
        <li
          onClick={() => filterCategories("electronics")}
          className={`products__tab ${
            activeTab === "electronics" ? "selected" : ""
          }`}
        >
          Electronics
        </li>
      </ul>

      <div className="products__content">
        {activeTab === "" ? (
          <div className="products__list">
            {products.map((dta) => (
              <Card
                onClick={() => handleProductClick(dta)}
                key={dta.id}
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt={dta.title}
                    src={dta.image}
                    className="products__list--img"
                  />
                }
              >
                <Meta
                  title={dta.title}
                  description={
                    <>
                      <p>{dta.category}</p>
                      <p>${dta.price}</p>
                    </>
                  }
                />
              </Card>
            ))}
          </div>
        ) : (
          <div className="products__list">
            {Array.isArray(dataFilter) &&
              dataFilter.map((dta) => (
                <Card
                  onClick={() => handleProductClick(dta)}
                  key={dta.id}
                  hoverable
                  cover={
                    <img
                      alt={dta.title}
                      src={dta.image}
                      className="products__list--img"
                    />
                  }
                >
                  <Meta
                    title={dta.title}
                    description={
                      <>
                        <p>{dta.category}</p>
                        <p>${dta.price}</p>
                      </>
                    }
                  />
                </Card>
              ))}
          </div>
        )}
      </div>
        <ProductId/>
    </div>
  );
}
