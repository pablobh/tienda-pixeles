import { FiAlertOctagon } from "react-icons/fi";

const Error = ({ titulo, mensaje }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns pb-6 px-5 is-rounded is-centered">
                    <div className="column is-1 has-background-danger has-text-centered has-text-white">
                        <p className="is-size-1 pt-2">
                            <FiAlertOctagon />
                        </p>
                    </div>
                    <div className="column is-5 has-background-danger-light">
                        <p className="subtitle is-4 has-text-naranja">
                            {titulo}
                        </p>
                        <h1 className="title is-2 is-error">{mensaje}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;
