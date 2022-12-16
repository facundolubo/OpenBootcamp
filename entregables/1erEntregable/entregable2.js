/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */
const nombre = "Facundo Lubo";
const edad = 32
const desarrollador = true
const nacimiento = new Date(1990, 2, 25)
const libro = {
    titulo: "La insoportable levedad del ser",
    autor: "Milan Kundera",
    fecha: new Date(1972, 0, 1),
    url: 'https://www.worldcat.org/title/1003726928'
}
const lista = [nombre, edad, desarrollador, nacimiento, libro]
console.log(lista)