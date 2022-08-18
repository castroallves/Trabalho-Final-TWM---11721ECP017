import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, {useState} from 'react';
import {Row, Button, Col} from 'react-bootstrap'
import "../css/interfaces.css";
import { service_data } from '../data/database';
import { controle } from '../data/Service_list';
const axios = require("axios");

function ReqForm() {

  const [id, setId] = useState("");
  const [id_cliente, setIdCliente] = useState("");
  const [id_funcionario, setIdFunc] = useState("");
  const [tipo, setTipo] = useState("");
  const [desc, setDesc] = useState("");
  const [datalocal, setData] = useState("")
  const URL = "http://localhost:3333/ordens";

  async function send_request() {
    //let retorno = await axios.get(URL);
    let api_data = await axios.get(
      `http://worldtimeapi.org/api/timezone/America/Sao_Paulo`
    );
    setData(api_data.data.utc_datetime)
    let request = { id_cliente: id_cliente, id_funcionario: id_funcionario, tipo: tipo,
    desc: desc, data : datalocal };
    console.log(request);
    let requestback = await axios.post(URL, request);
    console.log(requestback);
  }


  const onChangeTipo = (event) => {
    setTipo(event.target.value);
  };
  const onChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    
    <div className = 'form' >
    <Row sm = {12}>
      
      <Col sm = {6}>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Tipo de Serviço"
          onChange={onChangeTipo}
        >
          <Form.Select controlId="dd1" aria-label="Floating label select example" >
    
          <option value={service_data[controle].id}>{service_data[controle].nome}</option>
            <option value={service_data[1].id}>{service_data[1].nome}</option>
            <option value={service_data[2].id}>{service_data[2].nome}</option>
            <option value={service_data[3].id}>{service_data[3].nome}</option>
            <option value={service_data[4].id}>{service_data[4].nome}</option>
            <option value={service_data[5].id}>{service_data[5].nome}</option>
            <option value={service_data[6].id}>{service_data[6].nome}</option>
            <option value={service_data[7].id}>{service_data[7].nome}</option>
            <option value={service_data[8].id}>{service_data[8].nome}</option>
            <option value={service_data[9].id}>{service_data[9].nome}</option>
            <option value={service_data[10].id}>{service_data[10].nome}</option>
            <option value={service_data[11].id}>{service_data[11].nome}</option>
            <option value={service_data[12].id}>{service_data[12].nome}</option>
    

          </Form.Select>
        </FloatingLabel>
<p></p>
        
      </Col>

      <Col sm = {4}>
        
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Anexar documento</Form.Label>
        <Form.Control type="file" />
      </Form.Group>


      </Col>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Descrição</Form.Label>
         <Form.Control as="textarea" rows={3} onChange={onChangeDesc} />
       </Form.Group>

    </Row>

    <Button onClick={() =>{send_request(); alert("Solicitação Enviada!");}}>Enviar</Button>

    </div>

  );
}

export default ReqForm;