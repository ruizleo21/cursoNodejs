/**
 * async - await
 */

// let getNombre = async() => {
//     return 'Leonardo';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Leonardo');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});