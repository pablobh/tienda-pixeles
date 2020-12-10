import './styles/App.scss'
import Navbar from './components/global/Navbar'
import Hero from './components/Home/Hero'
import ItemCard from './components/global/ItemCard';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="pb-5">
            <div className="container">
                <div className="columns pb-6 px-5">
                  <ItemCard
                    fotoProducto="https://picsum.photos/300/350"
                    nombreProducto="Nombre Producto 01"
                    categoriaProducto="Branding"
                    precioProducto="6500"
                    />
                  <ItemCard
                    fotoProducto="https://picsum.photos/300/350"
                    nombreProducto="Nombre Producto 02"
                    categoriaProducto="Diseño Web"
                    precioProducto="4800"
                    />
                  <ItemCard
                    fotoProducto="https://picsum.photos/300/350"
                    nombreProducto="Nombre Producto"
                    categoriaProducto="Fotografía y video"
                    precioProducto="3680"
                    />
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
}

export default App;
