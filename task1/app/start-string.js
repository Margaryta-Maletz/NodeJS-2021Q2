// start-string.js
const commander = require('commander');
commander
    .option('-s, --shift [shift]', 'shift', false)
    .option('-i, --input [oldFile]','input', 'process.stdin')
    .option('-o, --output [newFile]','output', 'process.stdout')
    .option('-a, --action [action]','encode/decode', false);

commander.parse(process.argv);
const options = commander.opts();

module.exports.options = options;
