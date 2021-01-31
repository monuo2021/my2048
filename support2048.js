function getPosTop(i, j) {
    return 20 + i * 120;
}

function getPosLeft(i, j) {
    return 20 + j * 120;
}

function getNumberBackgroundColor(number) {
    switch(number) {
        case 2: return "#eee4da";break;
        case 4: return "#ede0c8";break;
        case 8: return "#f2b179";break;
        case 16: return "#f59563";break;
        case 32: return "#f67c5f";break;
        case 64: return "#f65e3b";break;
        case 128: return "#edcf72";break;
        case 256: return "#eecc61";break;
        case 512: return "#9c0";break;
        case 1024: return "#33b5e5";break;
        case 2048: return "#09c";break;
        case 4096: return "#a6c";break;
        case 8192: return "#93c";break;
    }
    return "black";
}

function getNumberColor(number) {
    if(number <= 4) {
        return "#776e65";
    }

    return "white";
}

function nospace(board) {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] == 0)
                return false;
        }
    }
    
    return true;
}

function canMoveLeft( board ) {
    //从[0][1]开始遍历
    for(var i = 0; i < 4; i++) 
        for(var j = 1; j < 4; j++) 
            //如果这个board块存在数字，则要考虑
            if( board[i][j] != 0)
                //如果其左侧元素不存在，或者左侧元素和它相等，则可以左移
                if(board[i][j - 1] == 0 || board[i][j - 1] == board[i][j] )
                    return true;

    return false;
}

function canMoveRight( board ) {
    //从[0][2]开始遍历
    for(var i = 0; i < 4; i++) 
        for(var j = 2; j >= 0; j--) 
            //如果这个board块存在数字，则要考虑
            if( board[i][j] != 0)
                //如果其右侧元素不存在，或者右侧元素和它相等，则可以左移
                if(board[i][j + 1] == 0 || board[i][j + 1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp(board) {
    for(var j = 0; j < 4; j++) 
        for(var i = 1; i < 4; i++) 
            //如果这个board块存在数字，则要考虑
            if( board[i][j] != 0)
                //如果其上侧元素不存在，或者上侧元素和它相等，则可以左移
                if(board[i - 1][j] == 0 || board[i - 1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown(board) {
    for(var j = 0; j < 4; j++) 
        for(var i = 2; i >= 0; i--) 
            //如果这个board块存在数字，则要考虑
            if( board[i][j] != 0)
                //如果其上侧元素不存在，或者上侧元素和它相等，则可以左移
                if(board[i + 1][j] == 0 || board[i + 1][j] == board[i][j] )
                    return true;

    return false;
}
//判断左右方向是否右障碍物
function noBlockHorizontal( row, col1, col2, board) {
    //遍历[row][col1]到[row][col2]的坐标，判断之间是否有障碍物
    for(var i = col1 + 1; i < col2; i++) {
        //如果之间的坐标都不等于0（即都有数字），则返回false
        if(board[row][i] != 0)
            return false;
    }
    return true;
}
//判断上下方向是否右障碍物
function noBlockVertical( col, row1, row2, board) {
    //遍历[row][col1]到[row][col2]的坐标，判断之间是否有障碍物
    for(var i = row1 + 1; i < row2; i++) {
        //如果之间的坐标都不等于0（即都有数字），则返回false
        if(board[i][col] != 0)
            return false;
    }
    return true;
}