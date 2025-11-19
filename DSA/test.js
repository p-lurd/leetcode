function encryption(s) {
    const rows = Math.floor(Math.sqrt(s.length));
    const columns = Math.ceil(Math.sqrt(s.length));
    const realNumberOfRows = s.length > rows * columns? rows + 1:rows;
    const wordsArray = [];
    const encryptedArray = [];
    for(let i = 0; i < realNumberOfRows; i++){wordsArray.push(s.split("").splice(i*columns,columns));
    }
    for(let i = 0; i < columns; i++){
        const newWord = [];
        wordsArray.forEach(item=>newWord.push(item[i]));
        encryptedArray.push(newWord.join(''));
    }  
    return encryptedArray.join(' ');
}

function encryptions(s) {
    let rows = Math.floor(Math.sqrt(s.length));
    let columns = Math.ceil(Math.sqrt(s.length));
    function getRealRows(s, rows, columns){
        if(s.length>rows*columns){
            return rows + 1;
        }else{ return rows}
    }
    let realRows = getRealRows(s, rows, columns);
    let wordsArray = [];
    let encryptedArray = [];
    for(let i = 0; i< realRows; i++){
        wordsArray.push(s.split("").splice(i*columns,columns))
    }
    return wordsArray.join(" ");
    
}
const s =
console.log(encryptions("haveaniceday"))