import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  const { headerColor } = useSelector((state) => state.ThemeReducers);

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light justify-content-between"
      style={{ backgroundColor: headerColor }}
    >
      <div className="nav__page">
        <i className="bi bi-chevron-right"></i>
      </div>
      <ul className="navbar-nav ">
        <li
          className="nav-item dropdown d-flex nav__profile__link"
          style={{ placeItems: "center" }}
        >
          <img
            className="rounded-circle"
            style={{ objectFit: "cover" }}
            width={30}
            height={30}
            src={userDetails && userDetails.images[0].url}
            alt=""
          />
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <b>{userDetails && userDetails.display_name}</b>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link
              className="dropdown-item"
              to="/"
              onClick={() => {
                localStorage.removeItem("token%");
                window.location.reload();
              }}
            >
              logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
