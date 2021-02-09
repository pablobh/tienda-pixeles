const Hero = (props) => {
    return (
        <section className="section is-primary">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className="title">{props.titulo}</h1>
                        <p>{props.mensaje}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
