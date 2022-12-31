class Estudiante {
    _nombre;
    _listaAsignaturas;

    constructor(nombre, listaAsignaturas) {
        this.nombre = nombre
        this.listaAsignaturas = listaAsignaturas
    }

    _obtenerDatos() {
    return 'Alumno: ' + this.nombre + '\nAsignaturas ' + this.listaAsignaturas.toString()
    }
}

let asignaturas = ['JavaScript', ' HTML', ' CSS']

let alumnoEjemplo = new Estudiante('Facundo', asignaturas)

console.log(alumnoEjemplo._obtenerDatos())