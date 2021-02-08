const ItemListContainer = (props) => {
    return (
        <div className="navbar-item p-3">
            {props.nombreProducto}
                <span className="tag is-grey ml-3">
                    {props.cantidad}
                </span>
        </div>
    );
}

export default ItemListContainer;