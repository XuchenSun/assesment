export function encryptCaesar(inputString, key) {
    var array = inputString.toUpperCase().split('');
    var string_after_encoder= [];
    for(let i=0;i<array.length;i++){
        let array_has_offset = array[i].split('');
        for(let j=0;j<array_has_offset.length;j++){
            let num = array_has_offset[j].charCodeAt();
            if(num >=65 && num <=90){
                array_has_offset[j] = num+key>90?String.fromCharCode(64+(num+key-90)):String.fromCharCode(num+key);// use key to define the offset
            }
        }
        string_after_encoder.push(array_has_offset.join(''));
    }
    return string_after_encoder.join('');


}
