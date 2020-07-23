export function validateParentheses(stringToValidate) {
    let openedParentheses = 0;
    let message;
    for(const char of stringToValidate) {
        if(char == '(') {
            openedParentheses++;
        } else if(char == ')') {
            openedParentheses--;
        }
        if(openedParentheses < 0) {
            message = 'a closing parentheses appeared before an opening one or there is an extra closed parentheses';
            return [false, message];
        }
    }
    if(openedParentheses > 0) {
        message = 'a parentheses is still open';
        return [false, message];
    }
    message = 'parentheses are valid';
    return [true, message];
}