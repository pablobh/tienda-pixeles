function ItemListContainer(props) {
    return (
        <a className="navbar-item" href="index.html">
            {props.nombreProducto}
        </a>
    );
}

export default ItemListContainer;