import React from "react";
import GraficoBarras from "./GraficoBarras";
import GraficoBarras2 from "./GraficoBarras2";
import "../sass/graficos.scss";

const CarouselGraficos = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide carousel-graficos"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active grafico-1">
            <GraficoBarras />
          </div>
          <div class="carousel-item grafico-2">
            <GraficoBarras2 />
          </div>
        </div>
        <button
          class="carousel-control-prev btn-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon prev-slice"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next btn-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon next-slice"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselGraficos;
