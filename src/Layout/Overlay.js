import React from "react";
import { Link, Outlet ,NavLink } from "react-router-dom";
import image from "../assets/logo192.png";



const NavOverLay = () => {
    return  (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a>
                            <img src={image} id="IcoNav"></img>
                        </a>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-terminal fa-w-20"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item">Panel Principal</a>
                            <NavLink to='/UserControl' className={'dropdown-item'}>User Control</NavLink>
                            <NavLink to='/inicio' className={'dropdown-item'}>BlankExample</NavLink>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item">Cerrar Sesion</a>                            
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export const LogOverLay = () => {
    return  (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a>
                            <img src={image} id="IcoNav"></img>
                        </a>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}



export default NavOverLay;


