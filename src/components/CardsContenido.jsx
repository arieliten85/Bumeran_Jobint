import React from "react";
import "../sass/cardsContenido.scss";
import img1 from "../assets/contenido/descarga16.png";
import img2 from "../assets/contenido/descarga17.png";
import img3 from "../assets/contenido/descarga18.png";
import img4 from "../assets/contenido/descarga19.png";

import continente from "../assets/quienesSomos/continente.png";

import arg from "../assets/quienesSomos/paises/agr.png";
import chile from "../assets/quienesSomos/paises/chile.png";
import col from "../assets/quienesSomos/paises/col.png";
import costrica from "../assets/quienesSomos/paises/costrica.png";
import mex from "../assets/quienesSomos/paises/mex.png";
import peru from "../assets/quienesSomos/paises/peru.png";
import uru from "../assets/quienesSomos/paises/uru.png";
import perfil from "../assets/quienesSomos/perfil.png";

import op from "../assets/quienesSomos/op.png";
import eli from "../assets/quienesSomos/eli.png";
import mat from "../assets/quienesSomos/mat.png";

import Contacto from "../components/Contacto";

const CardContenido = () => {
  return (
    <div className="cards__home" id="Servicios">
      <div className="boxQuienesSomos">
        <div className="item_img_1">
          <div>
            <img src={continente} alt="" />
          </div>
          <div className="boxPaises">
            <img src={arg} alt="" />
            <img src={chile} alt="" />
            <img src={col} alt="" />
            <img src={costrica} alt="" />
            <img src={mex} alt="" />
            <img src={peru} alt="" />
            <img src={uru} alt="" />
          </div>
        </div>

        <div className="boxCardInfo">
          <h3 id="quienesSomos">¿Quiénes somos?</h3>
          <strong>
            Somos la primera plataforma tecnológica aplicada a la selección de
            talento.
          </strong>
          <p>
            Vinculamos la tecnología con la mayor red de expertos de la región y
            la base de candidatos más amplia de Latinoamérica. <br /> <br />{" "}
            Reinventamos el reclutamiento por medio de procesos más
            transparentes, ágiles y asertivos; logrando una tasa de cierre al
            90%
          </p>

          <div className="boxcard">
            <strong>
              Tecnología + Red de Expertos + Base de Candidatos = Talento
              encontrado
            </strong>
            <div className="cardBg">
              <img src={perfil} alt="" />
              <div className="infoText">
                <p>Reclutadores expertos en el perfil Comercial</p>

                <p> +15 años de experiencia</p>

                <p> 1500 bùsquedas</p>
              </div>
            </div>

            <div className="info">
              <div className="itemInfo">
                <h6>Optimizamos tiempos</h6>
                <img src={op} alt="" />
              </div>
              <div className="itemInfo">
                <h6>Eliminamos costos innecesarios</h6>
                <img src={eli} alt="" />
              </div>
              <div className="itemInfo">
                <h6>Encontramos el match perfecto</h6>
                <img src={mat} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 id="OtrosServicios" className="justify center">
        Otros servicios{" "}
      </h3>
      <div class="containerBoxContent">
        <div className="container__cards">
          <div className="cards">
            <div className="cover">
              <img src={img1} />
              <div className="img_back"></div>
            </div>
            <div className="description">
              <h3>Selección Curricular</h3>
              <p>
                Presentación de candidatos de acuerdo a un screening teléfonico
                alineados al perfil requerido.
              </p>
            </div>
            <a href="#" className="btn btn-danger-cards">
              CONTACTO
            </a>
          </div>
        </div>

        <div className="container__cards">
          <div className="cards">
            <div className="cover">
              <img src={img2} />
              <div className="img_back"></div>
            </div>
            <div className="description">
              <h3>Estudios Comportamentales</h3>
              <p>
                Evaluaciones psicotécnicas, psicométricas, gaming para medir
                competencias, habilidades y personalidad.
              </p>
            </div>
            <a href="#" className="btn btn-danger-cards">
              CONTACTO
            </a>
          </div>
        </div>

        <div className="container__cards">
          <div className="cards">
            <div className="cover">
              <img src={img3} />
              <div className="img_back"></div>
            </div>
            <div className="description">
              <h3>Capacitaciones</h3>
              <p>
                Un talento capacitado es más efectivo y productivo lo que te
                permitirá reducir costos y tiempo.
              </p>
            </div>
            <a href="#" className="btn btn-danger-cards">
              CONTACTO
            </a>
          </div>
        </div>

        <div className="container__cards">
          <div className="cards">
            <div className="cover">
              <img src={img4} />
              <div className="img_back"></div>
            </div>
            <div className="description">
              <h3>Outplacement Empresas</h3>
              <p>
                Apoyamos a tus colaboradores en el proceso de transición de
                carrera profesional. Diseñamos un plan integral adaptado al
                profesional.
              </p>
            </div>
            <a href="#" className="btn btn-danger-cards">
              CONTACTO
            </a>
          </div>
        </div>
      </div>

      <div className="contacto">
        <Contacto />
      </div>

      <h4>
        Te ayudamos a <span className="text-light">encontrar</span> talento
      </h4>
    </div>
  );
};

export default CardContenido;
