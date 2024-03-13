let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let card = document.querySelector(".content");
let delet = document.querySelector(".delete")


btn.addEventListener("click", () => {
    if (input.value !== "") {
        let item = document.createElement("div");
        item.classList.add("to-do", "d-flex", "align-item-cntr", "w-h-30", "justfy-spave-btwn");
        let text = document.createElement("p");
        text.classList.add("text")
        text.innerHTML = input.value;

        localStorage.setItem("To-do Item", text.innerHTML);

        let pics = document.createElement("div");

        item.appendChild(text);
        item.appendChild(pics)
        card.appendChild(item);

        let chk = document.createElement('span')
        chk.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="black" />
                <path d="M9.99909 13.587L7.70009 11.292L6.28809 12.708L10.0011 16.413L16.7071 9.70697L15.2931 8.29297L9.99909 13.587Z" fill="black" />
            </g>
        </svg >
             `;


        chk.addEventListener("click", () => {

            if (text.style.textDecoration === "none") {
                text.style.textDecoration = "line-through";
                let path = chk.querySelector("path");
                path.style.fill = "blue";
            } else {
                text.style.textDecoration = "none";
                let path = chk.querySelector("path");
                path.style.fill = "black";
            }
        });

        chk.classList.add("check");
        pics.appendChild(chk);


        let removeIcon = document.createElement('img');
        removeIcon.src = './assets/img/remove.svg';
        removeIcon.classList.add("remove-img");
        pics.appendChild(removeIcon);


        removeIcon.addEventListener("click", () => {
            removeIcon.style.fill = "skyblue";
            item.style.display = "none";
        });




    };
});



