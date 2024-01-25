import React from "react";
import CarWidget from "../CarWidget/CarWidget";

const NavBar = () => {

    return (

        <div>
            <img src="./public/sneakers.png" alt="Logo Sneakers" />
            
            <ul>
                <li>
                    <a>Hombre</a>
                </li>

                <li>
                    <a>Mujer</a>
                </li>

                <li>
                    <a>Nueva Colección</a>
                </li>

            </ul>

            <CarWidget/>
            
        </div>

    );
    
};

export default NavBar;