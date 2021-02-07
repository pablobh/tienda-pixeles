import { useState, useContext } from "react";
import { Store } from "./../../contexts/Store";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import { FaRegEnvelope } from "react-icons/fa";

const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, ventaCerrada] = useState(false);
    const [valNombre, setValNombre] = useState(false);
    const [valApellido, setValApellido] = useState(false);
    const [valCorreo, setValCorreo] = useState(false);
    const [valTelefono, setValTelefono] = useState(false);
    const [valCorreoFirma, setValCorreoFirma] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        confirmar_correo: "",
        telefono: "",
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
            })
            .catch((e) => console.log(e));
    };

    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                {!venta ? (
                    <div className="columns">
                        <div className="column is-3"></div>
                        <div className="column is-half">
                            <h1 className="title has-text-morado">
                                Finaliza tu compra
                            </h1>
                            <form onSubmit={handleSubmitForm}>
                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">
                                                Nombre
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
                                                <p class="help is-danger">
                                                    El correo es invalido
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                            {valCorreo &&
                                            datosFormulario.correo !== "" ? (
                                                <p class="help is-success">
                                                    el correo es valido
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
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
                                                <p class="help is-danger">
                                                    El telefono debe tener entre
                                                    6 y 10 caracteres
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                            {valTelefono &&
                                            datosFormulario.telefono !== "" ? (
                                                <p class="help is-success">
                                                    el telefono esta correcto
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">
                                                Confirmar Correo electrónico
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
                                                <p class="help is-danger">
                                                    Los correos no coinciden
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                            {valCorreoFirma &&
                                            datosFormulario.confirmar_correo !==
                                                "" ? (
                                                <p class="help is-success">
                                                    Los correos coinsiden
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {valNombre &&
                                valApellido &&
                                valTelefono &&
                                valCorreo &&
                                valCorreoFirma ? (
                                    <button className="button is-primary is-large">
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
                    <p>
                        La compra se realizó correctamente, tu número de
                        seguimiento es: {idCompra}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Checkout;
