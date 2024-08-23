// 1
console.log('\n1.')

const libro = {
    titulo: 'Título',
    autor: 'Autor',
    anioDePublicacion: 2024,
    descripcion: function() {
        return `
            Título: ${this.titulo}
            Autor: ${this.autor}
        `
    }
}

console.log(libro)

// 2
console.log('\n2.')

const estudiante = {
    nombre: 'Alquien',
    edad: 777,
    direccion: {
        calle: 'Una calle',
        ciudad: 'Una ciudad',
        pais: 'Un país'
    }
}

console.log(estudiante)

// 3
console.log('\n3.')

console.log(libro.descripcion())

// 4
const producto = {
    nombre: 'Producto',
    precio: 1571234,
    disponible: true
}

console.log('\n4.')

for (const key in producto) {
    console.log(key, producto[key])
}

// 5
console.log('\n5.')

producto.precio = 999999
console.log(producto)

// 6
console.log('\n6.')

function tienePropiedad(object, key) {
    return key in object
}

console.log(tienePropiedad(producto, 'precio'))
console.log(tienePropiedad(producto, 'cantidad'))

// 7
console.log('\n7.')

console.log(producto)
delete producto.disponible
console.log(producto)

// 8
console.log('\n8.')

const persona1 = { nombre: 'Persona1', algo1: 'algo1' }
const persona2 = { nombre: 'Persona2', algo2: 'algo2' }

console.log(Object.assign(persona1, persona2))

// 9
console.log('\n9.')

const objeto = { algo: 'algo' }
const copia = JSON.parse(JSON.stringify(objeto))

objeto.algo = 'otra cosa'

console.log('Original:', objeto)
console.log('Copia:', copia)

// 10
console.log('\n10.')

libro.getAnioDePublicacion = function() {
    return this.anioDePublicacion
}

libro.setAnioDePublicacion = function(anio) {
    this.anioDePublicacion = anio
}

console.log('original:', libro.anioDePublicacion)

libro.setAnioDePublicacion(1234)
console.log('nuevo:', libro.getAnioDePublicacion())
