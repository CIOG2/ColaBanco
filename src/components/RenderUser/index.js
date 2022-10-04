import Styles from "./style.css" assert { type: 'css' };

const GlobalStyles = [ Styles ];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];


const RenderUser = () =>{

}

export default RenderUser;