import { useState, useContext } from "react";
import { Store } from "./../../contexts/Store";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, ventaCerrada] = useState(false);
    const [valNombre, setValNombre] = useState(false);
    const [valApellido, setValApellido] = useState(false);
    const [valCorreo, setValCorreo] = useState(false);
    const [valTelefono, setValTelefono] = useState(false);
    const [valCorreoFirma, setValCorreoFirma] = useState(false);
    const [valPais, setValPais] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        confirmar_correo: "",
        telefono: "",
        pais: "",
    });
    const [idCompra, setIdCompra] = useState("");

    const handleChangeInput = (e) => {
        if (e.target.name === "nombre") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (e.target.value !== "") {
                setValNombre(true);
            } else {
                setValNombre(false);
            }
        } else if (e.target.name === "apellido") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (e.target.value !== "") {
                setValApellido(true);
            } else {
                setValApellido(false);
            }
        } else if (e.target.name === "telefono") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (
                e.target.value !== "" &&
                e.target.value.length >= 6 &&
                e.target.value.length <= 10
            ) {
                setValTelefono(true);
            } else {
                setValTelefono(false);
            }
        } else if (e.target.name === "correo") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (validateEmail(e.target.value)) {
                setValCorreo(true);
                if (datosFormulario.confirmar_correo !== "") {
                    if (e.target.value === datosFormulario.confirmar_correo) {
                        setValCorreoFirma(true);
                    } else {
                        setValCorreoFirma(false);
                    }
                }
            } else {
                setValCorreo(false);
            }
        } else if (e.target.name === "confirmar_correo") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (validateEmail(e.target.value)) {
                if (e.target.value === datosFormulario.correo) {
                    setValCorreoFirma(true);
                } else {
                    setValCorreoFirma(false);
                }
            } else {
                setValCorreoFirma(false);
            }
        } else if (e.target.name === "pais") {
            setDatosFormulario({
                ...datosFormulario,
                [e.target.name]: e.target.value,
            });
            if (e.target.value !== "") {
                setValPais(true);
            } else {
                setValPais(false);
            }
        }
    };

    const validateEmail = (value) => {
        let error = true;
        if (!value) {
            error = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = false;
        }
        return error;
    };

    const compra = {
        user: datosFormulario,
        items: data.items,
        precioTotal: data.precioTotal,
        estado: "Generada",
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection("ventas")
            .add(compra)
            .then(({ id }) => {
                ventaCerrada(true);
                setIdCompra(id);
                setData({
                    items: [],
                    cantidad: 0,
                    precioTotal: 0,
                });
                localStorage.removeItem("dataTienda");
            })
            .catch((e) => console.log(e));
    };

    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                {!venta ? (
                    <div className="columns content">
                        <div className="column is-3"></div>
                        <div className="column is-half">
                            <h1 className="title has-text-morado">
                                Finaliza tu compra
                            </h1>
                            <h3 className="has-text-naranja">
                                Datos personales
                            </h3>
                            <form onSubmit={handleSubmitForm}>
                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Nombres
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={
                                                        datosFormulario.nombre
                                                    }
                                                    onChange={handleChangeInput}
                                                    name="nombre"
                                                    placeholder="Nombres"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Apellidos
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={
                                                        datosFormulario.apellido
                                                    }
                                                    onChange={handleChangeInput}
                                                    name="apellido"
                                                    placeholder="Apellidos"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Correo electrónico
                                            </label>
                                            <div className="control has-icons-left">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={
                                                        datosFormulario.correo
                                                    }
                                                    onChange={handleChangeInput}
                                                    name="correo"
                                                    placeholder="Correo electrónico"
                                                />
                                                <span className="icon is-small is-left">
                                                    <FaRegEnvelope />
                                                </span>
                                            </div>
                                            {!valCorreo &&
                                            datosFormulario.correo !== "" ? (
                                                <p className="help is-danger">
                                                    El correo es inválido
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                            {valCorreo &&
                                            datosFormulario.correo !== "" ? (
                                                <div className="help is-success has-text-weight-bold">
                                                    🟢 Tu correo es válido
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Correo electrónico
                                                (Confirmación)
                                            </label>
                                            <div className="control has-icons-left">
                                                {!valCorreo ? (
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        value={
                                                            datosFormulario.confirmar_correo
                                                        }
                                                        onChange={
                                                            handleChangeInput
                                                        }
                                                        name="confirmar_correo"
                                                        disabled
                                                    />
                                                ) : (
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        value={
                                                            datosFormulario.confirmar_correo
                                                        }
                                                        onChange={
                                                            handleChangeInput
                                                        }
                                                        name="confirmar_correo"
                                                    />
                                                )}
                                                <span className="icon is-small is-left">
                                                    <FaRegEnvelope />
                                                </span>
                                            </div>
                                            {!valCorreoFirma &&
                                            datosFormulario.confirmar_correo !==
                                                "" ? (
                                                <div className="help is-danger has-text-weight-bold">
                                                    🔴 Los correos no son
                                                    iguales
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {valCorreoFirma &&
                                            datosFormulario.confirmar_correo !==
                                                "" ? (
                                                <div className="help is-success has-text-weight-bold">
                                                    🟢 Los correos coinciden
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Teléfono
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="number"
                                                    value={
                                                        datosFormulario.telefono
                                                    }
                                                    onChange={handleChangeInput}
                                                    name="telefono"
                                                    placeholder="Teléfono"
                                                />
                                            </div>
                                            {!valTelefono &&
                                            datosFormulario.telefono !== "" ? (
                                                <p className="help is-danger has-text-weight-bold">
                                                    🔴 El telefono debe tener
                                                    entre 6 y 10 caracteres
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                            {valTelefono &&
                                            datosFormulario.telefono !== "" ? (
                                                <p className="help is-success has-text-weight-bold">
                                                    🟢 El teléfono es correcto
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                País
                                            </label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={datosFormulario.pais}
                                                    onChange={handleChangeInput}
                                                    name="pais"
                                                    placeholder="País"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {valNombre &&
                                valApellido &&
                                valTelefono &&
                                valCorreo &&
                                valPais &&
                                valCorreoFirma ? (
                                    <button className="button is-success is-fullwidth has-text-weight-bold is-medium is-radiusless has-shadow">
                                        Pagar
                                    </button>
                                ) : (
                                    ""
                                )}
                            </form>
                        </div>
                        <div className="column is-3"></div>
                    </div>
                ) : (
                    <div className="columns">
                        <div className="column is-3"></div>
                        <div className="column is-half has-background-white has-shadow has-rounded-border p-6 has-text-centered">
                            <h1 className="title has-text-morado">
                                Compra exitosa
                            </h1>
                            <p className="subtitle is-5">
                                Tu compra se realizó correctamente.
                            </p>
                            <p className="is-5 my-6">
                                Número de órden:
                                <br />
                                <span className="is-5 has-text-success has-text-weight-bold">
                                    {idCompra}
                                </span>
                            </p>
                            <Link
                                to="/"
                                className="button is-radiusless is-primary mt-3"
                            >
                                Volver al home
                            </Link>
                        </div>
                        <div className="column is-3"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Checkout;
