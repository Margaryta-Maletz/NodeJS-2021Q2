// index.js
const startString = require('./app/start-string');

const fs = require('fs').promises;
function copyFile(oldPath, newPath) {
    return fs.readFile(oldPath)
        .then(content => fs.writeFile(newPath, content)
            .catch(console.error))
}
copyFile(startString.options.input, startString.options.output).then (
    () => console.log('Copied!'),
    () => console.log('NOT copied!')
);

