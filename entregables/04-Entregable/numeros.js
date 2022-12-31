`Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1"
es igual al máximo valor que se puede obtener en Javascript`

let alturaCm = 172
let alturaMt = 1.72
let peso = 86.67
let alturaRound = Math.round(alturaMt)
console.log(alturaRound)
let pesoRound = Math.floor(peso)
console.log(pesoRound)
let mayorMax = (Number.MAX_VALUE + 1) > Number.MAX_VALUE
console.log(mayorMax)