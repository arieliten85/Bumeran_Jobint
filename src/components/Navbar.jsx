import marca from "../assets/navbar/logo-1.png";
import {
  BsPersonXFill,
  BsPersonSquare,
  BsFillPersonPlusFill,
  BsBarChart,
} from "react-icons/bs";
import { RiUserSearchFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postLogoutRequest } from "../redux/login";

import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";

import "../sass/navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(postLogoutRequest());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark  shadow-lg p-4  bg-white    nav-menu_medium ">
      <div class="container-fluid  align-items-baseline d-flex p-2 boxNav ">
        <Link to={"/"} className="logo">
          <img src={marca} width={250} />
        </Link>

        <AiOutlineMenu
          class="menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon warning" id="navtoggler"></span> */}
        </AiOutlineMenu>

        <div
          class="collapse navbar-collapse p-2 bor2 "
          id="navbarNavDarkDropdown"
        >
          {!user.name ? (
            <>
              <ul className="boxLinks bor">
                <Link to={"/"}>
                  <li className="nav-iten">
                    <h2 className="nav-links">Home</h2>
                  </li>
                </Link>

                <a href="#quienesSomos">
                  <li className="nav-iten active">
                    <h2 className="nav-links">¿Quíenes Somos?</h2>
                  </li>
                </a>

                <a href="#OtrosServicios">
                  <li className="nav-iten active">
                    <h2 className="nav-links">Otros Servicios</h2>
                  </li>
                </a>

                

                <a href="#contacto">
                  <li className="nav-iten active">
                    <h2 className="nav-links">Contactos</h2>
                  </li>
                </a>
              </ul>

              <div className="boxButtont">
                <Link to={"/sigup"}>
                  <button class="btn login " type="submit">
                    Crear cuenta
                  </button>
                </Link>

                <Link to={"/login"}>
                  <button class="btn btn-danger registro" type="submit">
                    Ingresar
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <ul class="bor">
                {user.name ? (
                  user.admin ? (
                    <>
                      <Link to={"/"}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <AiOutlineHome className="icon" />
                            <h2 className="nav-links px-2">Home</h2>
                          </div>
                        </li>
                      </Link>

                      <Link to={"/searchs"}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <RiUserSearchFill className="icon" />
                            <h2 className="nav-links px-2">Busquedas</h2>
                          </div>
                        </li>
                      </Link>

                      <Link to={"/admin"}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <BsFillPersonPlusFill className="icon" />
                            <h2 className="nav-links px-2">Reclutadores</h2>
                          </div>
                        </li>
                      </Link>

                      <Link to={"/info"}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <BsBarChart className="icon" />
                            <h2 className="nav-links px-2">Estadisticas</h2>
                          </div>
                        </li>
                      </Link>

                      <Link to={`/profile/${user.id}`}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <BsPersonSquare className="icon" />
                            <h2 className="nav-links px-2">Perfil</h2>
                          </div>
                        </li>
                      </Link>
                      {/* 
                      <li class="nav-item">
                        <Link to={"/"} className="nav-link active text">
                          <AiOutlineHome /> Home
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to={"/searchs"} class="nav-link active text">
                          <RiUserSearchFill class="icon" /> Busquedas
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/admin"} className="nav-link active text">
                          <BsFillPersonPlusFill /> Reclutadores
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/info"} className="nav-link active text">
                          <BsBarChart /> Estadisticas
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link
                          to={`/profile/${user.id}`}
                          className="nav-link active text"
                        >
                          <BsPersonSquare class="icon" />
                          Mi perfil
                        </Link>
                      </li> */}
                    </>
                  ) : (
                    <>
                      <Link to={"/"}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <AiOutlineHome className="icon" />
                            <h2 className="nav-links px-2">Home</h2>
                          </div>
                        </li>
                      </Link>

                      <Link to={`/profile/${user.id}`}>
                        <li className="nav-iten active">
                          <div className="d-flex align-items-center">
                            <BsPersonSquare className="icon" />
                            <h2 className="nav-links px-2">Perfil</h2>
                          </div>
                        </li>
                      </Link>
                    </>
                  )
                ) : (
                  ""
                )}
              </ul>
              <li className="boxSaludo">
                <h4> Hola {user.name}!</h4>
              </li>
              {user.id ? (
                <span className="boton-logout">
                  <button
                    class="btn btn-danger registro"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Cerrar sesion
                  </button>
                </span>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <li class="nav-item">
                  <Link to={"/"} className="nav-link active text">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to={"/"} className="nav-link active text">
                    ¿Quíenes Somos?
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to={"/"} className="nav-link active text">
                    Otros Servicios
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to={"/"} className="nav-link active text">
                    Contacto
                  </Link>
                </li> */
}

{
  /* <div>
<nav class="navbar navbar-expand-lg bg-">
  <div class="container-fluid">
    <Link to={"/"} className="navbar-brand">
      <img src={marca} width={250} />
    </Link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        {user.name ? (
          user.admin ? (
            <div className="d-flex">
              <li class="nav-item">
                <Link to={"/searchs"} class="nav-link active text">
                  <MdPersonSearch class="icon" /> Busquedas
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/admin"} className="nav-link active text">
                  <BsFillPersonPlusFill /> Reclutadores
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/info'} className="nav-link active text">
                  <BsBarChart /> Estadisticas
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to={`/profile/${user.id}`}
                  className="nav-link active text"
                >
                  <BsPersonSquare class="icon" />
                  Mi perfil
                </Link>
              </li>
            </div>
          ) : (
            <li class="nav-item">
              <Link
                to={`/profile/${user.id}`}
                className="nav-link active text"
              >
                <BsPersonSquare class="icon" />
                Mi perfil
              </Link>
            </li>
          )
        ) : (
          ""
        )}
      </ul>
    </div>
    {user.id ? (
      <span className="boton-logout">
        <button onClick={handleLogout} class="btn btn-dark" type="submit">
          <BsPersonXFill class="icon" />
        </button>
      </span>
    ) : (
      <div className="d-flex">
        <Link to={"/sigup"}>
          <button class="btn login" type="submit">
            Crear cuenta
          </button>
        </Link>

        <Link to={"/login"}>
          <button class="btn btn-danger registro" type="submit">
            Ingresar
          </button>
        </Link>
      </div>
    )}
  </div>
</nav>
</div> */
}
