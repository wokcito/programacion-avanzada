// 1
console.log('\n1.')

const frutas = ['manzana', 'banana', 'pera']

frutas.push('ananá')
console.log(frutas)
frutas.pop()
console.log(frutas)

// 2
console.log('\n2.')

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz[1][1])

// 3
console.log('\n3.')

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// 4
console.log('\n4.')

function elevarAlCuadrado(array) {
    return array.map(numero => numero ** 2)
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(elevarAlCuadrado(numeros))

// 5
console.log('\n5.')

function filtrarMayoresDe(array, valor) {
    return array.filter(numero => numero > valor)
}

console.log(filtrarMayoresDe(numeros, 4))

// 6
console.log('\n6.')

function sumarElementos(array) {
    return array.reduce((total, numero) => total + numero)
}

console.log(sumarElementos(numeros))

// 7
console.log('\n7.')

console.log(numeros.some(numero => numero > 10))

// 8
console.log('\n8.')

console.log(numeros.every(numero => numero >= 0))

// 9
console.log('\n9.')

const personas = [
    { nombre: 'nombre', edad: 10 },
    { nombre: 'nombre', edad: 123 },
    { nombre: 'nombre', edad: 23 },
    { nombre: 'nombre', edad: 14 },
    { nombre: 'nombre', edad: 100 },
    { nombre: 'nombre', edad: 1 }
]

console.log(personas.find(({ edad }) => edad >= 30))

// 10
console.log('\n10.')

const palabras = [
    'alfajor',
    'taza',
    'monitor',
    'mouse',
    'joystick',
    'pendrive'
]

console.log(palabras.sort())
