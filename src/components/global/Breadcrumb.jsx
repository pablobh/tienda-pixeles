import { Link } from "react-router-dom";

function Breadcrumb() {
    return (
        <section className="section is-paddingless py-1 has-background-primary-light">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <nav className="breadcrumb is-size-7" aria-label="breadcrumbs">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/">Documentation</Link></li>
                                <li><Link to="/">Components</Link></li>
                                <li className="is-active"><Link to="/">Breadcrumb</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;