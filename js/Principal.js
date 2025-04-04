import CL_Deportista from "./CL_Deportista.js";

export default class CL_Principal {
    constructor() {

        let depor1 = new CL_Deportista("Juan", 132, 8, 1, 21),
            depor2 = new CL_Deportista("Felix", 110, 10, 2, 20);

        let salida = document.getElementById("salida");
        salida.innerHTML += `
                <br>Nombre: ${depor1.nombre}
                <br>Acumulado de Notas: ${depor1.notas}
                <br>Materias: ${depor1.cantMaterias}
                <br>Edad: ${depor1.edad}
                <br>Promedio: ${depor1.promedio()}
                <br>Deporte 1=BEISBOL 2=FUTBOL: ${depor1.deporte}
                <br>${depor1.nombre} es admitido en ${depor1.admision()}
                <br>
                <br>Nombre: ${depor2.nombre}
                <br>Acumulado de Notas: ${depor2.notas}
                <br>Materias: ${depor2.cantMaterias}
                <br>Edad: ${depor2.edad}
                <br>Promedio: ${depor2.promedio()}
               <br>Deporte 1=BEISBOL 2=FUTBOL: ${depor2.deporte}
                <br>${depor2.nombre} es admitido en ${depor2.admision()}
            `
    }
}