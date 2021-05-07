const fs = require('fs');
const archivo = './db/data2.json';

const guardarDB = (data) => {
    fs.writeFile(archivo, JSON.stringify(data), (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
};

module.exports = {
    guardarDB,
    leerDB
};