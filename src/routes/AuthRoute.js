import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Player from "../pages/auth/Player";
import PlayPage from "../pages/auth/PlayPage";

const AuthRoute = () => {
  return (
    <div className="row auth__route ">
      <div className="col-2 p-0  sidebar">
        <SideBar />
      </div>
      <div className="container-fluid m-0">
        <div className="row h-100">
          <div className="col-12">
            <div className="row">
              <div className="div col-12 p-0">
                <NavBar />
              </div>
            </div>
            <div className="row ">
              <div className="col-12 p-0">
                <PlayPage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default AuthRoute;
