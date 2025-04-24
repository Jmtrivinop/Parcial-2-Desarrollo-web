import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
 
function ComponenteA(){

    const {modoOscuro} = useContext(ThemeContext);

    const estiloCaja = {
        padding: "10px",
        marginTop: "20px",
        backgroundColor: modoOscuro ? "#333" : "#eee",
        border: modoOscuro ? "1px solid #aaa": "1px solid #ccc"
    };
    return (
        <div style = {estiloCaja}>
            <h2>Soy el componente</h2>
            <p>El tema actual es: {modoOscuro ? "🌙" : "☀️"}</p>

        </div>
        

         
    )
}
export default ComponenteA;