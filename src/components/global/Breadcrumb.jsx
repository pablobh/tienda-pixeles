function Breadcrumb() {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><link to="#">Bulma</link></li>
                <li><link to="#">Documentation</link></li>
                <li><link to="#">Components</link></li>
                <li className="is-active"><link to="#">Breadcrumb</link></li>
            </ul>
        </nav>
    );
}

export default Breadcrumb;