import React, { Component, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/getAdmin";

import FondoLog from "../assets/FondoLogin.jpg";




const LoginPage = () => {
    const [formValues, setFormValues] = useState({correo: '', password: ''})
    const {correo, password} = formValues;

    const navigate = useNavigate();

    const onChange = ({target}) =>{
        console.log(target.value);
        
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    const onSubmit = async(e) =>{
        e.preventDefault();
       
        const respuesta = await login(formValues);
        if(respuesta.msg){
            navigate('/')
        }
    }
    return ( 
    <div>
        <div className="carrusel container-fluid">
            <div id="carouselExampleFade" className="carousel slide mt-5 w-75" data-interval="5000" data-ride="carousel">
                <div className="carousel-inner">

                    <div className="carrusel carousel-item active">
                    <img src={FondoLog} className="wallpaper d-block w-100" alt="." id="imagen"/>
                </div>

                </div>
            </div>
        </div>
        
        <div className="login-form card" id="LoginCardBox">
            
            <svg className="bd-placeholder-img" id="HeadLoginCard">
                <rect width="100%" height="100%" fill="#1e40ae"></rect>
                <text x="14%" y="65%" fill="#dee2e6" id="HeadLoginInfo">Inicio Clientes</text>
            </svg>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label"></label>
                        <input type="text" className="form-control" onChange={onChange} value={correo} name="correo" placeholder="Correo Electronico"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"></label>
                        <input type="password" className="form-control" onChange={onChange} value={password} name="password" placeholder="Clave"></input>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <a href="#">
                            <button type="submit" className="Gen0 btn btn-primary">Ingresar</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

     );    
}
 
export default LoginPage;
