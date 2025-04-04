import CL_Estudiante from "./CL_Estudiante.js";

export default class Cl_Deportista extends CL_Estudiante {
    constructor(nombre, notas, cantMaterias, deporte, edad) {
        super(nombre, notas, cantMaterias);
        this.deporte = deporte;
        this.edad = edad;
    }

    admision() {
        if ((this.deporte == 1) && (this.promedio() >= 14) && (this.edad >= 21)) {
            return "Admitido al equipo de Beisbol";
        }
        else if ((this.deporte == 2) && (this.promedio() >= 12) && (this.edad >= 19)) {
            return "Admitido al equipo de Futbol";
        }
        else {
            return "No fue admitido en ningun deporte";
        }
    }
}