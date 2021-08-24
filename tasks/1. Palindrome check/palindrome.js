export function isPalindrome(inputString) {
    const const_string = inputString.toLowerCase().replace(/[^0-9a-z]/g, "");// Regular Expression

    let left_of_string = 0;// define left
    let right_of_string = const_string.length - 1;//define right


    while(left_of_string <= right_of_string) {
        if(const_string.charAt(left_of_string) !== const_string.charAt(right_of_string))
            {
            return false;// if left is not equal to right, it is not palindrome
            }

        left_of_string++;// compare char one by one
        right_of_string--;//compare char one by one
    }

    return true;// if every char from left and right are same, return true.
};