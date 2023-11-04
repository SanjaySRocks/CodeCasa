const body = document.querySelector("body")
const clock = document.querySelector(".clock")
const hour_hand = document.querySelector(".hr")
const minute_hand = document.querySelector(".min")
const second_hand = document.querySelector(".sec")

if (localStorage.getItem("mode") === "Dark") {
    body.classList.add("dark");
}

clock.addEventListener("click",()=>{
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "Dark" : "Light");
})

const runClock = () => {
    let date = new Date()
    let sec_to_degree = (date.getSeconds() / 60) * 360
    let min_to_degree = (date.getMinutes() / 60) * 360
    let hour_to_degree = (date.getHours() / 12) * 360;

    // Rotate the clock hands to the appropriate degree based on the current time
    second_hand.style.transform = `rotate(${sec_to_degree}deg)`;
    minute_hand.style.transform = `rotate(${min_to_degree}deg)`;
    hour_hand.style.transform = `rotate(${hour_to_degree}deg)`;
};

setInterval(runClock, 1000);
runClock();