import { FiAlertOctagon } from 'react-icons/fi';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    const [cantidad, cambiarCantidad] = useState(0);
    function quitarCantidad() {
        if (cantidad) {
            cambiarCantidad(cantidad - 1);
        }
    }

    return (
        id ?
        <section className="section">
            <div className="container">
                <div className="columns pt-3 pb-6 px-4 has-background-white">
                    <div className="column is-6">
                        <figure class="image is-square has-shadow">
                            <img src="https://picsum.photos/512/512" alt="Foto gigante del producto" />
                        </figure>
                    </div>
                    <div className="column is-6">
                        <h1 className="title is-2 has-text-primary">
                            Nombre del producto
                        </h1>
                        <p className="subtitle is-5 is-uppercase has-text-grey-light ">
                            Categoría
                        </p>
                        <p className="is-size-3 is-uppercase has-text-morado">
                            $45.000
                        </p>
                        <hr />
                        <p className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet aliquam dolor, luctus hendrerit libero. Proin fringilla condimentum sem at facilisis. Nunc blandit felis at arcu aliquam aliquam. Aliquam accumsan volutpat venenatis. Sed malesuada ac enim eget varius. Cras at nibh eu nulla sagittis pulvinar. Quisque nisl felis, pulvinar in tincidunt eu, consequat sed purus.
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
                        <h1 className="title is-2 is-error">Producto no encontrado</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;