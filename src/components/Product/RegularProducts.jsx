import ProductCard from "./ProductCard";

const RegularProducts = ({items}) => {
    const productosDisponibles = JSON.parse(localStorage.getItem('productosDisponiblesLocal'));
    const productosRegulares = productosDisponibles.filter(producto => producto.destacado === false)
    return (
        <div className="columns is-multiline pb-6 px-5">
            {
                productosRegulares.length ?
                    <>
                        {
                            productosRegulares.map((item, index) => (
                                <ProductCard
                                    key = {index}
                                    idProducto = {item.id}
                                    fotoProducto = {item.foto}
                                    thumbProducto = {item.thumb}
                                    nombreProducto = {item.nombre}
                                    categoriaProducto = {item.categoria}
                                    categoriaBonitaProducto = {item.categoriaBonita}
                                    precioProducto = {Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 0}).format(item.precio)}
                                    cantidadColumnas = {3}
                                />
                            ))
                        }
                    </> :
                <p>Cargando...</p>
            }
        </div>
    )
}

export default RegularProducts;