import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { sendUserRegister } from "../redux/login";
import "../sass/forms.scss"

const SingUp = () => {
  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerRegister = (e) => {
    e.preventDefault();
    dispatch(sendUserRegister({ name, lastName, email, password }));
    navigate("/login");
  };

  return (
    <div className="prueba">
      <form className="form" onSubmit={handlerRegister}>
        <h3 className="title-register-login">Crea una cuenta</h3>
        <div class="row">
          <div class="col">
            <label>
              Nombre(s)<span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control input"
              placeholder="Nombre"
              aria-label="Nombre"
              {...name}
            />
          </div>
          <div class="col">
            <label>
              Apellido(s)<span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control input"
              placeholder="Apellido"
              aria-label="Apellido"
              {...lastName}
            />
          </div>
        </div>

        <div className="mb-3">
          <label>
            Email<span className="obligatorio">*</span>
          </label>
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
          <label>
            Contraseña<span className="obligatorio">*</span>
          </label>
          <input
            type="password"
            className="form-control input"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...password}
          />
        </div>
        <div clasName="form-check">
          <label clasName="form-check-label" for="flexCheckDefault">
            <p>
              Al hacer click en Crear cuenta, acepto las{" "}
              <span className="detalles">
                <strong>
                  Condiciones de uso y las Políticas de privacidad
                </strong>
              </span>{" "}
              de Bumeran
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-danger input btn-form btn-register"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default SingUp;
