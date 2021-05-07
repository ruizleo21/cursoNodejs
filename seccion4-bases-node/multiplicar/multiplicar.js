const fs = require('fs');
const colors = require('colors');
const sumar = (base, limite) => {
    console.clear();
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`La base introducida ${ base } no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${ limite } no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data);
    });
};
let listarTabla = (base, limite) => {
    sumar(base, limite).then(data => {
        console.log('=================');
        console.log('   Tabla del: ', base);
        console.log('=================');
        console.log(data);
    }).catch(err => console.log(err));
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        sumar(base, limite).then(data => {
            fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`Tabla-${ base }.txt`);
            });

        }).catch(err => reject(err));
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};