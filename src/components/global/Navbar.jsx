function Navbar() {
    document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    });
    return (
        <header className="section is-paddingless is-marginless">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://4topixel.com">
                            <img src="https://cdn-5d61ec94f911c80950251c4d.closte.com/wp-content/themes/contratopedia/dist/images/4topixel-horizontal-negro_c9db5e35.svg"  width="112" height="28" alt="4to Pixel" />
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarPrincipal">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarPrincipal" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="index.html">
                                Inicio
                            </a>

                            <a className="navbar-item" href="index.html">
                                El Equipo
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="navbar-link">
                                    Servicios
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item" href="index.html">
                                        Branding
                                    </a>
                                    <a className="navbar-item" href="index.html">
                                        Web
                                    </a>
                                    <a className="navbar-item" href="index.html">
                                        Fotografía
                                    </a>
                                    <a className="navbar-item" href="index.html">
                                        Social Media
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary" href="index.html">
                                        <strong>Crear cuenta</strong>
                                    </a>
                                    <a className="button is-light" href="index.html">
                                        Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;