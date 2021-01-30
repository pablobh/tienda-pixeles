const PedidoItem = (props) => {
    return (
        <tr>
            <td>{props.categoriaBonitaProducto}</td>
            <td>{props.nombreProducto}</td>
            <td>{props.cantidadProducto}</td>
            <td>{props.precioProducto}</td>
            <td>{props.precioProductoTotal}</td>
        </tr>
    )
}

export default PedidoItem;