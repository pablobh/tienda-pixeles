import { useState, useEffect } from 'react';
import Spinner from '../global/Spinner';
import { getFirestore } from "./../../firebase";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos').where("destacado", "==", true).get()
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

    return (
        <div className="columns is-multiline pb-6 px-5">
            {
                items.length ?
                    <>
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
                    </> :
                <Spinner />
            }
        </div>
    )
}

export default FeaturedProducts;