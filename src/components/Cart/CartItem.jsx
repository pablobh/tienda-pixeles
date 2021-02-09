const CartItem = (props) => {
    return (
        <tr>
            <td>{props.categoriaBonitaProducto}</td>
            <td>{props.nombreProducto}</td>
            <td>{props.cantidadProducto}</td>
            <td>{props.precioProducto}</td>
            <td>{props.precioProductoTotal}</td>
            <td>
                <button
                    className="delete is-danger"
                    onClick={props.eventRemove}
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
