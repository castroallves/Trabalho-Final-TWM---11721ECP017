import React from "react";
import { get_Login_Status, login_status} from "../authentication/login_handler.jsx";
import "/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/css/react-sidenav.css";
//import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/interfaces.css";
//import "font-awesome/css/font-awesome.css";
import RenderUnlogged from "./unlogged_menu.jsx";
import RenderLogged from "./logged_menu.jsx";

// import "../css/style.css";

//var props = 1;

function Menu() {

  if (login_status == 1) {
    return (
     
      <RenderLogged/>);
  }

  else{
    return (
    <RenderUnlogged/>);

  }

}
export default Menu;