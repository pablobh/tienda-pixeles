import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getFirestore } from "./../../firebase";
import { FiAlertOctagon } from 'react-icons/fi';
import ProductCard from "../Product/ProductCard";

const Category = () => {
    const {nombre_categoria} = useParams();
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos').where("categoria", "==", nombre_categoria).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data:doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e));
    }

    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // const categoria = nombre_categoria;
    const nombre_categoria_espacios = nombre_categoria.replace("-", " ");
    return (
        items ?
        <>
            {
                items.length ?
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
                                    items.map((item, index) => (
                                        <ProductCard
                                            key = {index}
                                            idProducto = {item.id}
                                            fotoProducto = {item.data.foto}
                                            thumbProducto = {item.data.thumb}
                                            nombreProducto = {item.data.nombre}
                                            categoriaProducto = {item.data.categoria}
                                            categoriaBonitaProducto = {item.data.categoriaBonita}
                                            precioProducto = {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(item.data.precio)}
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