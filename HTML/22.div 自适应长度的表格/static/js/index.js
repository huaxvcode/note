// let main = () => {
//     let tables = document.querySelectorAll(".table");
    
//     for (let i = 0; i < tables.length; i ++) {
//         // 判断是否是 div 标签
//         console.log(tables[i].tagName.toLowerCase() == "div");
//         // 输出类名
//         console.log(tables[i].className);
//     }
// }

let main = () => {
    let tables = document.querySelectorAll(".table");
    for (let i = 0; i < tables.length; i ++) {
        let trs = tables[i].querySelectorAll(".tr");
        let cnt = 0;
        for (let j = 0; j < trs.length; j ++) {
            let tbs = trs[j].querySelectorAll(".tb");
            cnt = Math.max(cnt, tbs.length);
        }
        let len = cnt * 200;
        for (let j = 0; j < trs.length; j ++) {
            let tbs = trs[j].querySelectorAll(".tb");
            for (let k = 0; k < tbs.length; k ++) {
                tbs[k].setAttribute("style", "width: " + (len / tbs.length) + "px;");
            }
        }
    }
}

export {
    main
};