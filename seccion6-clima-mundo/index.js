require('dotenv').config();

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquierer");
const Busquedas = require("./models/busquedas");


const main = async() => {
    const busquedas = new Busquedas();
    let opt;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSel = lugares.find(l => l.id === id);
                busquedas.agregarHistorial(lugarSel.name);
                //clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                //mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.name);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Descripción:', clima.desc);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${ i +1}.`.green;
                    console.log(`${ idx } ${ lugar } `);
                });
                break;
        }
        if (opt !== 0) await pausa();
    } while (opt !== 0);
};

main();
// console.log(process.env.MAPBOX_KEY);