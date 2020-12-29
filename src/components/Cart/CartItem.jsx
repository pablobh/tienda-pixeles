const CartItem = (props) => {
    return (
        <tr>
            <td>{props.categoriaBonitaProducto}</td>
            <td>{props.nombreProducto}</td>
            <td>
                <div className="select">
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </td>
            <td>{props.precioProducto}</td>
            <td>
            <span className="delete is-large">
                X
            </span>
            </td>
        </tr>
    )
}

export default CartItem;