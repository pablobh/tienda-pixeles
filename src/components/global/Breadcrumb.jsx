import { Link } from "react-router-dom";

function Breadcrumb({inicio = null, categoria = null, producto = null, productoNombre = null}) {
    return (
        <section className="section p-1 has-background-primary-light">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <nav className="breadcrumb is-size-7" aria-label="breadcrumbs">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li className={producto == null && productoNombre == null ? "is-active":""}><Link to="/{categoria}">{categoria}</Link></li>
                                {
                                    producto != null && productoNombre != null ?
                                    <li className="is-active"><Link to="/{categoria}/{producto}">{productoNombre}</Link></li>:""
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;