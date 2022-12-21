`Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor`

class MisDatos {
    nombre;
    apellido;
    edad;
    altura;
    eresDesarrollador;
    constructor (nombre, apellido, edad, altura, eresDesarrollador) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        this.eresDesarrollador = eresDesarrollador
    }
    getEdad() {
        return this.edad
    }
}

yo = new MisDatos('Facundo','Lubo',32, 1.72 , true)
miEdad = yo.getEdad()
console.log('Mis datos: ', yo, miEdad)
pablo = new MisDatos('Pablo','Pulido', 33, 1.78, false)
juani = new MisDatos('Juan Ignacio','Elgart', 31, 1.73, false)
yoMasAmigos = [yo, pablo, juani]
console.log('Lista con mis amigos: ', ...yoMasAmigos)
listaOrd = yoMasAmigos.sort((a,b) => a.getEdad() - b.getEdad())
console.log('Lista ordenada: ', listaOrd)