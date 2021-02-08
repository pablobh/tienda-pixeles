import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    return (
        <div className={`column is-${props.cantidadColumnas}`}>
            <div className="card has-background-white has-shadow" style={{height: '100%', radius: '6px' }}>
                <div className="card-image has-text-centered">
                    <Link to={`/producto/${props.idProducto}`}>
                        <figure className="image is-square">
                            <img src={`/img/${props.thumbProducto}`} alt={`${props.nombreProducto}`} />
                        </figure>
                    </Link>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="has-text-grey is-uppercase is-size-7 mb-0">{props.categoriaBonitaProducto}</p>
                        <h5 className="has-text-morado has-text-weight-normal is-size-5">{props.nombreProducto}</h5>
                        <p className="has-text-weight-bold is-size-5 has-text-grey-dark mt-4">
                            {props.precioProducto}
                        </p>
                        <div className="field is-grouped is-grouped-centered">
                            <Link to={`/producto/${props.idProducto}`} className="button is-primary mr-2 is-fullwidth is-radiusless is-outlined">Ver detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;