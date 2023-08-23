const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, until = 10) => {
    
    try {

        let fileOutput = ''; 
        let consoleOutput = '';
        let array = Array.from(Array(until), (_, index) => index + 1);
        
        array.forEach(element => {
            consoleOutput += `${base} ${'X'.blue} ${element} ${'='.blue} ${base * element}\n`;
            fileOutput += `${base} X ${element} = ${base * element}\n`;

        });

        if(list) {
            console.log('====================');
            console.log('  TABLE :  '.green, colors.blue(base));
            console.log('====================');
            
            console.log(consoleOutput);
        }

        
        fs.writeFileSync(`./out/table-${base}.txt`, fileOutput);
        return `table-${base}.txt`;

    } catch(error) {
        throw error;
    }

}

module.exports = {
    createFile
}