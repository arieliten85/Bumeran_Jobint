import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineUser, AiFillStar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

import bu from "../assets/navbar/bu.png";
import useTime from "../hooks/useTime";
import logo from "../assets/navbar/Group.png";
import "../sass/searchs.scss";
import { useState } from "react";
import { getOneRecruiter, sendAllRecruiters } from "../redux/recruiters";

function SearchCard({
  id,
  country,
  area,
  time,
  status,
  description,
  title,
  ratingRecruiter,
  candidates,
  Recruiter,
}) {
  const dispatch = useDispatch();

  const recruiters = useSelector((state) => state.recruiters).filter(
    (rec) => rec.id === Recruiter
  );

  // tiempo
  const date = new Date().getTime();
  const searchTime = new Date(time);
  const diff = (date - searchTime) / (1000 * 60 * 60 * 24);
  const countryName = useSelector((state) => state.country).filter(
    (pais) => pais.id === country
  );
  const areaName = useSelector((state) => state.area).filter(
    (areas) => areas.id === area
  );

  let timeStamp = "";

  if (parseInt(diff) === 1) {
    timeStamp = "Publicado hace 1 día";
  } else if (diff > 1) {
    timeStamp = `Publicado hace ${parseInt(diff)} días`;
  } else if (diff * 24 < 24 && diff * 24 * 60 >= 120) {
    timeStamp = `Publicado hace ${parseInt(diff * 24)} horas`;
  } else if (diff * 24 * 60 < 120) {
    timeStamp = "Nuevo";
  }

  let actualStatus;

  switch (status) {
    case null:
      actualStatus = "No iniciada";
      break;

    case 2:
      actualStatus = "No iniciada";
      break;

    case 1:
      actualStatus = "En proceso";
      break;

    case 3:
      actualStatus = "Finalizada";
      break;
  }

  const handleDeleteSearch = () => {
    dispatch(deleteSearch(id));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  useEffect(() => {
    dispatch(sendAllRecruiters());
  }, []);
  return (
    <>
      <div className="card">
        <div className="boxTime d-flex justify-content-between align-items-center">
          <span class="status">{actualStatus}</span>
          <small>{timeStamp}</small>
        </div>

        <div className="box">
          <div className="flex">
            <div class="col ">
              <Link to={`/searchs/${id}`}>
                <div>
                  <h5>{title}</h5>
                  <p className="area">{areaName[0] ? areaName[0].name : ""}</p>
                  <p class="card-text card-texto2">
                    {description?.substring(0, 230) + "... "}
                    <strong>ver más</strong>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="infoCard">
            {/* <div class=" d-flex justify-content-left p-2">
      <span class="badge">{actualStatus}</span>
    </div> */}

            <div class="boxLocation">
              <IoLocationSharp class="local" size={30} />
              <p>{countryName[0] ? countryName[0].name : ""}</p>
              <div className="popUpLocation">
                <p>Pais</p>
              </div>
            </div>

            <div class="boxLocation">
              <AiFillStar class="local " size={30} />
              <p alt>{ratingRecruiter}</p>
              <div className="popUpRating">
                <p>Rating</p>
              </div>
            </div>

            <div class="boxLocation">
              <IoIosPeople class="local" size={30} />
              <p>{candidates !== "0" ? candidates : "Cto. no asignado"}</p>
              <div className="popUpCandidatos">
                <p>Candidatos asignados</p>
              </div>
            </div>

            <div class="boxLocation">
              <AiOutlineUser class="local" size={30} />
              <p>
                {recruiters.length !== 0
                  ? recruiters[0].name
                  : "Rter. no asignado"}
              </p>
              <div className="popUpReclutador">
                <p>Reclutador</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col bumeran-container">
          <img src={bu} className="bumeran" />
        </div>
      </div>
    </>
  );
}

export default SearchCard;
