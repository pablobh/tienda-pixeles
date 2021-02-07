import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import PedidoItem from "./OrderItem";

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
    console.log(referencia);
    db.collection("ventas")
      .get()
      .then((docs) => {
        let pedi2 = [];
        docs.forEach((doc) => {
          if (doc.id === referencia) {
            pedi2.push({ id: doc.id, data: doc.data() });
          }
        });
        console.log(pedi2[0]);
        setPedidos(pedi2[0]);
      })
      .catch((e) => console.log(e));
  };
  return (
    <section className="section is-medium" id="cart">
      <div className="container">
        <form onSubmit={handleSearchPedido} style={{ display: "flex" }}>
          <div class="field" style={{ width: "100%" }}>
            <div class="control ">
              <input
                class="input"
                type="text"
                value={referencia}
                onChange={handleChange}
                placeholder="Referencia del pedido"
              />
            </div>
          </div>
          <button className="button is-primary">Buscar pedido</button>
        </form>
        {
          Object.keys(pedido).length > 0 ? (
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div class="list">
                  <ul>
                    <div class="list-item">
                      <li><span>Nombre Completo:</span> {pedido.data.user.nombre} {pedido.data.user.apellido}</li>
                    </div>
                    <div class="list-item">
                      <li><span>Email:</span> {pedido.data.user.correo}</li>
                    </div>
                    <div class="list-item">
                      <li><span>Telefono:</span> {pedido.data.user.telefono}</li>
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
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pedido.data.items.map((item, index) => {
                        return (
                          <PedidoItem
                            categoriaBonitaProducto={item?.categoriaBonita}
                            nombreProducto={item?.nombre}
                            cantidadProducto={item?.cantidad}
                            precioProducto={Intl.NumberFormat("es-CO", {
                              style: "currency",
                              currency: "COP",
                              minimumFractionDigits: 0,
                            }).format(item?.precio)}
                            precioProductoTotal={Intl.NumberFormat("es-CO", {
                              style: "currency",
                              currency: "COP",
                              minimumFractionDigits: 0,
                            }).format(item?.precio * item?.cantidad)}>
                          </PedidoItem>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
          ""
        )
      }

        {Object.keys(pedido).length > 0 ? (
          <div className="columns has-background-space-black mx-1">
            <div className="column is-full has-text-right">
              <h3 className="title is-4 has-text-cremita">
                Total:{" "}
                {Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                }).format(pedido.data.precioTotal)}
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default MyOrder;
