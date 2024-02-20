let n = 15;
let robot = 'rgb(34, 33, 33)';
let human = 'rgb(194, 191, 191)';
let used = new Set();

let hasUsed = (x, y) => {
    return used.has(x + " " + y);
};

let addUsed = (x, y) => {
    return used.add(x + " " + y);
};

let getColumn = function(x, y) {
    let s = `<div class="column r${x} c${y}"><div class="cell r${x} c${y}"></div></div>`;
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

let getElem = (x, y) => {
    return document.querySelector(`.cell.r${x}.c${y}`);
};

// 人类下棋
let humanChess = (e) => {
    let ls = e.target.className.split(" ");
    if (ls[0] != "cell" && ls[0] != "column") return false;
    let x = ls[1].substr(1);
    let y = ls[2].substr(1);
    if (hasUsed(x, y)) {
        let cell = getElem(x, y);
        cell.style.backgroundColor = robot;
        return false;
    }
    addUsed(x, y);
    let cell = getElem(x, y);
    cell.style.backgroundColor = human;
};

let getElemColor = (x, y) => {
    return getElem(x, y).style.backgroundColor;
};

// 记忆化递归
let inf = 1 << 20;
let dp = {};
// 敌方能放松考虑多少步？
let score = (s) => {
    if (s.length < 5) return 0;
    let len = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == '1') len ++;
        else {
            if (len >= 5) {
                dp["s"] = 0;
                return 0;
            }
            len = 0;
        }
    }
    dp[s] = inf;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == '1') continue;
        let ts = s.substring(0, i);
        ts += '1';
        ts += s.substring(i + 1, s.length);
        let res = score(ts);
        dp[s] = Math.min(dp[s], res);
    }
    return dp[s];
} 

let yy = (x, y) => {
    let ans = 0;
    let s = "";
    let ts = "";
    for (let i = y; i > 0; i --) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = y + 1; i <= n; i ++) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    ans = score(s);

    s = "";
    ts = "";
    for (let i = y; i > 0; i --) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = y + 1; i <= n; i ++) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }

    ans = Math.min(ans, score(s));
    return ans;
};
 
let xy = (x, y) => {
    let ans = 0;
    let s = "";
    let ts = "";
    for (let i = y; i > 0; i --) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = y + 1; i <= n; i ++) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    ans = score(s);

    s = "";
    ts = "";
    for (let i = y; i > 0; i --) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = y + 1; i <= n; i ++) {
        let tc = getElemColor(x, i);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }

    ans = Math.min(ans, score(s));
    return ans;
};

let xx = (x, y) => {
    let ans = 0;
    let s = "";
    let ts = "";
    for (let i = x; i > 0; i --) {
        let tc = getElemColor(i, y);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = x + 1; i <= n; i ++) {
        let tc = getElemColor(i, y);
        if (ts == null || ts == human) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    ans = score(s);

    s = "";
    ts = "";
    for (let i = x; i > 0; i --) {
        let tc = getElemColor(i, y);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }
    for (let i = s.length - 1; i >= 0; i --) {
        ts += s[i];
    }
    s = ts;
    for (let i = x + 1; i <= n; i ++) {
        let tc = getElemColor(i, y);
        if (ts == null || ts == robot) {
            s += ts == null ? "0" : "1";
        }
        else break;
    }

    ans = Math.min(ans, score(s));
    return ans;
};

let yx = (x, y) => {

};

let chessScore = (x, y) => {

};

// 机器人下棋
let robotChess = () => {

};

let main = () => {
    getGrid();
    
    // 对文件添加事件监听，如果触发点击事件，就执行函数
    document.addEventListener("click", function(e){
        humanChess(e);
    });
};

let debug = () => {
    // 对文件添加事件监听，如果触发点击事件，就执行函数
    document.addEventListener("click", function(e){
        score([0, 0, 1, 0, 1, 1, 1, 0]);
    });
};

export {
    main,
    debug
};