import { useParams } from "react-router-dom";
import FeaturedProducts from "../Product/FeaturedProducts";
import Hero from '../Home/Hero';
const Category = () => {
    const {nombre_categoria} = useParams();
    return (
        nombre_categoria ?
        <>
            <Hero 
                titulo = "Tienda Pixeles"
                mensaje = "Aquí irá un texto súper vendedor que hablará de las maravillas de los productos que se venden en esta tienda"
            />
            <section className="pb-5">
                <div className="container">
                    <h3 className="subtitle is-6 is-uppercase has-text-morado">
                        Categoría
                    </h3>
                    <h2 className="title is-2 has-text-naranja is-capitalized">
                        {nombre_categoria}
                    </h2>
                    <FeaturedProducts />
                </div>
            </section>
        </>
            :
            <p>Lista de categorías</p>
    )
}

export default Category;