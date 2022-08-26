/* Relacionado con ViewAdmin */
import React, { useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { deleteRecruiter } from "../redux/recruiters";
import { BiTrash } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import perfil from "../assets/profiles/perfil2.png";
import "../sass/cardsAdmin.scss";
import "../sass/ranking.scss";
import { useEffect } from "react";
import { sendAllSearches } from "../redux/search";
import calculateRating from "../utils/calculateRating";

const CardsAdmin = ({ items }) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState("");

  const searchs = useSelector((state) => state.search).filter(
    (search) => search.RecruiterId === items.id && search.StatusId === 3
  );
  const userRating = calculateRating(searchs);

  const handleDelete = () => {
    dispatch(deleteRecruiter(items.id));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    dispatch(sendAllSearches());
  }, []);

  return (
    <div>
      <div className="container-parent">
        <div className="container-card">
          <div className="avatar">
            <img src={perfil} height={75} />
            <Link to={`/profile/${items.id}`}>
              <h6>{items.name + " " + items.lastName} </h6>
            </Link>
          </div>

          <div className="flex">
            <div className="container-ranking">
              <div className="skills-wrapper">
                <div className="skill">
                  <div className="skill-content">
                    <span>{userRating ? userRating.toFixed(1) : 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="container-busquedas">
              <p>{items.activeSearchs} </p>
            </div>
          </div>

          <div className="btn-grupo">
            <Link to={`/admin/profiles/${items.id}`}>
              <button type="button" class="btn btn-warning">
                <FaEdit />
              </button>
            </Link>
            <button
              type="button"
              class="btn  trash-btn"
              onClick={handleDelete}
            >
              <BiTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAdmin;
