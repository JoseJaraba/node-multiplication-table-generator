require('colors');

const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiply');

createFile(argv.b, argv.l, argv.u)
    .then(fileName => console.log(fileName.rainbow, 'created'))
    .catch(error => console.error(error));