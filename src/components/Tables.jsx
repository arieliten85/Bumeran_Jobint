import React from "react";
import { useSelector } from "react-redux";
import "../sass/stadistics.scss";

const Tables = ({ items }) => {
  const countries = useSelector((state) => state.country).filter(
    (pais) => pais.id === items.CountryId
  );
  const areas = useSelector((state) => state.area).filter(
    (area) => area.id === items.AreaId
  );

  return (
    <div>
      <div class="container container-resultados table-responsive">
        <div class="row row-resultados align-items-center">
          <div class="col">
            <h6 className="nombre">{items.title}</h6>
          </div>
          <div class="col">
            {items.StatusId === 2 ? (
              <h6 className="text-no-iniciada">
                <strong>No iniciada</strong>
              </h6>
            ) : (
              ""
            )}
            {items.StatusId === 1 ? (
              <h6 className="text-proceso">
                <strong>En proceso</strong>
              </h6>
            ) : (
              ""
            )}
            {items.StatusId === 3 ? (
              <h6 className="text-finalizada">
                <strong>Finalizada</strong>
              </h6>
            ) : (
              ""
            )}
          </div>
          <div class="col">
            {new Date(items.createdAt).toLocaleDateString("es")}
          </div>
          <div class="col">{countries[0].name}</div>
          <div class="col">{areas[0].name}</div>
          <div class="col">{items.vacancies}</div>
          <div class="col">
            {items.candidates !== null ? items.candidates : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
