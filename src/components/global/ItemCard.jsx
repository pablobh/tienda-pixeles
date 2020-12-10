function ItemCard(props) {
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
                                ${props.precioProducto}
                            </span>
                        </p>                
                        <a className="button has-background-naranja has-text-white" href="!#">Agregar al carrito</a>
                        <a className="button has-background-white has-text-secondary ml-4" href="!#">Ver detalles</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;