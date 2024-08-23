(async () => {
    const API_KEY = ''

    if (
        typeof API_KEY !== 'string' ||
        API_KEY.length === 0
    ) throw new Error('Se requiere el API_KEY como variable de entorno')

    try {
        const response = await fetch('https://rest.coinapi.io/v1/exchanges', {
            headers: { 'x-coinapi-key': API_KEY }
        })

        const exchanges = await response.json()

        const exchangesList = document.getElementById('exchanges-list')
        const ul = document.createElement('ul')

        /*
            El endpoint no tiene un parámetro limit, por ende retorna todos los exchanges.
            Por esta razón al pedirse 16 exchanges hice el .slice al array

            Documentación: https://docs.coinapi.io/market-data/rest-api/metadata/list-all-exchanges
        */
        exchanges.slice(0, 16).forEach(({ name, volume_1hrs_usd, volume_1day_usd }) => {
            const li = document.createElement('li');
            li.textContent = `Name: ${name}, 1 Hour Volume: ${volume_1hrs_usd}, 1 Day Volume: ${volume_1day_usd}`;
            ul.appendChild(li);
        });

        exchangesList.appendChild(ul)
    } catch (error) {
        throw new Error(error)
    }
})()
