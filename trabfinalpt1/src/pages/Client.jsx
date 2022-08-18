import React from 'react';
//import "./react-sidenav.css";
//import Cliente from "../components/data/Cliente.jsx";
import {user_data_client} from "../components/data/database.jsx";
import {ClientHistory} from "../components/panels/service_history.jsx";

export default function ClientBase() {

    return (
        <div className="page_default" >

<h1>Área do cliente </h1>
<h2><p></p>Seja bem vindo, {user_data_client[0].nome}</h2>
<h3><p></p>Suas ordens de serviço:</h3>
<ClientHistory/>
        </div>    );

}