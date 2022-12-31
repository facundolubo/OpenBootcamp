`Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)`

//a)
listaCompra = ['levadura','manteca','azucar','harina','cacao']
//b)
listaCompra.push('Aceite de Girasol')
//c) Utilizo pop porque antes utilicé push para agregar el elemento. De todas maneras, aunque no sea lo más eficiente
//, creo que lo mejor para respetar la consigna podría ser utilizar filter, dado que no se nos pide retornar ningún valor
listaCompra.pop()
//d) 
class Pelicula {
    titulo;
    director;
    fecha;

    constructor (titulo, director, fecha) {
        this.titulo = titulo 
        this.director = director
        this.fecha = fecha
    }
}



listaPeliculas = [new Pelicula('Mulan','Spielberg', new Date(1999,0,0)),
new Pelicula('Pinocho','Polanski', new Date(1970,0,0)),
new Pelicula('Shrek', 'Coppola', new Date(2002,0,0))
]

//e)

peliculasPost2010 = listaPeliculas.filter(obj => obj.fecha > new Date(2010,0,0))

//f)

directores = listaPeliculas.map(obj => obj.director)

//g)

titulos = listaPeliculas.map(obj => obj.titulo)

// h)

titulosYDirectoresConcat = listaPeliculas.map(obj => obj.titulo.concat(' - ', obj.director))

//i)

titulosYDirectoresPropag = [...titulos, ...directores ]
