const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.name} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.error);