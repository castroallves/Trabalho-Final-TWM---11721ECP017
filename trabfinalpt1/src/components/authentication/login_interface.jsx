import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
//import "./react-sidenav.css";
//import Cliente from "../components/data/Cliente.jsx";
import Root from '../data/Root';
import Signup from '../../pages/Signup';
import Form from 'react-bootstrap/Form';
//import {email_login, psswd_login, update_email, update_psswd} from "./login_handler.jsx";
import { toggle_Login_Status, login_status} from './login_handler';
import Clientbase from '../../pages/Client';

export default function LoginForm() {

  var [email_login, setEmailLogin] = useState('');

  return (
    <div className="TitlePP" style={({ marginTop: "50px" }, { marginLeft: "200px" }
    )}>

      <div className="TitlePP1" size={({ marginTop: "100px" }, { marginLeft: "200x" },
        { width: "10%" })}>
        <p></p>
        <h2>Faça Login para acessar os serviços:</h2>
        <div style={{ width: '250px' }}>
          <Form>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control size="sm" type="email" value={email_login} onChange=
              {(e) => setEmailLogin(e.target.value)} placeholder={""} />
              <Form.Label>Senha</Form.Label>
              <Form.Control size="sm" type="password" />
              <Form.Text className="text-muted">
                <p></p>
                <button
                onClick={()=>{toggle_Login_Status()}}>
                  Entrar
                </button>
                Não compartilharemos seu e-mail com ninguém.


              </Form.Text>

        <Link to="/client">
        <button onClick={useEffect(()=>{toggle_Login_Status()})}>
        Página do Cliente</button>
        </Link>
            </Form.Group></Form>
        </div></div>

      <p></p>
      {/* <NavItem eventKey="/cliente">
        
          <NavText>Não sou cadastrado.</NavText>
        </NavItem>   */}
      <Link to="/cadastro">
        Não sou cadastrado
      </Link>

      <Routes>

      <Route path="/" element={<Root />} />
      <Route path="/cadastro" element={<Signup/>} />
    
      </Routes>

    </div>);
}