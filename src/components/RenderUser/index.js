import Styles from "./styles.css" assert { type: 'css' };

const GlobalStyles = [ Styles ];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];


const RenderUser = (id, pos) =>{
    const mapa = document.getElementById("mapa");

    const User = document.createElement("div");
    User.classList.add("user");
    User.id = id;
    User.textContent = "#" + id;
    setTimeout(() => {
        const calculo = 90 + (pos* 72)
        User.style.top = calculo + "px";
    }, 1);


    mapa.append(User)
}

export default RenderUser;