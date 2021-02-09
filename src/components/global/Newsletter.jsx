const Newsletter = () => {
    return (
        <section className="section py-6 has-background-primary">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <h3 className="title is-size-3 has-text-weight-bold">
                            Suscríbete
                        </h3>
                        <p className="subtitle is-size-5 has-text-white">
                            Déjanos tu correo y así estarás enterado de todas
                            nuestras promociones y lanzamientos
                        </p>
                    </div>
                    <div className="column is-1"></div>
                    <div className="column is-6">
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input
                                    className="input is-medium is-fullwidth"
                                    type="email"
                                    placeholder="Tu correo..."
                                />
                            </div>
                            <p className="control">
                                <button className="button is-medium is-info">
                                    Suscribir
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
