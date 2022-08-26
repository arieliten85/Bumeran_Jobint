import React from "react";
import "../sass/contacto.scss";
import circulo from "../assets/contacto/imgContacto.png";

export default function contacto() {
  return (
    <>
      <div className="boxContacto" id="contacto">
        <div className="boxImg">
        <img src={circulo} alt="" />
        </div>
        

        <form action="">
          <h6>¿Listo para encontrar el talento que estás buscando?​</h6>
          <div className="box">
            <div className="box1">
              <input
                type="text"
                className="form-control input"
                placeholder="Nombre y Apellido"
                aria-label="Nombre y Apellido"
                {...name}
              />
              <input
                type="text"
                className="form-control input"
                placeholder="Correo"
                aria-label="Correo"
                {...name}
              />
            </div>
            <div className="box2">
              <input
                type="text"
                className="form-control input"
                placeholder="Teléfono"
                aria-label="telefono"
                {...name}
              />

              <input
                type="text"
                className="form-control input"
                placeholder="Ubicación"
                aria-label="Ubicación"
                {...name}
              />
            </div>
          </div>
          <div className="box">
            <input
              type="text"
              className="form-control input"
              placeholder="Mensaje"
              aria-label="Mensaje"
              {...name}
            />
          </div>
          <div className="boxButton">
            <button>ENVIAR</button>
          </div>
        </form>
      </div>
    </>
  );
}
