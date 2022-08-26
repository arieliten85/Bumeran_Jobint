import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { BiTrash } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { sendAllSearches } from "../redux/search";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../sass/searchs.scss";
import "../sass/viewAdmin.scss";
import { getCountriesRequest } from "../redux/getCountries";
import { getAreasRequest } from "../redux/getAreas";

function SearchsGrid() {
  const dispatch = useDispatch();
  const date = new Date().getTime();

  const searchs = useSelector((state) => state.search);

  const areas = useSelector((state) => state.area);
  const paises = useSelector((state) => state.country);

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");
  const [searchTime, setSearchTime] = useState("");
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
  const handleSearchTimeChange = (e) => {
    setSearchTime(e.target.value);
    searchs.map((s) => {
      console.log(date - new Date(s.createdAt));
    });
  };

  const handleReset = () => {
    setSelectedContry("");
    setJobArea("");
    setSearchTime("");
    setSearchStatus("");
  };
  useEffect(() => {
    dispatch(getCountriesRequest());
    dispatch(getAreasRequest());
    dispatch(sendAllSearches());
  }, []);
  return (
    <div class="container">
      <h3 className="titulo">Selección de Busquedas</h3>
      <div class="card card-search p-2 mt-3">
        <div class="col col-lg-1  justify-content-center create ">
          <Link
            to={"/admin/searchs/create"}
            className="navbar-brand btn btn-search "
          >
            <BsPlusCircle />
          </Link>
        </div>
        <div class="d-flex justify-content-center boxBusqueda">
          <div>
            <select
              aria-label="Default select example"
              onChange={handleCountryChange}
              className="form-select"
            >
              <option value={""}>País</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais.id}>
                  {pais.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={handleJobAreaChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Área</option>
              {areas.map((area, index) => (
                <option key={index} value={area.id}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>
          <div class=" ">
            <select
              onChange={handleSearchTimeChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Fecha</option>
              <option value={1}>Hoy</option>
              <option value={7}>Esta semana</option>
              <option value={30}>Este mes</option>
              <option value={365}>Este año</option>
            </select>
          </div>
          <div class=" ">
            <select
              onChange={handlSearchStatusChange}
              aria-label="Default select example"
              className="form-select"
            >
              <option value={""}>Status</option>
              <option value={2}>No iniciada</option>
              <option value={1}>En proceso</option>
              <option value={3}>Finalizada</option>
            </select>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="col col-lg-1 create2">
            <Link
              to={"/admin/searchs/create"}
              className="navbar-brand btn btn-search "
            >
              <AiOutlinePlusCircle className="icono" />
            </Link>
          </div>

          <div class="col col-lg-1">
            <BiTrash onClick={handleReset} class="btnDelete " />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="col ContainerSearch">
          {searchs
            .filter((val) => {
              if (searchStatus === "") {
                return val;
              } else if (val.StatusId === Number(searchStatus)) {
                return val;
              }
            })
            .filter((val) => {
              if (searchTime === "") {
                return val;
              } else if (
                (date - new Date(val.createdAt)) / (1000 * 60 * 60 * 24) <=
                searchTime
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

            .map((search, index) => {
              return (
                <SearchCard
                  key={index}
                  country={search.CountryId}
                  area={search.AreaId}
                  ratingRecruiter={search.ratingRecruiter}
                  candidates={search.candidates}
                  Recruiter={search.RecruiterId}
                  time={search.createdAt}
                  status={search.StatusId}
                  id={search.id}
                  description={search.description}
                  title={search.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchsGrid;
