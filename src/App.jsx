import './styles/App.scss'
import Navbar from './components/global/Navbar'
import Hero from './components/Home/Hero'
import FeaturedProducts from './components/global/FeaturedProducts'
// import ItemCard from './components/global/ItemCard';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="pb-5">
        <div className="container">
          <h3 className="title is-4 has-text-naranja">Productos recomendados</h3>
          <FeaturedProducts />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
