const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introduciodo ${ base } no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introduciodo ${ limite } no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Tabla-${ base }.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}