`Crea un nuevo fichero JS que contenga las siguientes líneasE
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números 
de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función`


function fibonacci(n) {
    if (n < 2) return n
    else return fibonacci(n-1) + fibonacci(n-2)
}

function arrFib(num) {
    arr = []
    for (let i = 1; i <= num; i++) {
        arr[i-1] = fibonacci(i)
    }
    return arr
}

console.log(arrFib(10))