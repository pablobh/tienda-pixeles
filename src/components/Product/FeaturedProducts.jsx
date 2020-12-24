import {useState, useEffect} from 'react';
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            nombre: 'Nombre Producto 01',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Branding',
            precio: 16500,
            foto: 'https://picsum.photos/800/800',
            thumb: 'https://picsum.photos/300/300'
        },
        {
            id: 2,
            nombre: 'Nombre Producto 02',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Fotografía',
            precio: 14700,
            foto: 'https://picsum.photos/801/800',
            thumb: 'https://picsum.photos/301/300'
        },
        {
            id: 3,
            nombre: 'Nombre Producto 03',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Branding',
            precio: 13500,
            foto: 'https://picsum.photos/800/801',
            thumb: 'https://picsum.photos/300/301'
        },
        {
            id: 4,
            nombre: 'Nombre Producto 04',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quam minima temporibus fuga, porro sapiente nobis, corporis deserunt eos provident dignissimos, amet doloremque repudiandae ipsum saepe? Illum dolores assumenda laborum',
            categoria: 'Web',
            precio: 10500,
            foto: 'https://picsum.photos/801/801',
            thumb: 'https://picsum.photos/301/301'
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
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
                                <ProductCard
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