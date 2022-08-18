import React from 'react';
import {
    FaCar, FaShip, FaMoneyBillAlt, FaHouseUser, FaCoins, FaUsers, FaFileSignature,
    FaSatellite, FaTram, FaGlobe, FaTractor, FaRegHospital}  from 'react-icons/fa';

export const roles = {
    cliente: 0,
    funcionario: 1,
    admin: 2,
} 

export let user_data_client = [
    {
        "id": 0,
        "nome": "Pedro",
        "sobrenome": "Alves",
        "email": "pedropaulocca@gmail.com",
        "senha": "1234",
        "atrib": "0"
    }
]

export var user_data_func = [
    {
        "id": 0,
        "nome": "joao",
        "sobrenome": "da silva",
        "email": "joaodasilva@gmail.com",
        "atrib": "1"
    }
]

export var service_call = [
    {
        "id": 0,
        "id_cliente": 0,
        "id_func": 0,
        "nome": "Pau na rede eletrica"
    }
]

export var service_data = [
        {
            "id": "0",
            "icon": <FaCar/>,
            "nome": "⠀Automóvel",
            "desc": "Contra roubos e acidentes de carros, de responsabilidade civil de cargas, do transportador e do operador"
        },

        {
            "id": "1",
            "icon": <FaShip/>,
            "nome": "⠀Cascos",
            "desc": "Contra riscos marítimos, aeronáuticos, de responsabilidade civil contra terceiros e DPVAT"
        }
        ,

        {
            "id": "2",
            "icon": <FaMoneyBillAlt/>,
            "nome": "⠀Crédito",
            "desc": "de crédito à exportação e contra riscos comerciais (falência, concordata etc.), de devedores (inadimplência de pessoas físicas ou jurídicas) e políticos (atos, fatos ou situações político-governamental, decorrentes de fenômenos sociais, econômico-financeiros, cambiais e naturais)"
        }
        ,

        {
            "id": "3",
            "icon": <FaHouseUser/>,
            "nome": "⠀Habitacional",
            "desc": "contra risco de morte e invalidez permanente e danos físicos ao imóvel financiado"
        }
        ,

        {
            "id": "4",
            "icon": <FaGlobe/>,
            "nome": "⠀Outros",
            "desc": "risco de seguros no exterior e de sucursais de seguradoras no exterior "
        }
        ,


        {
            "id": "5",
            "icon": <FaCoins/>,
            "nome": "⠀Patrimonial",
            "desc": "contra incêndios e roubos de imóveis, compreensivos residenciais e empresariais, lucros cessantes, riscos de engenharia, entre outros"
        }
        ,

        {
            "id": "6",
            "icon": <FaUsers/>,
            "nome": "⠀Pessoas",
            "desc": "de vida e acidentes pessoais, planos de previdência privada, prestamista e educacional, VGBL, entre outros"
        }
        ,

        {
            "id": "7",
            "icon": <FaFileSignature/>,
            "nome": "⠀Responsabilidades",
            "desc": "contra danos materiais ou lesões corporais a terceiros por culpa involuntária de segurado"
        }
        ,

        {
            "id": "8",
            "icon": <FaSatellite/>,
            "nome": "⠀Riscos Especiais",
            "desc": "contra riscos nas atividades petrolíferas, nucleares e lançamento e operação de satélites"
        }
        ,

        {
            "id": "9",
            "icon": <FaTram/>,
            "nome": "⠀Riscos Financeiros",
            "desc": "diversas garantias de contratos e de fiança locatícia"
        }
        ,

        {
            "id": "10",
            "icon": <FaTractor/>,
            "nome": "⠀Rural",
            "desc": "agrícola, pecuário, de florestas e penhor rural"
        }
        ,

        {
            "id": "11",
            "icon": <FaRegHospital/>,
            "nome": "⠀Saúde",
            "desc": "seguros de saúde"
        }
        ,

        {
            "id": "12",
            "icon": <FaTram/>,
            "nome": "⠀Transporte",
            "desc": "de transporte nacional e internacional, de responsabilidade civil de cargas, do transportador e do operador"
        }
        
]