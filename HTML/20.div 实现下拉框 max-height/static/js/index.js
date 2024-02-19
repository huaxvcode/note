let cnt = 0;

let main = () => {
    let title = document.querySelector(".title");
    title.addEventListener("click", (e) => {
        let content = document.querySelector(".content");
        if (++ cnt % 2 ==  1) {
            content.setAttribute("style", "max-height: calc(100% - 80px);");
        }
        else {
            content.setAttribute("style", "max-height: 0;");
        }
    });
};

export {
    main
};