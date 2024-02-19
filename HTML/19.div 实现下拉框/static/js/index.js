let cnt = 0;
let main = () => {
    let title = document.querySelector(".title");
    title.addEventListener("click", (e) => {
        cnt ++;
        let content = document.querySelector(".content");
        if (cnt % 2 === 1) {
            content.setAttribute("style", "height: calc(100% - 80px); padding: 10px;");
        }
        else {
            content.setAttribute("style", "height: 0; padding-top: 0; padding-bottom: 0;");
        }
    });
};

export {
    main
};