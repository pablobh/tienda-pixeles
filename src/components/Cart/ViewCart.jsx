import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useContext } from 'react';
import { Store } from './../../contexts/Store'


const ViewCart = () => {
    const [data, setData] = useContext(Store);

    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                <div className="cart">
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
                                        <th className="has-text-cremita">Precio</th>
                                        <th className="has-text-cremita">Quitar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.items.map(item =>
                                            <CartItem
                                                categoriaBonitaProducto = {item.categoriaBonita}
                                                nombreProducto = {item.nombre}
                                                precioProducto = {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(item.precio)}>
                                            </CartItem>
                                            
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="columns has-background-space-black is-pulled-right">
                        <div className="column is-full">
                            <h3 className="title is-4 has-text-cremita">Total: $6'500.000</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ViewCart;