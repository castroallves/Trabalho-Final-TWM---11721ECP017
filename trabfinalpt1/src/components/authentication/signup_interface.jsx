import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");

export const cpfMask = (value) => {
  console.log("Dentro do CPF");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const cepMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{5})(\d)/, "$1-$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(-\d{3})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

function SignupForm(props) {
  
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSbnm] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");  
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");  
  const URL = "http://localhost:3333/clientes";

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeSbnm= (event) => {
    setSbnm(event.target.value);
  };

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha= (event) => {
    setSenha(event.target.value);
  };

  async function onChangeCep(e) {
    setCep(cepMask(e.target.value));
    if (String(e.target.value).length === 9) {
      let cepPonto = e.target.value;
      let cepSemPonto = cepPonto.replace("-", "");
      let retorno = await axios.get(
        `https://viacep.com.br/ws/${cepSemPonto}/json`
      );
      console.log(retorno.data.logradouro);
      console.log(retorno);
      setRua(retorno.data.logradouro);
      setCidade(retorno.data.localidade);
    }
  }

  const onChangeCpf = (event) => {
    setCpf(cpfMask(event.target.value));
  };

  const onChangeRua = (event) => {
    setRua(event.target.value);
  };

  const onChangeCidade = (event) => {
    setCidade(event.target.value);
  };

  //   const load_clientes = () => {
  //     console.log("Botao funcionando!!!");
  //   };

  async function load_clientes() {
    let retorno = await axios.get(URL);
    console.log(retorno.data);
  }

  async function add_clientes() {
    //let retorno = await axios.get(URL);
    let cliente = { clienteNome: nome, clienteSbnm : sobrenome, clienteEmail: email, 
      clienteSenha: senha, clienteCPF: cpf, clienteCEP: cep, clienteRua: rua,
      clienteCidade: cidade};
    console.log(cliente);
    let retorno = await axios.post(URL, cliente);
    console.log(retorno);
    
  }

  async function select_clientes() {
    //let retorno = await axios.get(URL);
    let cliente = { clienteNome: nome, clienteEmail: email };
    console.log(cliente);
    let retorno = await axios.get("http://localhost:3333/clientes/"+id);
    console.log(retorno);
    setNome(retorno.data[0].nome);
    setCep(retorno.data[0].cep);
    setCidade(retorno.data[0].cidade);
    setEmail(retorno.data[0].email);
    setRua(retorno.data[0].endereco);                
  }


  async function update_clientes() {
    //let retorno = await axios.get(URL);
    let cliente = { clienteID: id, clienteNome: nome, clienteEmail: email };
    console.log(cliente);
    let retorno = await axios.put(URL, cliente);
    console.log(retorno);
  }


  return (
    <div className="page_default">
        <h2>Cadastro de Clientes</h2>
        <Form style={{ margin: "1px" }}>
          <Row>
            <Col sm={3}>
              <div className="txtNome">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  Nome
                </Form.Label>
                <Form.Control value={nome} onChange={onChangeNome} />
              </div>
            </Col>
            <Col sm={3}>
              <div className="txtNome">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  Sobrenome
                </Form.Label>
                <Form.Control value={sobrenome} onChange={onChangeSbnm} />
              </div>
            </Col>
            <Col sm={3}>
              <div className="txtCPF">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  CPF
                </Form.Label>
                <Form.Control value={cpf} onChange={onChangeCpf} />
              </div>
            </Col>
            <Col sm={4}>
              <div className="txtRua">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  Rua
                </Form.Label>
                <Form.Control value={rua} onChange={onChangeRua} />
              </div>
            </Col>
            <Col sm={3}>
              <div className="txtCidade">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  Cidade
                </Form.Label>
                <Form.Control value={cidade} onChange={onChangeCidade} />
              </div>
            </Col>
            <Col sm={3}>
              <div className="txtCep">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  CEP
                </Form.Label>
                <Form.Control value={cep} onChange={onChangeCep} />
              </div>
            </Col>
          </Row>
          <Row>
            
            
            <Col sm={3}>
              <div className="txtEmail">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                  E-mail
                </Form.Label>
                <Form.Control value={email} onChange={onChangeEmail} />
              </div>
            </Col>
            <Col sm={3}>
              <div className="txtSenha">
                <Form.Label className="text-left" style={{ width: "100%" }}>
                 Senha
                </Form.Label>
                <Form.Control type="password" value={senha} onChange={onChangeSenha} />
              </div>
            </Col>
          </Row>
          <Row>
           
          </Row>
        <br></br>
        <br></br>
   
          <Button variant="secondary" onClick={add_clientes}>
            Cadastrar
          </Button>{" "}
          <br></br>
          <br></br>


        </Form>
      </div>

  );
}

export default SignupForm;