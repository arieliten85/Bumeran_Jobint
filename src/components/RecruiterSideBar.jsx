import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import "../sass/searchs.scss";
import avatar from "../assets/profiles/perfil1.png";

import { addAvtiveSearches } from "../redux/modifyActiveSearches";
import { assignRecruiterToSearch } from "../redux/assignRecruiter";
import { getOneUpDate } from "../redux/search";

function RecruiterSideBar({ recruiter, search }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const date = new Date().toISOString().split("T")[0];
  console.log(date);
  const [bool, setBool] = useState(false);

  // ASIGNAR UN RECRUITER//
  const asignRecruiter = async () => {
    dispatch(addAvtiveSearches(recruiter.id));
    dispatch(
      assignRecruiterToSearch({ searchId: id, RecruiterId: recruiter.id })
    );
    dispatch(
      getOneUpDate({
        id,
        startDate: date,
      })
    );
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  /*  useEffect(() => {
    console.log("funciono");
  }, [bool]); */

  return (
    <>
      <div className="card">
        <Link to={`/profile/${recruiter.id}`}>
          <img src={avatar} alt="imagen" />
        </Link>
        <div className="boxData">
          <div className="boxPerson">
            <h1>{recruiter.name}</h1>
            <h1>{recruiter.lastName}</h1>
          </div>

          <div className="boxCountry">
            <h1>{recruiter.country}</h1>
          </div>
        </div>

        <div className="itemRating">
          <BsStarFill className="estella" />
          <p className="numero">{recruiter.rating}</p>
        </div>

        <button className="buttonAsignar" onClick={asignRecruiter} type="button">
          asignar
        </button>
      </div>
    </>
  );
}

export default RecruiterSideBar;
