import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { userDetails } = useSelector((state) => state.UserReducer);
  // console.log(userDetails);

  return (
    <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
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
            <a className="dropdown-item" href="#">
              logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
