const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Base tabla multiplicar',
                    demandOption: true
                })
                .option('u', {
                    alias: 'until',
                    type: 'number',
                    describe: 'Limite tabla multiplicar',
                    default: 10,
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    describe: 'Muestra tabla en consola',
                    default: false,
                })
                .check((argv, options) => {
                    if(isNaN(argv.b && argv.u)) {
                        throw 'The base and the limit must be numbers';
                    }
                    return true;
                })
                .argv; 

module.exports = argv;