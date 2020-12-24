import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const [cantidad, cambiarCantidad] = useState(0);

    function quitarCantidad() {
        if (cantidad) {
            cambiarCantidad(cantidad - 1);
        }
    }
    return (
        <div className="column">
            <div className="card has-background-white has-shadow" style={{height: '100%', radius: '6px' }}>
                <div className="card-image has-text-centered">
                    <Link to="/producto">
                    <figure class="image is-square">
                        <img src={props.fotoProducto} alt="Imagen del producto" />
                    </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="has-text-grey is-uppercase is-size-6 mb-0">{props.categoriaProducto}</p>
                        <h5 className="has-text-primary is-size-4">{props.nombreProducto}</h5>
                        <p className="has-text-weight-normal is-size-3 has-text-grey-dark has-text-centered my-2">
                            {props.precioProducto}
                        </p>
                        <div className="field has-addons has-addons-centered">
                            <div className="control">
                                <button className="button is-danger is-light" disabled={!cantidad ? 'disabled' : null } onClick={quitarCantidad}>-</button>
                            </div>
                            <div className="control">
                                <input className="input is-light has-text-centered" type="text" value={cantidad} readOnly/>
                            </div>
                            <div className="control">
                                <button className="button is-success is-light" onClick={() => cambiarCantidad(cantidad + 1)}>+</button>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered">
                            <Link to="/producto/1" className="button is-info mr-2">Ver detalles</Link>
                            <Link to="/carrito" className="button is-primary">Agregar al carrito</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;