import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOneRecruiter, modifyRecruiter } from "../redux/recruiters";
import "../sass/formProfile.scss";

/* El administrador puede modificar al recluter */
const FormProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.recruiters);

  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const rating = useInput();
  const description = useInput();

  const [selectedCountry, setSelectedContry] = useState("");
  const [jobArea, setJobArea] = useState("");

  const areas = useSelector((state) => state.area);
  const paises = useSelector((state) => state.country);

  const handleJobAreaChange = (e) => {
    console.log(e.target.value);
    setJobArea(e.target.value);
  };
  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setSelectedContry(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      modifyRecruiter({
        id,
        name,
        lastName,
        email,
        description,
        selectedCountry,
        jobArea,
      })
    );
    setTimeout(() => {
      navigate("/admin");
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    dispatch(getOneRecruiter(id));
  }, []);

  return (
    <div>
      <form class="row g-3 from-edit-1" onSubmit={handlerSubmit}>
        <h4 className="title-recruiters">Editar reclutadores</h4>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].name}
            aria-label=""
            {...name}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].lastName}
            aria-label=""
            {...lastName}
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            placeholder={user[0].email}
            aria-label=""
            {...email}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            {...password}
          />
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            País
          </label>
          <select
            aria-label="Default select example"
            onChange={handleCountryChange}
            className="form-select"
          >
            <option value={""}>Seleccione un país</option>
            {paises.map((pais, index) => (
              <option key={index} value={pais.id}>
                {pais.name}
              </option>
            ))}
          </select>
        </div>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Área
          </label>
          <select
            onChange={handleJobAreaChange}
            aria-label="Default select example"
            className="form-select"
          >
            <option value={""}>Seleccione un área</option>
            {areas.map((area, index) => (
              <option key={index} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        {/* <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Rating
          </label>
          <input
            type="text"
            class="form-control"
            id="inputZip"
            placeholder={user[0].rating}
            {...rating}
          />
        </div> */}

        <div class="form-floating">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            placeholder={user[0].description}
            {...description}
          ></textarea>
        </div>
        <div>
          <Link to={`/profile/${user[0].id}`}>
            <button
              type="submit"
              class="btn btn-danger cancelar align-items-center"
            >
              Cancelar
            </button>
          </Link>
          <button
            type="submit"
            class="btn btn-danger cambios align-items-center"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
