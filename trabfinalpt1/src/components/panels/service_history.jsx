import React from 'react';
import { Button } from 'react-bootstrap';
import Root from '../data/Root.jsx';
import ReqForm from './service_request.jsx';
 import { Routes, Route, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';


 function ClientHistory() {
    return (
<div id ="panelscard">
  
      <Table striped bordered hover size = "sm">
        
        <thead size = "sm">
          <tr size = "sm">
            <th>Ordem nº</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Técnico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Automóvel</td>
            <td>20/08/2019</td>
            <td>João</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Habitacional</td>
            <td>01/05/2014</td>
            <td>José</td>
          </tr>
        </tbody>
      </Table>


        <Link to="/request">
        <Button>
        Nova Ordem de Serviço</Button>
</Link>
      <Routes>

      <Route path="/" element={<Root/>} />
      <Route path="/request" element={<ReqForm />} />
    
      </Routes>

      </div>
    );
  }

 function EmpHistory() {
    return (
<div id ="panelscard">
  
      <Table striped bordered hover size = "sm">
        
        <thead size = "sm">
          <tr size = "sm">
            <th>Ordem nº</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Automóvel</td>
            <td>20/08/2019</td>
            <td>Mairon</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Habitacional</td>
            <td>01/05/2014</td>
            <td>Pedro</td>
          </tr>
        </tbody>
      </Table>


        <Link to="/request">
        <Button>
        Nova Ordem de Serviço</Button>
</Link>
      <Routes>

      <Route path="/" element={<Root/>} />
      <Route path="/request" element={<ReqForm/>} />
    
      </Routes>

      </div>
    );
  }
  
   export {ClientHistory, EmpHistory};

