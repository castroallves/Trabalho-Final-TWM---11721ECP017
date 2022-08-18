import React, {useState, useEffect} from 'react';
//import "./react-sidenav.css";
//import Cliente from "../components/data/Cliente.jsx";
import ServiceListMenu from '../components/data/Service_list.jsx';


export default function ServicesList() {

    return (<div className='page_default'>
        <h1>Oferecemos todos os tipos de serviço de seguro, confira!:</h1>
        <ServiceListMenu />

    </div>
    );

}