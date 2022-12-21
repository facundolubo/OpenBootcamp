`Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado)
- Modifica el Set original añadiendo el nombre "Javascript"`

setFamilia = new Set(['Facundo','Tamara','Lucrecia'])
console.log(setFamilia)
duplicado = setFamilia.add('Facundo')
console.log(setFamilia)
withJs = setFamilia.add('Javascript')
console.log(setFamilia)