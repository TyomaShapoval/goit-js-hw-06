const range = document.getElementById("font-size-control");
const text = document.getElementById("text");


range.addEventListener("change", (event) => {
    console.log(event)
    text.style.fontSize = `${event.target.valueAsNumber}px`
})