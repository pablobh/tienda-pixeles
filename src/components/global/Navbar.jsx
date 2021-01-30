import Login from "./Login";
import CartWidget from "../Cart/CartWidget";
import ItemListContainer from "./ItemListContainer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "./../../contexts/Store";

function Navbar() {
  const [data, setData] = useContext(Store);

  let todosProductos = 0;
  data.items.forEach((element) => {
    todosProductos = todosProductos + element.cantidad;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  return (
    <header className="section is-paddingless is-marginless">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src="https://cdn-5d61ec94f911c80950251c4d.closte.com/wp-content/themes/contratopedia/dist/images/4topixel-horizontal-negro_c9db5e35.svg"
                width="112"
                height="28"
                alt="4to Pixel"
              />
            </Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarPrincipal"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarPrincipal" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/categoria/branding" className="navbar-item">
                  Branding
                </Link>
                <Link to="/categoria/web" className="navbar-item">
                  Web
                </Link>
                <Link to="/categoria/fotografia" className="navbar-item">
                  Fotografía
                </Link>
                <Link to="/categoria/social-media" className="navbar-item">
                  Social Media
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <Login />
              <div className="navbar-item has-dropdown is-hoverable">
                <CartWidget cantidad={todosProductos} />
                <div className="navbar-dropdown">
                  {data.items.map((item, index) => {
                    return (
                      <ItemListContainer
                        key={`item_products_${index}`}
                        nombreProducto={item.nombre}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
