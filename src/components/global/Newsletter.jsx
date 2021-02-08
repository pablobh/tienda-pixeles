const Newsletter = () => {
    return (
        <section className="section is-primary">
            <div className="container has-background-primary p-6 has-shadow">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <h3 className="title is-size-3 has-text-weight-bold">
                            Suscríbete
                        </h3>
                        <p className="subtitle is-size-5 has-text-white">
                            Déjanos tu correo y así estarás enterado de todas nuestras promociones y lanzamientos
                        </p>
                    </div>
                    <div className="column is-half">
                        <div className="field is-grouped">
                            <div className="control is-expanded">
                                <input className="input is-medium has-shadow" type="email" placeholder="Tu correo..." />
                            </div>
                            <p className="control">
                                <button className="button is-medium is-info has-shadow">
                                    Suscribir
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;