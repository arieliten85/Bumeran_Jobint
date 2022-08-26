import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiTrash } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Tables from "../components/Tables";
import CarouselGraficos from "./CarouselGraficos";
import "../sass/stadistics.scss";
import "../sass/viewAdmin.scss";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { CSVLink } from "react-csv";
import DatePicker from "react-datepicker";
import { getAlldata } from "../redux/stadistics";
import { getAreasRequest } from "../redux/getAreas";
import { getCountriesRequest } from "../redux/getCountries";
import { sendAllSearches } from "../redux/search";
import { getAlldataTable } from "../redux/stadisticsTable";
import tableConversor from "../utils/tableConversor";
import getDatesInRange from "../utils/dates";

const Stadistics = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.country);
  const areas = useSelector((state) => state.area);
  const table = useSelector((state) => state.stadisticsTable);

  const tableData = [
    { ...table[0] },
    { ...table[1] },
    { ...table[2] },
    { ...table[3] },
    { ...table[4] },
    { ...table[5] },
    { ...table[6] },
    { ...table[7] },
    { ...table[8] },
    { ...table[9] },
    { ...table[10] },
    { ...table[11] },
    { ...table[12] },
    { ...table[13] },
  ];
  const newDataTable = tableConversor(tableData);

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const handleCountryChange = (e) => {
    setSelectedContry(e.target.value);
  };
  const handleJobAreaChange = (e) => {
    setJobArea(e.target.value);
  };
  const handlSearchStatusChange = (e) => {
    setSearchStatus(e.target.value);
  };
  const handleReset = () => {
    setSelectedContry("");
    setJobArea("");
    setSearchStatus("");
  };
  useEffect(() => {
    dispatch(getCountriesRequest());
    dispatch(getAreasRequest());
    dispatch(getAlldata());
    dispatch(sendAllSearches());
    dispatch(getAlldataTable());
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const filterDates =
    startDate !== null && endDate !== null
      ? getDatesInRange(startDate, endDate)
      : "";

  const datesDepurate =
    startDate !== null && endDate !== null
      ? filterDates.map((date) => date.toLocaleDateString("es"))
      : [];
  console.log("FECHAS FILTRADAS", datesDepurate);

  const onChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    console.log("inicio", start);
    setEndDate(end);
    console.log("final", end);
  };
  registerLocale("es", es);

  return (
    <div className="boxEstadisticas">
      <h3 className="estadisticas-titulo">Reportes y Estadisticas</h3>
      <div className="container-xxl">
        <div className="card card-busqueda">
          <div class="container">
            <div class="row d-flex justify-content-center  align-items-center">
              <div class="col-3 ">
                <DatePicker
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat="dd/MMM/yyyy"
                  placeholderText="Seleccione un fecha"
                  locale="es"
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  className="calendar"
                />
              </div>

              <div class="col-2 ">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Pais"
                  onChange={handleCountryChange}
                >
                  <option value={""}>Pais</option>
                  {countries
                    ?.filter((pais) => pais !== null)
                    .map((pais, i) => {
                      return (
                        <option key={i} value={pais.id}>
                          {pais.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div class="col-3 ">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Área"
                  onChange={handleJobAreaChange}
                >
                  <option value={""}>Área</option>
                  {areas
                    ?.filter((area) => area !== null)
                    .map((area, i) => {
                      return (
                        <option key={i} value={area.id}>
                          {area.name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div class="col-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="Área"
                  onChange={handlSearchStatusChange}
                >
                  <option value={""}>Estado</option>
                  <option value={2}>No iniciada</option>
                  <option value={1}>En proceso</option>
                  <option value={3}>Finalizada</option>
                </select>
              </div>
              <div class="col-1">
                <BiTrash
                  className="borrar"
                  type="button"
                  id="button-addon2"
                  onClick={handleReset}
                />
              </div>

              <div class="col-1 ">
                <CSVLink
                  data={newDataTable}
                  target=" _blank"
                  filename="Estadísticas"
                >
                  <AiOutlineDownload className="borrar" />
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container container-titulos table-responisve">
        <div class="row row-tabla">
          <div class="col">
            <h5>Titulos</h5>
          </div>
          <div class="col">
            <h5>Estado</h5>
          </div>
          <div class="col">
            <h5>Fecha</h5>
          </div>
          <div class="col">
            <h5>País</h5>
          </div>
          <div class="col">
            <h5>Area</h5>
          </div>
          <div class="col">
            <h5>Vacantes</h5>
          </div>
          <div class="col">
            <h5>Postulados</h5>
          </div>
        </div>
      </div>

      {table
        .filter((val) => {
          if (filterDates === "") {
            return val;
          } else if (
            datesDepurate.includes(
              new Date(val.createdAt).toLocaleDateString("es")
            )
          ) {
            return val;
          }
        })
        .filter((val) => {
          if (jobArea === "") {
            return val;
          } else if (val.AreaId === Number(jobArea)) {
            return val;
          }
        })
        .filter((val) => {
          if (selectedCountry === "") {
            return val;
          } else if (val.CountryId === Number(selectedCountry)) {
            return val;
          }
        })
        .filter((val) => {
          if (searchStatus === "") {
            return val;
          } else if (val.StatusId === Number(searchStatus)) {
            return val;
          }
        })
        .map((items, i) => {
          return (
            <div key={i}>
              <Tables items={items} />
            </div>
          );
        })}
      <CarouselGraficos />
    </div>
  );
};

export default Stadistics;
