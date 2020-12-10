import './App.css';
import './styles/App.scss'
import Hero from './components/Home/Hero'
import Navbar from './components/global/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/global/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
