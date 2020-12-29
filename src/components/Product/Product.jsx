import { FiAlertOctagon } from 'react-icons/fi';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {id} = useParams();
    const [cantidad, cambiarCantidad] = useState(0);
    function quitarCantidad() {
        if (cantidad) {
            cambiarCantidad(cantidad - 1);
        }
    }

    const idProducto = parseInt(id);
    const productosDisponibles = JSON.parse(localStorage.getItem('productosDisponiblesLocal'));
    const productoSingle = productosDisponibles.filter(producto => producto.id === idProducto)

    return (
        id ?
        <section className="section">
            {
                productoSingle.length ?
                    <div className="container">
                        {
                            productoSingle.map((producto, index) => (
                                <div className="columns pt-3 pb-6 px-4 has-background-white" key={index}>
                                    <div className="column is-6">
                                        <figure className="image is-square has-shadow">
                                            <img src={producto.foto} alt="Foto gigante del producto" />
                                        </figure>
                                    </div>
                                    <div className="column is-6">
                                        <h1 className="title is-2 has-text-primary">
                                            {producto.nombre}
                                        </h1>
                                        <p className="subtitle is-5 is-uppercase has-text-grey-light ">
                                            {producto.categoriaBonita} / SKU: {producto.id}
                                        </p>
                                        <p className="is-size-3 is-uppercase has-text-morado">
                                            {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(producto.precio)}
                                        </p>
                                        <hr />
                                        <p className="content">
                                            {producto.descripcion}
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
                                                        <Link to="/carrito" className="button is-primary">Agregar al carrito</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
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