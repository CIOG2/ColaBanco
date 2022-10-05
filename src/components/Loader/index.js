import MapUser from "../MapUser/index.js";
import generatorID from "../../utils/generatorID.js";
import crearUsuario from "../../utils/crearUsuario.js";
import Styles from "./styles.css" assert { type: 'css' };

const GlobalStyles = [ Styles ];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];


const Loader = () =>{
    const app = document.getElementById("app");
    const appChildNode = app.childNodes[0];
    appChildNode.style.opacity = "0";
    
    const container = document.createElement("div");
    container.classList.add("loader");
    
    setTimeout(() => {
        appChildNode.remove();
        app.append(container);    
        container.style.opacity = "1";
    }, 300);
    setTimeout(() => {
        container.style.opacity = "0";
        
        setTimeout(() => {
            app.childNodes[0].remove();
            const idGen = generatorID();
            app.append(MapUser());
            setTimeout(() => {
                app.childNodes[0].style.opacity = "1"
                crearUsuario(idGen);
            }, 300);
        }, 300);
    }, 3000);
}

export default Loader;