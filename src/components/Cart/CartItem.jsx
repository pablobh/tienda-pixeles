const CartItem = (props) => {
    return (
        <tr>
            <td>{props.categoriaBonitaProducto}</td>
            <td>{props.nombreProducto}</td>
            <td>{props.cantidadProducto}</td>
            <td>{props.precioProducto}</td>
            <td>{props.precioProductoTotal}</td>
            <td><span className="delete is-danger">X</span></td>
        </tr>
    )
}

export default CartItem;