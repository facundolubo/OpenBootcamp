`Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)`

fechaDeHoy = new Date()
console.log(fechaDeHoy.toLocaleDateString())
fechaNacimiento = new Date(1990,01,25)
console.log(fechaNacimiento.toLocaleDateString())
masTarde = fechaDeHoy.getMilliseconds() > fechaNacimiento.getMilliseconds()
console.log(masTarde)
diaNacimiento = fechaNacimiento.getDate()
mesNacimiento = fechaNacimiento.getMonth() + 1
anioNacimiento = fechaNacimiento.getFullYear()
console.log(diaNacimiento, mesNacimiento, anioNacimiento)
