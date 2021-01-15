import { useContext } from 'react';
import { getFirebase, getFirestore } from '../../firebase';
import { Store } from './../../contexts/Store'

const Checkout = () => {
    const [data, setData] = useContext(Store);
    const db = getFirestore();
    const app = getFirebase();
    const compra = {
        user: formData,
        items: data.items,
        precioTotal: data.precioTotal,
        date: app.firestore.Timestamp.fromDate(new Date()),
    }

    return (
        <section className="section is-medium" id="cart">
        </section>
    )
}

export default Checkout;