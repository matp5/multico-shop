let count = document.getElementById("counter");

let click = 0;

let btnClick = () => {
    click += 1;
    count.innerText = click;
    count.style.color = "white";
}