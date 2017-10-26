const path = require('path');
const fullPath = path.join(__dirname, 'public');

console.log("Full path is ", fullPath);

module.exports = {
    entry: './src/app.js',
    output: {
        path: fullPath,
        filename: 'bundle.js'
    }
};
