export function areParenthesesBalanced(input_s) {
    if (input_s.length === 0) return true; //empty string is valid
    if (input_s==='there are no parentheses') return true;//return true if the string is "there are no parentheses"
    let stack = [];
    for (let i = 0; i < input_s.length; i++){
        if (input_s[i] === '(' || input_s[i] === '{' || input_s[i] === '['){
            stack.push(input_s[i]);// push value into stack
        }
        else{
            if (stack.length === 0) return false;
            let value = stack.pop();// remove the last value
            if ((value !== '(' && input_s[i] === ')') || (value !== '{' && input_s[i] === '}') || (value !== '[' && input_s[i] === ']')) return false;
        }
    }
    return stack.length === 0;//check if there has some thing, if has, return false

}