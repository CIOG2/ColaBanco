import LocalStorage from "../../utils/localStorage.js"
import Loader from "../Loader/index.js";
import Styles from "./styles.css" assert { type: 'css' };

const GlobalStyles = [ Styles ];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];


const validaciones = (I1, I2, I3, I4) => {

    const N1 = Number(I1.value)
    const N2 = Number(I2.value)
    const N3 = Number(I3.value)
    const N4 = Number(I4.value)
        
    if (N2 > N1 || N4 > N3) {
        swal("Error", "Un numero menor no puede ser mayor", "error");   
        return false;
    }

    const obj = {
        entrada: [N1, N2],
        salida: [N3, N4],
        cola: [],
        tiempoSalida: 0,
    }

    LocalStorage().set('Data', obj)
    Loader();
}

const Formulario = () =>{

    const formContainer = document.createElement("form");
    formContainer.classList.add("form");
    

    const container1 = document.createElement("div");
    container1.classList.add("form__container");

    const label1 = document.createElement("label")
    label1.classList.add("form__container--label");
    label1.textContent = "Tiempos para la entrada de usuarios"
    
    const inputContainer1 = document.createElement("div");
    inputContainer1.classList.add("form__container2");
    
    const input1 = document.createElement("input");
    input1.classList.add("form__container--input");
    input1.id = "input1";
    input1.type = "number";
    input1.placeholder = "Maximo";
    input1.value = "3";
    
    const input2 = document.createElement("input");
    input2.classList.add("form__container--input");
    input2.id = "input2";
    input2.type = "number";
    input2.placeholder = "Minimo";
    input2.value = "1";
    
    
    
    
    const container2 = document.createElement("div");
    container2.classList.add("form__container");
    
    const label2 = document.createElement("label")
    label2.classList.add("form__container--label");
    label2.textContent = "Tiempos para la salida de usuarios"
    
    const inputContainer2 = document.createElement("div");
    inputContainer2.classList.add("form__container2");
    
    const input3 = document.createElement("input");
    input3.classList.add("form__container--input");
    input3.id = "input3";
    input3.type = "number";
    input3.placeholder = "Maximo";
    input3.value = "5";
    
    const input4 = document.createElement("input");
    input4.classList.add("form__container--input");
    input4.id = "input4";
    input4.type = "number";
    input4.placeholder = "Minimo";
    input4.value = "5";
    
    const button = document.createElement("button");
    button.classList.add("btn__simulacro");
    button.type = "button"
    button.textContent = "Correr simulacro";
    button.addEventListener("click", ()=>{ 
        if(input1.value && input2.value && input3.value && input4.value){
            validaciones(input1, input2, input3, input4)
        }else{
            swal("Error", "Todos los campos son necesarios", "error");
        }
    });


    inputContainer1.append(input1, input2);
    inputContainer2.append(input3, input4);
    container1.append(label1, inputContainer1)
    container2.append(label2, inputContainer2)

    formContainer.append(container1, container2, button)

    return formContainer;
}

export default Formulario;