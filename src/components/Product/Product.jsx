import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getFirestore } from "./../../firebase";
import { Store } from "./../../contexts/Store";
import { plataBonita } from "./../../models/Functions";
import Error from "./../global/Error";
import Spinner from "./../global/Spinner";
import Button from "./../global/Button";
import Breadcrumb from "../global/Breadcrumb";
import QuantitySelector from "./../global/QuantitySelector";

const Product = (props) => {
    const historialRutas = useHistory();
    const { id } = useParams();
    const [data, setData] = useContext(Store);
    const [cantidad, cambiarCantidad] = useState(1);

    /* Cargar desde Firebase los detalles del producto */
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection("productos")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setProduct(doc.data());
                }
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickQuitar = () => {
        if (cantidad > 1) {
            cambiarCantidad(cantidad - 1);
        }
    };

    const alAgregar = (id) => {
        if (data.items[data.items.findIndex((item) => item.id === id)]) {
            data.items[
                data.items.findIndex((item) => item.id === id)
            ].cantidad += cantidad;
            data.precioTotal += product.precio * cantidad;
            localStorage.setItem("dataTienda", JSON.stringify(data));
            setData({ ...data });
            historialRutas.push("/carrito");
        } else {
            product.cantidad = cantidad;
            setData({
                ...data,
                cantidad: data.cantidad + cantidad,
                items: [...data.items, product],
                precioTotal: data.precioTotal + product.precio * cantidad,
            });
            localStorage.setItem(
                "dataTienda",
                JSON.stringify({
                    ...data,
                    cantidad: data.cantidad + cantidad,
                    items: [...data.items, product],
                    precioTotal: data.precioTotal + product.precio * cantidad,
                })
            );
            historialRutas.push("/carrito");
        }
    };

    return id ? (
        <>
            {product !== null ? (
                <Breadcrumb
                    categoria={product.categoria}
                    categoriaBonita={product.categoriaBonita}
                    producto={product.nombre}
                />
            ) : (
                ""
            )}
            <section className="section">
                {product ? (
                    <div className="container">
                        <div className="columns pt-3 pb-6 px-4 has-background-white">
                            <div className="column is-6">
                                <figure className="image is-square has-shadow">
                                    <img
                                        src={`/img/${product.foto}`}
                                        alt={`${product.nombre}`}
                                    />
                                </figure>
                            </div>
                            <div className="column is-6">
                                <h1 className="title is-2 has-text-primary">
                                    {product.nombre}
                                </h1>
                                <p className="subtitle is-5 is-uppercase has-text-grey-light ">
                                    {product.categoriaBonita} / SKU:{" "}
                                    {product.id}
                                </p>
                                <p className="is-size-3 is-uppercase has-text-morado">
                                    {plataBonita(product.precio)}
                                </p>
                                <hr />
                                <p className="content">{product.descripcion}</p>
                                <div className="columns">
                                    <div className="column is-half">
                                        <QuantitySelector
                                            restar={handleClickQuitar}
                                            sumar={() =>
                                                cambiarCantidad(cantidad + 1)
                                            }
                                            cantidad={cantidad}
                                        />
                                    </div>
                                    <div className="column is-half has-text-right">
                                        <div className="field">
                                            <div className="control">
                                                <Button
                                                    event={() =>
                                                        alAgregar(product.id)
                                                    }
                                                    id="agregarCarrito"
                                                    className="button is-primary"
                                                    title="Agregar al carrito"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Spinner />
                )}
            </section>{" "}
        </>
    ) : (
        <Error titulo="¡Error!" mensaje="Falta ID de producto" />
    );
};

export default Product;
