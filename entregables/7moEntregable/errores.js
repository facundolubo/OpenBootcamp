
const miFuncion = val => {
    if (typeof val === "string") {
        return val + 'Este fue el string ingresado'
    }
    throw new Error("El valor debe ser de tipo string")
}

const numero = 8;

try {
    const doble = miFuncion(numero)
    console.log(doble)
} catch (err) {
    console.error("ERROR!")
}