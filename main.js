import { readFiles } from './text-file-reader.js';
import { validateParentheses } from './parentheses-validator.js'

readFiles('./sample-lisp-code/', function(filename, content) {
    const [isValid, message] = validateParentheses(content);
    console.log(filename, " is ", isValid, message);
}, function(err) {
    throw err;
});
