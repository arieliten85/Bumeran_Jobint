import React, { useState } from "react";
import useInput from "../hooks/useInput";
import "../sass/forms.scss";
import { Link, useNavigate } from "react-router-dom";
import { postLoginRequest } from "../redux/login";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlerLogin = (e) => {
    e.preventDefault();
    dispatch(postLoginRequest({ email, password }));
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="prueba-1">
      <form className="form" onSubmit={handlerLogin}>
        <h3 className="title-register-login">Iniciar sesión</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            {...email}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...password}
          />
        </div>
        <p>
          ¿No tienes cuenta todavía? <span></span>
          <span>
            <strong>
              <Link to={"/sigup"} className="detalles">
                Regístrate
              </Link>
            </strong>
          </span>
        </p>
        {isLoading ? (
          <button
            class="btn btn-danger input btn-form btn-register"
            type="button"
            disabled
          >
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Cargando...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-danger input btn-form btn-register"
            onClick={() =>
              setTimeout(() => {
                setIsLoading(true);
              }, 100)
            }
          >
            Ingresar
          </button>
        )}
      </form>
    </div>
  );
};

export default LogIn;
