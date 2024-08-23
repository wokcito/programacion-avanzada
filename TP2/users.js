(async () => {
    async function obtenerUsuarios() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        return users
    }

    // 1
    console.log('\n1.')

    const users = await obtenerUsuarios()
    console.log(users)

    // 2
    console.log('\n2.')

    function imprimirNombresDeUsuarios(users = []) {
        users.forEach(({ name }) => console.log(name))
    }

    imprimirNombresDeUsuarios(users)

    // 3
    console.log('\n3.')

    const predefinido = { user: 'maxi', password: 'password1234' }
    const mal = { user: 'algoquenadaquever', password: 'contraseña' }

    function autenticarUsuario({ user, password }) {
        return user === predefinido.user && password === predefinido.password
    }

    console.log(autenticarUsuario(predefinido))
    console.log(autenticarUsuario(mal))

    // 4
    console.log('\n4.')

    function mapearUsuarios(users = []) {
        return users.map(({ name, email }) => { return { name, email } })
    }

    console.log(mapearUsuarios(users))

    // 5
    console.log('\n5.')

    function validarFormulario({
        nombre,
        email,
        password
    }) {
        return nombre.length !== 0 && email.length !== 0 && password.length !== 0
    }

    console.log({ nombre: 'nombre', email: 'email', password: 'password' })
    console.log({ nombre: 'nombre', email: 'email' })

    // 6
    console.log('\n6.')

    const datos = [
        [1, 2, 3, 4, 5],
        ['martes', 'lunes', 'sábado', 'domingo', 'viernes'],
        ['a', 'b', 'a', 'c', 'z'],
        ['"', '¿', '?', '!', '¡'],
    ]

    function obtenerPagina(array, pagina) {
        if (pagina - 1 > array.length || pagina < 1) throw new Error('La página está mal')
        return array[pagina - 1]
    }

    console.log(obtenerPagina(datos, 1))

    // 7
    console.log('\n7.')

    async function enviarDatos(data) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            data
        })

        console.log(await response.json())
    }

    await enviarDatos({ algo: 'algo' })

    // 8
    console.log('\n8.')

    function buscarUsuarioPorEmail(users = [], email) {
        const user = users.find(user => user.email === email)
        if (user === undefined) throw new Error('usuario no encontrado')

        return user
    }

    console.log(buscarUsuarioPorEmail(users, users[8].email))

    // 9
    console.log('\n9.')

    function generarToken(user) {
        return btoa(JSON.stringify(user))
    }

    console.log(generarToken(users[1]))

    // 10
    console.log('\n10.')

    function actualizarUsuario(user, cambios = []) {
        cambios.forEach(({ campo, valor }) => {
            user[campo] = valor
        })

        return user
    }

    const cambios = [
        { campo: 'email', valor: 'asdf@asdf.com' },
        { campo: 'name', valor: 'unnombregracioso' }
    ]

    console.log(actualizarUsuario(users[7], cambios))
})()
