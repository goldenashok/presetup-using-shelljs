const shell = require('shelljs');
/*
    should heave shelljs dependencies installed
*/

shell.rm('-rf', 'source'); // remove the source folder forcefully
shell.rm('-rf', 'source/src'); // remove the source/src folder forcefully
shell.exec('git clone - b main https://github.com/goldenashok/webpack-basic.git source');// clone the file from the git and put in to the source folder. source folder is automatically created
shell.mkdir('public');// create public directory
shell.cp('-R', 'source/*', 'public/');// copy all files from source to public