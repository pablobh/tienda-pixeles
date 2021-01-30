import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="navbar-item">
      <div className="buttons">
        <Link
          to={{
            pathname: "/cuenta",
          }}
          className="button is-primary"
        >
          <strong>Mi cuenta</strong>
        </Link>
      </div>
    </div>
  );
}

export default Login;
