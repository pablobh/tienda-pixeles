import { GrCart } from 'react-icons/gr'

const CartWidget = (props) => {
    return (
        <div className="navbar-item">
            <div className="button">
                <a href="!#">
                    <div className="icon has-text-success">
                        <GrCart />
                        <span className="badge is-right is-info has-text-weight-bold">
                            {props.cantidad}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default CartWidget;