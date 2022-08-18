import React, { useEffect } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/css/react-sidenav.css";
//import "font-awesome/css/font-awesome.css";
import { FaHome, FaHandsHelping, FaUser } from 'react-icons/fa';
import { Routes, Route } from "react-router-dom";
import { login_status, toggle_Login_Status } from "../authentication/login_handler.jsx";
import Home from "../../pages/Home.jsx";
import TextControlsExample from "../panels/service_request.jsx";
import "../css/interfaces.css";
import ServicesList from "../../pages/Services.jsx";
import ClientBase from "../../pages/Client.jsx";
//import "font-awesome/css/font-awesome.css";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu.jsx";
import Root from "../data/Root.jsx";

// import "../css/style.css";

function RenderLogged() {
    const history = useNavigate();

    return (
        <>
            <div id="maintitle"><h1> _Hit Happens</h1></div>

            <SideNav
                onSelect={(selected) => {
                    history(selected);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">

                    {/* BOTÃO HOME */}

                    <NavItem eventKey="home">
                        <NavText>Início</NavText>
                        <NavIcon >
                            <FaHome size={30} />
                        </NavIcon>

                    </NavItem>

                    {/* BOTÃO PÁGINA DO USUÁRIO */}

                    <NavItem eventKey="user">

                        <NavIcon >
                            <FaUser size={30} />
                        </NavIcon>
                        <NavText>Usuário</NavText>
                        <NavItem eventKey="/client">
                            <NavText>Minha página</NavText>
                        </NavItem>
                        <NavItem eventKey="/home">
                            <NavText >Sair</NavText>
                        </NavItem>
                    </NavItem>

                    {/* BOTÃO PRODUTOS / SERVIÇOS */}

                    <NavItem eventKey="prod">

                        <NavIcon >
                            <FaHandsHelping size={30} />
                        </NavIcon>
                        <NavText>Serviços</NavText>
                        <NavItem eventKey="/servs">
                            <NavText>Lista de Serviços</NavText>
                        </NavItem>

                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/home" element={<Home />} />
                <Route path="/servs" element={<ServicesList/>} />
                <Route path="/client/" element={<ClientBase/>} />
                <Route path="/request" element={<TextControlsExample />} />
            </Routes>
        </>
    );

}
export default RenderLogged;