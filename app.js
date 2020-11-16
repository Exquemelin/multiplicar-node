// const fs = require('express'); //No es una librería propia de node, pero es un paquete que se instala
// const fs = require('./fs'); //Estos son los archivos que nosotros hemos creado y necesitamos utilizar
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true, //Esto hace que sea obligatorio
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .command('crear', 'Crea un archivo la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .help()
//     .argv; // Al no llevar slash quiere decir que es un paquete, no un archivo

const argv = require('./config/yargs').argv;
var colors = require('colors');

colors.setTheme({
    custom: ['red', 'bgBlue']
});


// const multiplicar = require('./multiplicar/multiplicar'); //Esta es la forma standar de importar un paquete, pero luego tendríamos que usar multiplicar.crear archivo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

// console.log(argv);


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.custom))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}




// let base = 3;

// console.log(process.argv);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base[1]);

// let argv2 = process.argv;

// console.log('limite', argv.limite);
// console.log(argv2);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     let resultado = base * i;
//     data += (`${ base } * ${ i } = ${ base * i }\n`);
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo tabla-${ base }.txt ha sido guardado`);

// });

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));