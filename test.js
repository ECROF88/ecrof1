var row = 10; //行数
var col = 10; //列数

var grid = _init();

function _init() {
    let gridHtml = '';
    for (let i = 0; i < row; i++) {
        gridHtml += '<tr>'
        for (let j = 0; j < col; j++) {
            gridHtml += '<td><span class="blocks" onmousedown="_click(' + i + ',' + j + ',event)"></span></td>';
        }
        gridHtml += '<tr>'
    }
    //写入html
    document.getElementById('grid').innerHTML = gridHtml;
    //返回矩阵二维数组
    let blocks = document.getElementsByClassName('blocks');
    let grid = new Array();
    for (let i = 0; i < blocks.length; i++) {
        if (i % col === 0) {
            grid.push(new Array());
        }
        //初始化计雷数
        blocks[i].count = 0;
        grid[parseInt(i / col)].push(blocks[i]);
    }
    return grid;
}

function _click(i, j, mouse) {
    if (grid[i][j].isOpen) {
        return;
    }
    //鼠标左键打开方格
    if (mouse.button === 0) {

    }
    //鼠标右键标记方格
    else if (mouse.button === 2) {
        let block = grid[i][j];
        if (block.innerHTML !== '▲') {
            block.innerHTML = '▲';
        } else {
            block.innerHTML = '';
        }
    }
}