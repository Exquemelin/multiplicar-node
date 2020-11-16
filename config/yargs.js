const opts = {
    base: {
        demand: true, //Esto hace que sea obligatorio
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv; // Al no llevar slash quiere decir que es un paquete, no un archivo

module.exports = {
    argv,
}