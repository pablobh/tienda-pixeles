import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    return (
        <div className={`column is-${props.cantidadColumnas}`}>
            <div className="card has-background-white has-shadow" style={{height: '100%', radius: '6px' }}>
                <div className="card-image has-text-centered">
                    <Link to={`/producto/${props.idProducto}`}>
                        <figure className="image is-square">
                            <img src={props.thumbProducto} alt="Imagen del producto" />
                        </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="has-text-grey is-uppercase is-size-6 mb-0">{props.categoriaBonitaProducto}</p>
                        <h5 className="has-text-primary is-size-4">{props.nombreProducto}</h5>
                        <p className="has-text-weight-normal is-size-3 has-text-grey-dark has-text-centered my-2">
                            {props.precioProducto}
                        </p>
                        <div className="field is-grouped is-grouped-centered">
                            <Link to={`/producto/${props.idProducto}`} className="button is-info mr-2">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;