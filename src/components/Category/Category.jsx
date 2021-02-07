import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getFirestore } from "./../../firebase";
import ProductCard from "../Product/ProductCard";
import Spinner from "../global/Spinner";
import Error from "../global/Error";

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
    }, [nombre_categoria])
    
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
                    <Spinner />
            }
            </> :
            <Error
                titulo = "¡ERROR!"
                mensaje = "Es necesario tener una categoría"
            />
        )
}

export default Category;