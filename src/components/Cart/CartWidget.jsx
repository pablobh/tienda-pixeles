import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

const CartWidget = (props) => {
    return (
        <div className="navbar-item">
            <div className="button">
                <Link
                    to={{
                        pathname: "/carrito",
                    }}
                >
                    <div className="icon has-text-success">
                        <GrCart />
                        <span className="badge is-right is-info has-text-weight-bold">
                            {props.cantidad}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CartWidget;
