import {useState, useEffect} from 'react';
import ItemCard from "./ItemCard";

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            nombre: 'Nombre Producto 01',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Branding',
            precio: 6500,
            foto: 'https://picsum.photos/800/850',
            thumb: 'https://picsum.photos/300/350'
        },
        {
            id: 2,
            nombre: 'Nombre Producto 02',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Branding',
            precio: 4700,
            foto: 'https://picsum.photos/800/851',
            thumb: 'https://picsum.photos/300/351'
        },
        {
            id: 3,
            nombre: 'Nombre Producto 03',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Branding',
            precio: 3500,
            foto: 'https://picsum.photos/800/849',
            thumb: 'https://picsum.photos/300/349'
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 800)
    });

    useEffect(() => {
        getProducts
        .then(response => setItems(response))
        .catch(error => console.log(error));
        // eslint-disable-next-line
    }, [])

    return (
        <div className="columns pb-6 px-5">
            {
                items.length ?
                    <>
                        {
                            items.map((item, index) => (
                                <ItemCard
                                    key = {index}
                                    fotoProducto = {item.thumb}
                                    nombreProducto = {item.nombre}
                                    categoriaProducto = {item.categoria}
                                    precioProducto = {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(item.precio)}
                                />
                            ))
                        }
                    </> :
                <p>Cargando...</p>
            }
        </div>
    )
}

export default FeaturedProducts;