import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react';
import Navbar from "./components/global/Navbar";
import Hero from "./components/Home/Hero";
import FeaturedProducts from "./components/Product/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import RegularProducts from "./components/Product/RegularProducts";
import ViewCart from "./components/Cart/ViewCart";

function App() {
    const [items, setItems] = useState([]);
    const products = [
        {
			id: 1,
			categoria: 'branding',
			categoriaBonita: 'Branding',
			nombre: 'Paquete Básico',
            descripcion: 'Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.',
            precio: 550000,
            foto: 'https://picsum.photos/seed/b01/800',
            thumb: 'https://picsum.photos/seed/b01/300',
			destacado: false,
		},
        {
			id: 2,
			categoria: 'branding',
			categoriaBonita: 'Branding',
			nombre: 'Paquete Mediano',
            descripcion: 'Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.',
            precio: 850000,
            foto: 'https://picsum.photos/seed/b02/800',
            thumb: 'https://picsum.photos/seed/b02/300',
			destacado: false,
		},
        {
			id: 3,
			categoria: 'branding',
			categoriaBonita: 'Branding',
			nombre: 'Paquete Completo',
            descripcion: 'Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.',
            precio: 1350000,
            foto: 'https://picsum.photos/seed/b03/800',
            thumb: 'https://picsum.photos/seed/b03/300',
			destacado: true,
		},
        {
			id: 4,
			categoria: 'branding',
			categoriaBonita: 'Branding',
            nombre: 'Paquete Custom',
            descripcion: 'Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.',
            precio: 2500000,
            foto: 'https://picsum.photos/seed/b04/800',
            thumb: 'https://picsum.photos/seed/b04/300',
			destacado: false,
		},
        {
			id: 5,
			categoria: 'social-media',
			categoriaBonita: 'Social Media',
            nombre: 'Paquete Básico',
            descripcion: 'Contar con presencia y posicionamiento en redes sociales es vital para una marca. Crear conversación le permite a las empresas ganar exposición de marca y relacionarse con el target adecuado para generar ganancias. Incluye: 10 publicaciones al mes',
            precio: 700000,
            foto: 'https://picsum.photos/seed/sm01/800',
            thumb: 'https://picsum.photos/seed/sm01/300',
			destacado: false,
		},
        {
			id: 6,
			categoria: 'social-media',
			categoriaBonita: 'Social Media',
            nombre: 'Paquete Mediano',
            descripcion: 'Contar con presencia y posicionamiento en redes sociales es vital para una marca. Crear conversación le permite a las empresas ganar exposición de marca y relacionarse con el target adecuado para generar ganancias. Incluye: 20 publicaciones al mes',
            precio: 1000000,
            foto: 'https://picsum.photos/seed/sm02/800',
            thumb: 'https://picsum.photos/seed/sm02/300',
			destacado: false,
		},
		{
			id: 7,
			categoria: 'social-media',
			categoriaBonita: 'Social Media',
            nombre: 'Paquete Completo',
            descripcion: 'Contar con presencia y posicionamiento en redes sociales es vital para una marca. Crear conversación le permite a las empresas ganar exposición de marca y relacionarse con el target adecuado para generar ganancias. Incluye: 30 publicaciones al mes.',
            precio: 1300000,
            foto: 'https://picsum.photos/seed/sm03/800',
            thumb: 'https://picsum.photos/seed/sm03/300',
			destacado: true,
		},
		{
			id: 8,
			categoria: 'fotografia',
			categoriaBonita: 'Fotografía',
            nombre: 'Fotografía por hora',
            descripcion: 'Trabajo fotográfico completamente profesional, que promociona con una perspectiva impactante y apta para publicaciones, catálogos, página de Internet, redes sociales incluso hasta la decoración de sus oficinas. Incluye: 1 hora de fotografías.',
            precio: 450000,
            foto: 'https://picsum.photos/seed/f01/800',
            thumb: 'https://picsum.photos/seed/f01/300',
			destacado: false,
		},
		{
			id: 9,
			categoria: 'fotografia',
			categoriaBonita: 'Fotografía',
			nombre: 'Fotografía por día',
            descripcion: 'Trabajo fotográfico completamente profesional, que promociona con una perspectiva impactante y apta para publicaciones, catálogos, página de Internet, redes sociales incluso hasta la decoración de sus oficinas. Incluye: 8 horas de fotografías.',
            precio: 1500000,
            foto: 'https://picsum.photos/seed/f02/800',
            thumb: 'https://picsum.photos/seed/f02/300',
			destacado: true,
		},
		{
			id: 10,
			categoria: 'video',
			categoriaBonita: 'Video',
            nombre: 'Video por hora',
            descripcion: 'Trabajo videográfico completamente profesional, que promociona con una perspectiva impactante y apta para publicaciones, catálogos, página de Internet, redes sociales incluso hasta la decoración de sus oficinas. Incluye: 1 hora de video.',
            precio: 450000,
            foto: 'https://picsum.photos/seed/v01/800',
            thumb: 'https://picsum.photos/seed/v01/300',
			destacado: false,
		},
		{
			id: 11,
			categoria: 'video',
			categoriaBonita: 'Video',
            nombre: 'Video por días',
            descripcion: 'Trabajo videográfico completamente profesional, que promociona con una perspectiva impactante y apta para publicaciones, catálogos, página de Internet, redes sociales incluso hasta la decoración de sus oficinas. Incluye: 8 horas de video.',
            precio: 1500000,
            foto: 'https://picsum.photos/seed/v02/800',
            thumb: 'https://picsum.photos/seed/v02/300',
			destacado: false,
		},
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            // Guardo en localStorage para poder hacer las operaciones que necesite más adelante y no tener que volver a cargar todo de nuevo
            localStorage.setItem('productosDisponiblesLocal', JSON.stringify(products));
        }, 500)
    });

    useEffect(() => {
        getProducts
        .then(response => setItems(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line
	}, [])

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
							<h2 className="title is-3 has-text-naranja">
								Productos recomendados
							</h2>
							<FeaturedProducts
								items = {items}
							/>
						</div>
						<div className="container">
							<h2 className="title is-3 has-text-morado">
								Todos los productos
							</h2>
							<RegularProducts
								items = {items}
							/>
						</div>
					</section>
				</Route>

				<Route path="/producto/:id?">
					<Product items={items} />
				</Route>

				<Route path="/carrito">
					<ViewCart />
				</Route>

				<Route path="/categoria/:nombre_categoria?">
					<Category items={items} />
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
