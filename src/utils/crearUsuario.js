import RenderUser from "../components/RenderUser/index.js";
import LocalStorage from "./localStorage.js";
import randomNumber from "./randomNumber.js";

function crearUsuario(idGen) {
    const data = LocalStorage().get("Data");
    const entrada = randomNumber(data.entrada[0], data.entrada[1]);
    const salida = randomNumber(data.salida[0], data.salida[1]); 
    const TimeOut = data.tiempoSalida + salida;

    
    setTimeout(() => {
        if (data.cola.length < 10) {
            const data2 = LocalStorage().get("Data");
            let id = idGen.next().value;
            data2.cola.push(id);
            data2.tiempoSalida = TimeOut - 2;
            LocalStorage().set('Data', data2)
            RenderUser(id, data2.cola.findIndex((e) => e == id))
        }
        crearUsuario(idGen);            
    }, entrada * 1000);
    

    setTimeout(() => {
        const data2 = LocalStorage().get("Data");
        
        if (data2.cola[0]) {
            const user = document.getElementById(data2.cola[0])
            user.remove();
        }
        
        data2.cola.splice(0,1);
        for (let i = 0; i < data2.cola.length; i++) {
            const usuario = document.getElementsByClassName("user")[i];
            const tamano = usuario.style.top.length;
            let num = usuario.style.top;
            num = Number(num.split("").splice(0 ,tamano-2).join("")) - 70;
            usuario.style.top = num + "px";
        }
        LocalStorage().set('Data', data2)
    }, TimeOut * 1000);
}

export default crearUsuario;