const QuantitySelector = ({ restar, sumar, cantidad }) => {
    return (
        <div className="field has-addons">
            <div className="control">
                <button
                    className="button is-danger is-light"
                    disabled={cantidad === 1 ? "disabled" : null}
                    onClick={restar}
                    >
                -
                </button>
            </div>
            <div className="control">
                <input
                    className="input is-light has-text-centered is-narrow"
                    type="number"
                    value={cantidad}
                    readOnly
                    />
            </div>
            <div className="control">
                <button
                    className="button is-success is-light"
                    onClick={sumar}
                    >
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;
