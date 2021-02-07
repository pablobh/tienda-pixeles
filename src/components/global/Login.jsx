import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="navbar-item">
      <div className="buttons">
        <Link
          to={{
            pathname: "/mi-pedido",
          }}
          className="button is-primary"
        >
          <strong>Mi Pedido</strong>
        </Link>
      </div>
    </div>
  );
}

export default Login;
