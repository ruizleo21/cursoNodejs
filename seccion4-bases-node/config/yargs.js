const opts = {
    base: {
        demandOption: true,
        alias: 'b',
        type: 'number'
    },
    limite: {
        alias: 'l',
        default: 10,
        type: 'number'
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo de la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
};