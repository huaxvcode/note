let len = 9;

let getColumnLeft = (x, y, pos) => {
    let s = `<div class="column left ${pos}">${x * y} = ${x} * ${y}</div>`;
    // console.log(s);
    return s;
};

let getColumnRight = (x, y, pos) => {
    let s = `<div class="column right ${pos}">${y} * ${x} = ${x * y}</div>`;
    // console.log(s);
    return s;
};

let getRow = (n, pos) => {
    let s = `<div class="row">`;
    for (let i = n; i > 0; i --) {
        s += getColumnLeft(n, i, pos);
    }
    for (let i = 1; i <= n; i ++) {
        s += getColumnRight(n, i, pos);
    }
    s += `</div>`
    return s;
};

let main = () => {
    let nineBox = document.querySelector(".nineNineBox");
    for (let i = 1; i <= len; i ++) {
        nineBox.innerHTML += getRow(i, "top");
    }
    for (let i = len - 1; i > 0; i --) {
        nineBox.innerHTML += getRow(i, "bottom");
    }
};

export {
    main
};