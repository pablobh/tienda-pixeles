import { Link } from "react-router-dom";

const Breadcrumb = ({categoria = null, categoriaBonita = null, producto = null, productoNombre = null}) => {
    return (
        <section className="section p-1 has-background-primary-light">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <nav className="breadcrumb is-size-7" aria-label="breadcrumbs">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li className={producto == null && productoNombre == null ? "is-active is-capitalized":"is-capitalized"}><Link to={categoria}>{categoriaBonita}</Link></li>
                                {
                                    producto != null && productoNombre != null ?
                                    <li className="is-active is-capitalized"><Link to="/{categoria}/{producto}">{productoNombre}</Link></li>:""
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