import React from 'react';
//import { useNavigate } from "react-router-dom";
//import "./react-sidenav.css";
import "../components/css/interfaces.css";
import {EmpHistory} from "../components/panels/service_history.jsx";
//import { Routes, Route, Link } from "react-router-dom";

export default function EmployeeBase() {

    return (
        <div className="client_default" style={({ marginTop: "100px" }, { marginLeft: "100px" })}>

<h1>Área do Funcionário </h1>
<h2>Seja bem vindo </h2>
<EmpHistory/>
        </div>    );

}