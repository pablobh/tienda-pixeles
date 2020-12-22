import { useState } from 'react';

const ItemCard = (props) => {
    const [cantidad, cambiarCantidad] = useState(0);

    function quitarCantidad() {
        if (cantidad) {
            cambiarCantidad(cantidad - 1);
        }
    }
    return (
        <div className="column">
            <div className="card has-background-white has-shadow" style={{height: '100%', radius: '3px' }}>
                <div className="card-image has-text-centered pt-4">
                    <a href="!#">
                        <img src={props.fotoProducto} alt="Imagen del producto" />
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <h5 className="is-size-5 has-text-weight-normal title-product-card">{props.nombreProducto}</h5>
                        <p className="has-text-secondary is-size-7 mb-0">{props.categoriaProducto}</p>
                        <p className="has-text-weight-bold is-size-4 is-justify-content-end">
                            <span className="is-size-6 regular-price-product">
                                {props.precioProducto}
                            </span>
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
                            <a className="button is-info mr-2" href="!#">Ver detalles</a>
                            <a className="button is-primary" href="!#">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;