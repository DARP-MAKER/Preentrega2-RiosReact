import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <div>

            <Link to= {"/"}>
            <img src="./public/sneakers.png" alt="Logo Sneakers" />
            </Link>
            
            <ul>

                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>

                <li>
                    <Link to={"/category/hombre"}>Hombre</Link>
                </li>

                <li>
                    <Link to={"/category/mujer"}>Mujer</Link>
                </li>

                <li>
                    <Link to={"/category/new"}>Novedades</Link>
                </li>

            </ul>

            <CarWidget/>
            
        </div>



/* NavLink*/

    );
    
};

export default NavBar;