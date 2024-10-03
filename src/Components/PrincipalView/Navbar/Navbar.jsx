import { useContexts } from "../../../Hooks/useContexts";
import { Input } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import account from "../../../assets/account_circle.svg";
import car from "../../../assets/shopping_cart.svg";
import "./main.css";
import { User } from "../User/User";
import { Cart } from "../User/Cart/Cart";

const { Meta } = Card;
const { Search } = Input;

export function Navbar() {
  const {
    searchValue,
    setSearchValue,
    searchproducts,
    handleSearch,
    handleSubmit,
    handleProductClick,
    user,
    handleShowModal,
    showModal,
    handleShowModalCart,
    showModalCart,
    length
  } = useContexts();

  return (
    <nav className="nav">
      <div className="nav__container--1">
        <img src={logo} alt="logo" />
        <p>Acme Store</p>
      </div>
      <div className="nav__container--2">
        <form onSubmit={handleSubmit}>
          <Search
            placeholder="search products..."
            value={searchValue}
            onSearch={handleSearch}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
      <div className="nav__container--3">
        {user ? (
          <>
            <div className="nav__uploads">
              <img src={account} alt="account" onClick={handleShowModal}/>
              {showModal && (
                <User/>
              )}
              <img src={car} alt="shopping car" onClick={handleShowModalCart}/>
              <p className="nav__uploads--length">{length}</p>
              {showModalCart && (
                <Cart/>
              )}
            </div>
          </>
        ) : (
          <Link to={"/account"}>
            <button>Log in</button>
          </Link>
        )}
      </div>

      {searchValue && (
        <>
          <div className="nav__overlay"></div>
          <div className="nav__seraching">
            {searchproducts.map((dta) => (
              <Card
                onClick={() => handleProductClick(dta)}
                key={dta.id}
                hoverable
                cover={
                  <img
                    alt={dta.title}
                    src={dta.image}
                    className="nav__seraching--img"
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
        </>
      )}
    </nav>
  );
}
