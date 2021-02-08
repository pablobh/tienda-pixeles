import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useContext } from 'react';
import { Store } from './../../contexts/Store'
import { plataBonita  } from "../../models/Functions";


const ViewCart = () => {
    const [data, setData] = useContext(Store);
    const remove = (id) => {
        console.log(id);
        data.items.splice(data.items.findIndex(item => item.id === id), 1)
        setData({...data}) 
        console.log(data);  
    };
    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                <div className="cart">
                    {
                        data.items.length !== 0 ?
                            <>
                                <div className="columns is-pulled-right">
                                    <div className="column is-2">
                                        <Link to="/" className="button is-outlined is-primary">Regresar</Link>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-4">
                                        <h1 className="title is-2 has-text-morado">Tu carrito</h1>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="column">
                                        <table className="table is-striped is-hoverable is-fullwidth">
                                            <thead>
                                                <tr className="has-background-space-black">
                                                    <th className="has-text-cremita">Categoría</th>
                                                    <th className="has-text-cremita">Producto</th>
                                                    <th className="has-text-cremita">Cantidad</th>
                                                    <th className="has-text-cremita">Unidad</th>
                                                    <th className="has-text-cremita">Total</th>
                                                    <th className="has-text-cremita is-narrow">Quitar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {
                                                        data.items.map((item, index) => {
                                                            return (
                                                            <CartItem
                                                                categoriaBonitaProducto = {item?.categoriaBonita}
                                                                nombreProducto = {item?.nombre}
                                                                cantidadProducto = {item?.cantidad}
                                                                precioProducto = {plataBonita(item?.precio)}
                                                                precioProductoTotal = {plataBonita(item?.precio * item?.cantidad)}
                                                                eventRemove = {() => remove(item?.id)}>
                                                            </CartItem>
                                                            );
                                                            })
                                                    }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="columns has-background-space-black mx-1">
                                    <div className="column is-full has-text-right">
                                        <h3 className="title is-4 has-text-cremita">
                                        Total: {plataBonita(data.precioTotal)}</h3>
                                    </div>
                                </div>

                                <div className="columns mt-6 ">
                                    <div className="column is-full has-text-centered">
                                        <Link to="/checkout" className="button is-info is-large has-text-weight-bold">Hacer pedido</Link>
                                    </div>
                                </div>

                            </> :
                            <div className="columns">
                                <div className="column is-full has-text-centered">
                                    <h1 className="title is-2 has-text-morado">Tu carrito está vacío</h1>
                                    <Link to="/" className="button is-primary has-text-weight-bold">Agregar Productos</Link>
                                </div>
                            </div>
                        }
                </div>
            </div>
        </section>
    )
}

export default ViewCart;