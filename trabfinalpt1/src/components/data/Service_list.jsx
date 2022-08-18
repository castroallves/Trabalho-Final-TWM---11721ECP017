import React, {useState} from 'react';
import Root from './Root';
import { Routes, Route, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { service_data } from './database';

export let controle = 0;
export default function ServiceListMenu() {

    const[svc1, setSvc1] = useState('0');

    return (

        <div className='servicelist'>

            <Accordion>

                <Accordion.Item eventKey={service_data[0].id}>
                    <Accordion.Header>{service_data[0].icon}{service_data[0].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[0].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                        <Button onClick={()=>{controle = service_data[0].id}}>Solicitar</Button>
                  </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[1].id}>
                    <Accordion.Header>{service_data[1].icon}{service_data[1].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[1].desc}

                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[1].id}}>Solicitar</Button>
                    </Link>
                    </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey={service_data[2].id}>
                    <Accordion.Header>{service_data[2].icon}{service_data[2].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[2].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[2].id}}>Solicitar</Button>
                   </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[3].id}>
                    <Accordion.Header>{service_data[3].icon}{service_data[3].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[3].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[3].id}}>Solicitar</Button>
                   </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[4].id}>
                    <Accordion.Header>{service_data[4].icon}{service_data[4].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[4].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[4].id}}>Solicitar</Button>
                   </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[5].id}>
                    <Accordion.Header>{service_data[5].icon}{service_data[5].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[5].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[5].id}}>Solicitar</Button>
                   </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[6].id}>
                    <Accordion.Header>{service_data[6].icon}{service_data[6].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[6].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[6].id}}>Solicitar</Button>
                   </Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[7].id}>
                    <Accordion.Header>{service_data[7].icon}{service_data[7].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[7].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[7].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[8].id}>
                    <Accordion.Header>{service_data[8].icon}{service_data[8].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[8].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[8].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[9].id}>
                    <Accordion.Header>{service_data[9].icon}{service_data[9].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[9].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[9].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[10].id}>
                    <Accordion.Header>{service_data[10].icon}{service_data[10].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[10].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[10].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[11].id}>
                    <Accordion.Header>{service_data[11].icon}{service_data[11].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[11].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[11].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey={service_data[12].id}>
                    <Accordion.Header>{service_data[12].icon}{service_data[12].nome}</Accordion.Header>
                    <Accordion.Body>
                        {service_data[12].desc}
                    </Accordion.Body>
                    <Accordion.Body>
                    <Link to="/request">
                    <Button onClick={()=>{controle = service_data[12].id}}>Solicitar</Button>
                   </Link>
                   </Accordion.Body>
                </Accordion.Item>

            </Accordion>
      <Routes>

      <Route path="/" element={<Root/>} />
    
      </Routes>

        </div>
        
    );







}