import { useParams } from "react-router-dom";
import { FiAlertOctagon } from 'react-icons/fi';
import ProductCard from "../Product/ProductCard";

const Category = () => {
    const {nombre_categoria} = useParams();
    const categoria = nombre_categoria;
    const productosDisponibles = JSON.parse(localStorage.getItem('productosDisponiblesLocal'));
    const productosCategoria = productosDisponibles.filter(producto => producto.categoria === categoria)
    const nombre_categoria_espacios = nombre_categoria.replace("-", " ");
    console.log(productosCategoria);
    return (
        nombre_categoria ?
        <>
            {
                productosCategoria.length ?
                    <section className="section">
                        <div className="container">
                            <h3 className="subtitle is-6 is-uppercase has-text-morado">
                                Categoría
                            </h3>
                            <h2 className="title is-2 has-text-naranja is-capitalized">
                                {nombre_categoria_espacios}
                            </h2>
                            <div className="columns is-multiline pb-6 px-5">
                                {
                                    productosCategoria.map((item, index) => (
                                        <ProductCard
                                            key = {index}
                                            idProducto = {item.id}
                                            fotoProducto = {item.foto}
                                            thumbProducto = {item.thumb}
                                            nombreProducto = {item.nombre}
                                            categoriaProducto = {item.categoria}
                                            categoriaBonitaProducto = {item.categoriaBonita}
                                            precioProducto = {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(item.precio)}
                                            cantidadColumnas = {3}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section> :
                    <section className="section is-medium">
                        <div className="container">
                            <div className="columns pb-6 px-5 is-rounded is-centered">
                                <div className="column is-1 has-background-danger has-text-centered has-text-white">
                                    <p className="is-size-1 pt-2"><FiAlertOctagon /></p>
                                </div>
                                <div className="column is-5 has-background-danger-light">
                                    <p className="subtitle is-4 has-text-naranja">¡ERROR!</p>
                                    <h1 className="title is-2 is-error">Categoría no válida</h1>
                                </div>
                            </div>
                        </div>
                    </section>
            }
            </> :
            <section className="section is-medium">
                <div className="container">
                    <div className="columns pb-6 px-5 is-rounded is-centered">
                        <div className="column is-1 has-background-danger has-text-centered has-text-white">
                            <p className="is-size-1 pt-2"><FiAlertOctagon /></p>
                        </div>
                        <div className="column is-6 has-background-danger-light">
                            <p className="subtitle is-4 has-text-naranja">¡ERROR!</p>
                            <h1 className="title is-2 is-error">Es necesario tener una categoría</h1>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Category;