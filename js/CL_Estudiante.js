export default class CL_Estudiante{
constructor(nombre, notas, cantMaterias) {
    this.nombre = nombre;
    this.notas = notas;
    this.cantMaterias = cantMaterias;
}
promedio() {
    return (this.notas / this.cantMaterias) ;
}}