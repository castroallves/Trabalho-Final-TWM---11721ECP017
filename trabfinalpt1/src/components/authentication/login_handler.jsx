import React, {useState} from 'react';
//import "./react-sidenav.css";
//import Cliente from "../components/data/Cliente.jsx";
//import Root from "../components/data/Root.jsx";
//import Form from 'react-bootstrap/Form';
//import Card from 'react-bootstrap/Card';
import {user_data_client, user_data_func, roles} from "../data/database.jsx";
import EmployeeBase from '../../pages/Employee.jsx';
import ClientBase from '../../pages/Client.jsx';
const off = 0, on = 1;

var login_status = 
//on;
off;


var login_data = [
    {   email: "",
        senha: ""
    }]


//var [email_login, setEmailLogin] = useState('');
//var [psswd_login, setPsswdLogin] = useState('');

// export var email_login ="pedropaulocca";
// export var psswd_login ="123";

// function update_email(e) {

//     return(setEmailLogin(e));
// }

// function update_psswd(e) {

//     return(setPsswdLogin(e));
// }

function get_Login_Status() {

    const [numb, setNumb] = useState(0);
    if(login_status == on){

        return (on);

    }else if(login_status == off){

        return (off);
    }
}

function toggle_Login_Status() {

    if(login_status == on){

        login_status = off;

    }else if(login_status == off){

        login_status = on;
    }
}

function parse_Login(email,psswd) {

    if(user_data_client[0].email === email){

        if(user_data_client[0].senha === psswd){

            return(

               <ClientBase />
            );

        }
    }
}

function Beta_Login(e){

    if(e === "user@mail.com") {
        toggle_Login_Status();
        return(
            <ClientBase>   </ClientBase>);}
   else if (e === "func")  {

    return(
        <EmployeeBase></EmployeeBase>);
    } 

}


function Try_Login(email,psswd,role) {

    if(role === roles.cliente){

     if(email === user_data_client[0].email){

        if(psswd === user_data_client[0].senha){
            
        return(

            <ClientBase/>
        );
    }
}}
    else if(role === roles.funcionario){

        if(email === user_data_func[0].email){

            if(psswd === user_data_func[0].senha){
                
            return(
    
                <EmployeeBase/>
            );
            }}}}

export {Try_Login, toggle_Login_Status, get_Login_Status, parse_Login, Beta_Login,off, on, login_status,login_data
    //email_login, psswd_login, update_email, update_psswd
} ;



