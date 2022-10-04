import LocalStorage from "./localStorage.js";
import randomNumber from "./randomNumber.js";

function crearUsuario(idGen) {
    const data = LocalStorage().get("Data");
    const entrada = randomNumber(data.entrada[0], data.entrada[1]);
    const salida = randomNumber(data.salida[0], data.salida[1]); 
    
    
    
    setTimeout(() => {
        if (data.cola.length < 10) {
            let id = idGen.next().value;
            data.cola.push(id);
            console.log(data.cola);
            LocalStorage().set('Data', data)
        }
        crearUsuario(idGen);            
    }, entrada * 1000);
    
    setTimeout(() => {
        data.cola.splice(0,1);
        LocalStorage().set('Data', data)
    }, salida * 1000);
}

export default crearUsuario;