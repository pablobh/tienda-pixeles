import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import OrderItem from "./OrderItem";
import { plataBonita  } from "../../models/Functions";

const MyOrder = (props) => {
    const db = getFirestore();
    const [referencia, setReferencia] = useState("");
    const [pedido, setPedidos] = useState({});
    useEffect(() => {});

    const handleChange = (event) => {
        setReferencia(event.target.value);
    };

    const handleSearchPedido = (e) => {
        e.preventDefault();
        db.collection("ventas")
            .get()
            .then((docs) => {
                let pedi2 = [];
                docs.forEach((doc) => {
                    if (doc.id === referencia) {
                        pedi2.push({ id: doc.id, data: doc.data() });
                    }
                });
                setPedidos(pedi2[0]);
            })
            .catch((e) => console.log(e));
    };

    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                <h1 className="title has-text-morado">Información pedido</h1>
                <p>Utiliza este buscador para conocer el estado de tu pedido</p>
                <div className="columns">
                    <div className="column is-full mt-6">
                        <form onSubmit={handleSearchPedido}>
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input
                                        className="input is-fullwidth"
                                        type="text"
                                        value={referencia}
                                        onChange={handleChange}
                                        placeholder="Referencia del pedido"
                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-primary">Buscar pedido</button>
                                </div>
                            </div>
                        </form>
                        {
                            Object.keys(pedido).length > 0 ? (
                                <div className="columns mt-5">
                                    <div className="column is-half">
                                        <h4 className="title is-size-5 has-text-naranja">Datos personales</h4>
                                        <div className="list">
                                            <ul>
                                                <div className="list-item">
                                                    <li><strong>Nombre Completo:</strong> {pedido.data.user.nombre} {pedido.data.user.apellido}</li>
                                                </div>
                                                <div className="list-item">
                                                    <li><strong>Email:</strong> {pedido.data.user.correo}</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <h4 className="title is-size-5 has-text-naranja">Información orden</h4>
                                        <div className="list">
                                            <ul>
                                                <div className="list-item">
                                                    <li><strong>Estado orden:</strong> {pedido.data.estado}</li>
                                                </div>
                                                <div className="list-item">
                                                    <li><strong>Fecha pedido:</strong> {new Date(pedido.data.date.seconds * 1000).toLocaleDateString("es-CO")}</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                "Aquí aparecerá la información de tu pedido"
                            )
                        }
                        {
                            Object.keys(pedido).length > 0 ? (
                                <div className="columns mt-3">
                                    <div className="column is-full">
                                        <h4 className="title is-size-5 has-text-naranja">Productos</h4>
                                        <table className="table is-striped is-hoverable is-fullwidth">
                                            <thead>
                                                <tr className="has-background-space-black">
                                                    <th className="has-text-cremita">Categoría</th>
                                                    <th className="has-text-cremita">Producto</th>
                                                    <th className="has-text-cremita">Cantidad</th>
                                                    <th className="has-text-cremita">Unidad</th>
                                                    <th className="has-text-cremita">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    pedido.data.items.map((item, index) => {
                                                        return (
                                                            <OrderItem
                                                                categoriaBonitaProducto={item?.categoriaBonita}
                                                                nombreProducto={item?.nombre}
                                                                cantidadProducto={item?.cantidad}
                                                                precioProducto={plataBonita(item?.precio)}
                                                                precioProductoTotal={plataBonita(item?.precio * item?.cantidad)}>
                                                            </OrderItem>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )
                        }
                        {
                            Object.keys(pedido).length > 0 ? (
                                <div className="columns has-background-space-black mx-1">
                                    <div className="column is-full has-text-right">
                                        <h3 className="title is-4 has-text-cremita">
                                            Total:{" "}
                                            {
                                                plataBonita(pedido.data.precioTotal)
                                            }
                                        </h3>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrder;
