import { useState, useContext } from 'react';
import { Store } from './../../contexts/Store'
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import { FaRegEnvelope } from 'react-icons/fa'


const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, ventaCerrada] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState ({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
    })
    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setDatosFormulario({...datosFormulario, [e.target.name]: e.target.value});
    }

    const compra = {
        user: datosFormulario,
        items: data.items,
        precioTotal: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            ventaCerrada(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    return (
        <section className="section is-medium" id="cart">
            <div className="container">
                        {
                    !venta ?
                    <div className="columns">
                        <div className="column is-3"></div>
                        <div className="column is-half">
                            <h1 className="title has-text-morado">Finaliza tu compra</h1>
                            <form onSubmit={handleSubmitForm}>
                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Nombre</label>
                                            <div className="control">
                                                <input className="input" type="text" value={datosFormulario.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombres" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Apellidos</label>
                                            <div className="control">
                                                <input className="input" type="text" value={datosFormulario.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellidos" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Correo electrónico</label>
                                            <div className="control has-icons-left">
                                                <input className="input" type="text" value={datosFormulario.correo} onChange={handleChangeInput} name="correo" placeholder="Correo electrónico" />
                                                <span className="icon is-small is-left">
                                                    <FaRegEnvelope />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Teléfono</label>
                                            <div className="control">
                                                <input className="input" type="tel" value={datosFormulario.telefono} onChange={handleChangeInput} name="telefono" placeholder="Teléfono" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="button is-primary is-large">
                                    Pagar
                                </button>
                            </form>
                        </div>
                        <div className="column is-3"></div>
                    </div> :
                    <p>La compra se realizó correctamente, tu número de seguimiento es: {idCompra}</p>
                }
            </div>
        </section>
    )
}

export default Checkout;