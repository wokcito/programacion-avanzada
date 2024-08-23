// 1
console.log('\n1.')

function suma(a, b) {
    return a + b
}

console.log(suma(1, 2))
console.log(suma(3, 2))
console.log(suma(10, 123))
console.log(suma(182381283, 1408182))

// 2
console.log('\n2.')

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(1, 2))
console.log(multiplicar(3, 2))
console.log(multiplicar(10, 123))
console.log(multiplicar(182381283, 1408182))

// 3
console.log('\n3.')

function saludar(nombre = 'invitado') {
    return `Hola ${nombre}`
}

console.log(saludar())
console.log(saludar('Maximiliano'))

// 4
console.log('\n4.')

function crearPersona(nombre, edad) {
    return { nombre, edad }
}

const persona = crearPersona('Maxi', 21)
console.log(persona)

// 5
console.log('\n5.')

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad
    return persona
}

console.log(actualizarEdad(persona, 77))

// 6
console.log('\n6.')

function factorial(numero) {
    if (numero === 0) return 1
    return numero * factorial(numero - 1)
}

console.log(factorial(5))

// 7
console.log('\n7.')

function despedir() {
    function adios() {
        return 'chau'
    }

    return adios()
}

console.log(despedir())

// 8
console.log('\n8.')

function procesarArray(array = [], funcion = () => {}) {
    array.forEach(elemento => funcion(elemento))
}

const numeros = [1, 2, 3, 4, 5]

function multiplicarPor2(numero) {
    console.log(numero * 2)
}

procesarArray(numeros, multiplicarPor2)

// 9
console.log('\n9.')

function crearMultiplicador(x) {
    return function(numero) {
        return numero * x
    }
}

console.log(crearMultiplicador(2)(10))

// 10
console.log('\n10.')

const sumarAnonima = function (a, b) {
    return a + b
}

console.log(sumarAnonima(1, 2))
