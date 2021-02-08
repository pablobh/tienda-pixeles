const Button = ({event, id, className, title}) => {
    return (
        <button
            onClick={event}
            id={id}
            className={className}
            >
            {title}
        </button>
    );
};

export default Button;
