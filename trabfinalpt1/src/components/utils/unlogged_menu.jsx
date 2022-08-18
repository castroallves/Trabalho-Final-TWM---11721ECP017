import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { toggle_Login_Status } from "../authentication/login_handler.jsx";
import "/home/pedro/TWM/React/Trabalho Final pt.1/trabfinalpt1/src/components/css/react-sidenav.css";
import { FaHome, FaHandsHelping, FaArrowAltCircleRight } from 'react-icons/fa';
import { Routes, Route, useNavigate } from "react-router-dom";
//import Cliente from "../data/Cliente.jsx";
import LoginForm from "../authentication/login_interface.jsx";
import Home from "../../pages/Home.jsx";
import Signup from "../../pages/Signup.jsx";
import "../css/interfaces.css";
//import "font-awesome/css/font-awesome.css";
import ServicesList from "../../pages/Services.jsx";
import EmployeeBase from "../../pages/Employee.jsx";
import ClientBase from "../../pages/Client.jsx";

// import "../css/style.css";

export default function RenderUnlogged() {
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

                    {/* BOTÃO AUTENTICAÇÃO */}

                    <NavItem eventKey="auth">
                        <NavText>Autenticação</NavText>
                        <NavIcon >
                            <FaArrowAltCircleRight size={30} />
                        </NavIcon>

                        {/* BOTÃO AUTENTICAÇÃO */}
                        <NavItem eventKey="/login">
                            <NavText>Login</NavText>
                        </NavItem>
                        <NavItem eventKey="/cliente">
                            <NavText onClick={toggle_Login_Status()}>Pagina Cliente</NavText>
                        </NavItem>
                        <NavItem eventKey="/func">
                            <NavText onClick={toggle_Login_Status()}>Pagina Funcionário</NavText>
                        </NavItem>
                        <NavItem eventKey="/cadastro">
                            <NavText>Cadastro</NavText>
                        </NavItem>
                    </NavItem>

                    {/* BOTÃO AUTENTICAÇÃO */}


                    {/* BOTÃO SERVIÇOS */}
                    <NavItem eventKey="prod">

                        <NavIcon >
                            <FaHandsHelping size={30} />
                        </NavIcon>
                        <NavText>Serviços</NavText>
                        <NavItem eventKey="/servs">
                            <NavText>Lista de Serviços</NavText>
                        </NavItem>

                    </NavItem>

                    {/* BOTÃO SERVIÇOS */}

                </SideNav.Nav>
            </SideNav>
            <Routes>
                {/* <Route path="/" element={<Root />} /> */}
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/cliente" element={<ClientBase />} />
                <Route path="/cadastro" element={<Signup/>} />
                <Route path="/func" element={<EmployeeBase />} />
                <Route path="/servs" element={<ServicesList />} />
            </Routes>
        </>
    );

}
