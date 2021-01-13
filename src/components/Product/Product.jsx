import { FiAlertOctagon } from 'react-icons/fi';
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getFirestore } from "./../../firebase";
import { Store } from './../../contexts/Store'

const Product = (props) => {
    const {id} = useParams();
    const [data, setData] = useContext(Store);

    /* Agregar al carrito */
    let historialRutas = useHistory();
    const handleClickAgregar = (e) => {
        setData({
            ...data, 
            cantidad: data.cantidad + cantidad,
            items: [...data.items, product],
        });
        // alert(`Agregando al carrito el producto con ID ${id}`);
        historialRutas.push("/carrito");
    }

    /* Manejar las cantidades a agregar */
    const [cantidad, cambiarCantidad] = useState(0);
    function quitarCantidad() {
        if (cantidad) {
            cambiarCantidad(cantidad - 1);
        }
    }

    /* Cargar desde Firebase los detalles del producto */
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if (doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.log(e));
    }

    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        id ?
        <section className="section">
            {
                product ?
                    <div className="container">
                        <div className="columns pt-3 pb-6 px-4 has-background-white">
                            <div className="column is-6">
                                <figure className="image is-square has-shadow">
                                    <img src={product.foto} alt="Foto gigante del producto" />
                                </figure>
                            </div>
                            <div className="column is-6">
                                <h1 className="title is-2 has-text-primary">
                                    {product.nombre}
                                </h1>
                                <p className="subtitle is-5 is-uppercase has-text-grey-light ">
                                    {product.categoriaBonita} / SKU: {product.id}
                                </p>
                                <p className="is-size-3 is-uppercase has-text-morado">
                                    {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(product.precio)}
                                </p>
                                <hr />
                                <p className="content">
                                    {product.descripcion}
                                </p>
                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field has-addons">
                                            <div className="control">
                                                <button className="button is-danger is-light" disabled={!cantidad ? 'disabled' : null } onClick={quitarCantidad}>-</button>
                                            </div>
                                            <div className="control">
                                                <input className="input is-light has-text-centered is-narrow" type="number" value={cantidad} readOnly/>
                                            </div>
                                            <div className="control">
                                                <button className="button is-success is-light" onClick={() => cambiarCantidad(cantidad + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-half has-text-right">
                                        <div className="field">
                                            <div className="control">
                                                <button onClick={handleClickAgregar} id="agregarCarrito" className="button is-primary">Agregar al carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="container">
                        <div className="columns pb-6 px-5 is-rounded is-centered">
                            <div className="column is-1 has-background-danger has-text-centered has-text-white">
                                <p className="is-size-1 pt-2"><FiAlertOctagon /></p>
                            </div>
                            <div className="column is-5 has-background-danger-light">
                                <p className="subtitle is-4 has-text-naranja">¡ERROR!</p>
                                <h1 className="title is-2 is-error">Producto no encontrado</h1>
                            </div>
                        </div>
                    </div>
            }
        </section> :
        <section className="section is-medium">
            <div className="container">
                <div className="columns pb-6 px-5 is-rounded is-centered">
                    <div className="column is-1 has-background-danger has-text-centered has-text-white">
                        <p className="is-size-1 pt-2"><FiAlertOctagon /></p>
                    </div>
                    <div className="column is-5 has-background-danger-light">
                        <p className="subtitle is-4 has-text-naranja">¡ERROR!</p>
                        <h1 className="title is-2 is-error">Falta ID de producto</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;