import Styles from "./style.css" assert { type: 'css' };

const GlobalStyles = [ Styles ];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];


const MapUser = () =>{
    const container = document.createElement("div");
    container.classList.add("container__map");
    container.id = "mapa";
    
    const container2 = document.createElement("div");
    container2.classList.add("container__map2");
    

    container.append(container2);
    
    return container;
}

export default MapUser;