import { validateParentheses } from './parentheses-validator.js';

describe('Parentheses validator tests', () => {
    test('This should return true and valid parentheses', () => {
        expect(validateParentheses('(valid test)')).toEqual([ true, 'parentheses are valid' ])
    });

    test('This should return false and closed parentheses appeared before open parentheses or there is an extra closed parentheses', () => {
        expect(validateParentheses(')reveres parenthesis test(')).toEqual([ false, 'a closing parentheses appeared before an opening one or there is an extra closed parentheses' ])
    });

    test('This should return false and a parenthesis is still open', () => {
        expect(validateParentheses('(extra open parentheses ()')).toEqual([ false, 'a parentheses is still open' ])
    });

    test('This should return false and closed parentheses appeared before open parentheses or there is an extra closed parentheses', () => {
        expect(validateParentheses('(extra closed parentheses ))')).toEqual([ false, 'a closing parentheses appeared before an opening one or there is an extra closed parentheses' ])
    });
});