const adviceId = document.querySelector("#adviceId")
const adviceText = document.querySelector("#adviceText")
const btn = document.querySelector("#btn")

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json()
        })
        .then(data => {
            const adviceIdd = data.slip.id;
            const advice = data.slip.advice;
            adviceId.textContent = adviceIdd;
            adviceText.innerHTML = `<p> ${advice} </p>`
        })
        .catch(err => { console.log(err) })
}

window.onload = () => {
    getAdvice();
}