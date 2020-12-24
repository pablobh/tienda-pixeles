import "./styles/App.scss";
import Navbar from "./components/global/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProducts from "./components/Product/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Hero 
						titulo = "Tienda Pixeles"
						mensaje = "Aquí van a estar cosas muy interesantes y divertidas de mi tienda online"
					/>
					<section className="pb-5">
						<div className="container">
							<h3 className="title is-4 has-text-naranja">
								Productos recomendados
							</h3>
							<FeaturedProducts />
						</div>
					</section>
				</Route>

				<Route path="/producto/:id?">
					<Product />
				</Route>

				<Route path="/carrito">
					<p>Carrito</p>
				</Route>

				<Route path="/categoria/:nombre_categoria?">
					<Category />
				</Route>

				<Route path="*">
					<p>Error 404</p>
				</Route>

			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
