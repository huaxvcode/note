let n = 100;


let getColumn = function(x, y) {
    let s = `<div class="column r${x} c${y}"></div>`;
    return s;
};

let getRow = function(x) {
    let s = `<div class="row r${x}">`;
    for (let i = 1; i <= n; i ++) {
        s += getColumn(x, i);
    }
    s += "</div>";
    return s;
};

let getGrid = () => {
    let grid = document.querySelector(".grid");
    for (let i = 1; i <= n; i ++) {
        grid.innerHTML += getRow(i);
    }
}

let debug = () => {
    getGrid();
};

let main = () => {

};

export {
    main,
    debug
};