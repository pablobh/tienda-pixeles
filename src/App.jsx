import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Store } from "./contexts/Store";
import Navbar from "./components/global/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProducts from "./components/Product/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import RegularProducts from "./components/Product/RegularProducts";
import ViewCart from "./components/Cart/ViewCart";
import MyOrder from "./components/Order/MyOrder";
import Checkout from "./components/Checkout/Checkout";
import Breadcrumb from "./components/global/Breadcrumb";
import Error from "./components/global/Error";
import Newsletter from "./components/global/Newsletter";

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  });

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero
              titulo="Tienda Pixeles"
              mensaje="Aquí van a estar cosas muy interesantes y divertidas de mi tienda online"
            />
            <section className="pb-5">
              <div className="container">
                <h2 className="title is-3 has-text-naranja">
                  Productos recomendados
                </h2>
                <FeaturedProducts />
              </div>
              <div className="container">
                <h2 className="title is-3 has-text-morado">
                  Todos los productos
                </h2>
                <RegularProducts />
              </div>
            </section>
            <Newsletter />
          </Route>

          <Route path="/producto/:id?">
            <Breadcrumb />
            <Product />
          </Route>

          <Route path="/carrito">
            <Breadcrumb />
            <ViewCart />
          </Route>

          <Route path="/mi-pedido">
            <MyOrder />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/categoria/:nombre_categoria?">
            <Category />
            <Newsletter />
          </Route>

          <Route path="*">
            <Error
              titulo = "¡Error 404!"
              mensaje = "Contenido no existe"
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
