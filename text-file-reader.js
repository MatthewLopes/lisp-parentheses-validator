import path from 'path';
import fs from 'fs';

export function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        try {
            filenames.forEach(function(filename) {
                fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
                if (err) throw error
                onFileContent(filename, content);
                });
            });
            if(!filenames.length) {
                console.log('No files in this directory');
            }
        }
        catch(e) {
            console.log('The directory does not exist');
        }
    });
  }