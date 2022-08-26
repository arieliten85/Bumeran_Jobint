import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

import perfil from "../assets/profiles/perfil1.png";
import logo from "../assets/navbar/Group.png";
import background from "../assets/svg background/ondas.svg";
import phone from "../assets/fomrs/descarga3.png";
import useInput from "../hooks/useInput";
import calculateRating from "../utils/calculateRating";
import { getOneRecruiter, modifyRecruiter } from "../redux/recruiters";
import { getAssignedSearchRequest } from "../redux/assignedSearch";
import { getOneUpDate } from "../redux/search";
import { subtractAvtiveSearches } from "../redux/modifyActiveSearches";
import "../sass/profile2.scss";
import { deleteNull } from "../utils/recluterConversor";
import { modifyRating } from "../redux/modifyRecruiterRating";

import { BsStarFill } from "react-icons/bs";

const Profile = () => {
  const dispatch = useDispatch();

  let userId = useParams().id;
  const [validate, setValidate] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(0);
  const [startTime, setStartTime] = useState("");
  const date = new Date().toLocaleDateString("en-us");
  const day1 = new Date(date);
  const day2 = new Date(startTime);

  var difference = (day1.getTime() - day2.getTime()) / (1000 * 60 * 60 * 24);

  const userRedux = useSelector((state) => state.recruiters);
  const searchs = useSelector((state) => state.assigned);
  const filteredSearchs = searchs.filter((search) => search.StatusId !== 3);
  const filteredDate = filteredSearchs.map((search) =>
    addDaysToDate(search.updatedAt, 15)
  );
  const user = userRedux[0];

  console.log("RATING", user);

  const finishedSearches = searchs.filter((search) => search.StatusId === 3);

  console.log("BUSQUEDAS FINALIZADAS", finishedSearches);

  const userRating = calculateRating(finishedSearches) || 0;

  console.log(userRating);

  const userCountry = useSelector((state) => state.country).filter(
    (pais) => pais.id === user.CountryId
  );
  const userExperienceField = useSelector((state) => state.area).filter(
    (area) => area.id === user.AreaId
  );

  const workersNum = useInput();
  const ratingNum = useInput();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search/chart/daterecruiter`)
      .then((res) => setData(res.data));
  }, []);

  const newData = data.flat();
  const depurateData = deleteNull(newData);
  const filteredData = depurateData.filter(
    (data) => data.RecruiterId == userId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workersNum.value !== undefined && workersNum.value !== "0") {
      dispatch(
        getOneUpDate({
          id: selectedSearch,
          StatusId: 3,
          candidates: workersNum,
          ratingRecruiter: ratingNum,
          finishDate: date,
          searchTime: difference > 0 ? difference.toFixed(0) : 1,
        })
      );

      dispatch(
        modifyRecruiter({
          id: userId,
          rating: user.rating === 0 ? ratingNum : userRating,
        })
      );
      dispatch(subtractAvtiveSearches(userId));
      //dispatch(modifyRating(userId));
      setValidate(true);
      setTimeout(() => {
        axios.put(`http://localhost:8000/api/recruiter/${userId}/rating`);
        document.getElementById("closeBtn").click();
        window.location.reload();
      }, 1000);
    }

    e.target.reset();
  };

  const handleClose = (e) => {
    e.preventDefault();
    setValidate(false);
  };

  function addDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  useEffect(() => {
    dispatch(getOneRecruiter(userId));
    dispatch(getAssignedSearchRequest(userId));
  }, [userId]);

  return (

    <div className="contenedorPadre">
    <h2 className="tituloPerfil">Mi perfil</h2>
     <div className=" profile-container">
      
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Datos requeridos
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Número de candidatos presentados:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    min={0}
                    defaultValue={0}
                    {...workersNum}
                    required
                  />
                  <label for="recipient-name" class="col-form-label">
                    Mi puntuación:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    min={0}
                    defaultValue={0}
                    {...ratingNum}
                    required
                  />
                </div>
                {validate ? (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Enviado correctamente</strong>
                    <button
                      type="reset"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div class="modal-footer">
                <button
                  id="closeBtn"
                  type="reset"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Cerrar
                </button>
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      

      <div className="boxPerfil ">

        {/* info contacto */}
        <div className="card-body boxInfo">
          <div className="boxImg">
            <img className="profile-photo" src={perfil} alt="" />
          </div>

          <div className="boxName">
            <h5 className="user-name">{user.name + " " + user.lastName}</h5>
          </div>

          <div className="profile-photo-container boxEditRating">
            {user.admin ? (
              <Link to={`/admin/profiles/${user.id}`}>
                <FaEdit className="profile-edit" />
              </Link>
            ) : (
              <Link to={`/recruiter/profiles/${user.id}`}>
                <FaEdit className="profile-edit iconoEdit" />
              </Link>
            )}

            <div className="boxRating">
              <BsStarFill className="icono" />
              {userRating ? userRating.toFixed(1) : 0}
            </div>
          </div>

          <div className="profile-infoContainer  boxData">
            <div className="items">
              <div>
                <strong className="userInfo-tag titulo ">Nacionalidad:</strong>
              </div>
              <div>
                <p className="atributo">
                  {userCountry[0] ? userCountry[0].name : "No asignado"}
                </p>
              </div>
            </div>

            <div className="items">
              <div>
                <strong className="userInfo-tag titulo ">Área:</strong>
              </div>
              <div>
                <p className="atributo">
                  {userExperienceField[0]
                    ? userExperienceField[0].name
                    : "No asignado"}
                </p>
              </div>
            </div>

            <div className="items">
              <div>
                <strong className="userInfo-tag titulo ">Demora por búsqueda:</strong>
              </div>
              <div>
                <p className="atributo">{filteredData[0]?.avarage}</p>
              </div>
            </div>

            <div className="items">
              <div>
                <strong className="userInfo-tag titulo ">Email:</strong>
              </div>
              <div>
                <p className="atributo">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/*  fin info contacto */}
      </div>

      <div className="boxDescrpcion">
        <div className="card-header solapa">
          <nav>
            <div
              class="nav nav-tabs card-header-tabs"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link active  solapaBusq"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                <p>
                {"(" + user.activeSearchs + ")" + " " + "Búsquedas Activas"}
                </p>
               
              </button>
              <button
                class="nav-link solapaDescrip"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                <p>  Descripción</p>
              
              </button>
            </div>
          </nav>
        </div>
        <div className="card-body p-0">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="">
                <table className="table profile-table">
                  {filteredSearchs.length !== 0 ? (
                    <thead className="searchTable-head">
                      <tr className="">
                        <th scope="col">Título</th>
                        <th scope="col">Fecha de cierre</th>
                        <th scope="col">Vacantes</th>
                        <th scope="col">Completar</th>
                      </tr>
                    </thead>
                  ) : (
                    ""
                  )}

                  {filteredSearchs.length !== 0 ? (
                    filteredSearchs.map((search, i) => (
                      <tbody key={i} className="searchTable-body">
                        <tr>
                          <th scope="row" className="align-middle">
                            <span>{search.title}</span>
                          </th>
                          <td className="align-middle">
                            <span>
                              {new Date(filteredDate[i]).toLocaleDateString(
                                "es"
                              )}
                            </span>
                          </td>
                          <td className="align-middle">
                            <span>{search.vacancies}</span>
                          </td>
                          <td className="align-middle boxButtonCheck">
                            <button
                              className="check-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => {
                                setSelectedSearch(search.id),
                                  setStartTime(search.startDate);
                              }}
                            >
                              <FaCheck />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <div className="boxBusquedasVacias">
                      <h2>No hay búsquedas activas</h2>
                    </div>
                  )}
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="profile-description">{user.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Profile;

{
  /* <div key={i} className="tasks">
                        <div className="card active-search-card">
                          <Link to={`/searchs/${search.id}`}>
                            <div className="left-content">
                              <img className="card-logo" src={logo} alt="" />
                              <span>{search.title}</span>
                            </div>
                          </Link>
                          <div className="right-content">
                            <button
                              className="botn "
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setSelectedSearch(search.id)}
                            >
                              Completar
                            </button>
                          </div>
                        </div>
                      </div> */
}
