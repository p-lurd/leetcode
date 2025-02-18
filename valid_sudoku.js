var isValidSudoku = function(board) {    
    let rows = new Set();
    let cols = new Set();
    let boxes = new Set();
    
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            let val = board[row][col];
            if(val === '.')
                continue;
            
            let rowKey = row + 'r' + val;
            let colKey = col + 'c' + val;
            let boxKey = Math.floor(row / 3) + 'b' + Math.floor(col/ 3) + 'b' + val;
            
            if(rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) 
                return false;
            
            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }
    
    return true;
};