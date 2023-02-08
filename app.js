const root = document.querySelector(':root');
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const buttons = document.querySelectorAll(".link-button")
const picture = document.querySelector("#picture");
const circle = document.querySelector(".circle");

let tiltScale = 30;
let paralaxDepth = 25;

const colorSchemes = [
    {
        "light": "f7dba7ff",
        "secondary": "f1ab86ff",
        "primary": "c57b57ff",
        "background": "1e2d2fff",
        "card": "1e2d2fff"
    },
    {
        "light": "000",
        "secondary": "F7EDE2",
        "primary": "F6BD60",
        "background": "6AA6C6",
        "card": "84A59D"
    },
    {
        "light": "000",
        "secondary": "ffddd",
        "primary": "ffafcc",
        "background": "cdb4db",
        "card": "a2d2ff"
    },
    {
        "light": "000000",
        "secondary": "15709d",
        "primary": "ffffff",
        "background": "0cad69",
        "card": "0cad69"
    },
    {
        "light": "DAD7CD",
        "secondary": "A3B18A",
        "primary": "588157",
        "background": "3A5A40",
        "card": "344E41"
    },
    {
        "light": "FFF",
        "secondary": "FB5607",
        "primary": "FF006E",
        "background": "3A86FF",
        "card": "8338EC"
    }
]

buttons.forEach((e, i) => {
    e.style.transition = `all ${(i + 1) * 0.45}s ease`;
    e.style.transform = `translateZ(${paralaxDepth}px)`;
})

document.addEventListener("keydown", function (zEvent) {
    if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "t") {  // case sensitive
        const colorScheme = colorSchemes[Math.floor(Math.random() * (colorSchemes.length))];
        for (const color in colorScheme) {
            root.style.setProperty(`--${color}`, `#${colorScheme[color]}`);
        }
    }
});

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 1.5 - e.pageX) / tiltScale;
    let yAxis = (window.innerHeight / 1.5 - e.pageY) / tiltScale;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener("mouseenter", (e) => {
    picture.style.transform = `translateZ(${paralaxDepth * 1.5}px)`;
    title.style.transform = `translateZ(${paralaxDepth * 1.5}px)`;
    title.style.textShadow = '10px 10px 10px rgba(0,0,0,0.25)'
    subtitle.style.transform = `translateZ(${paralaxDepth * 1.5}px)`;
    subtitle.style.textShadow = '10px 10px 10px rgba(0,0,0,0.25)'
    buttons.forEach((e, i) => {
        e.style.transition = `all ${i * 0.25}s ease`;
        e.style.transform = `translateZ(${paralaxDepth * 1.5}px)`;
        e.style.transition = `all 1s ease`;
    })
    card.style.transition = `none`;
})

container.addEventListener("mouseleave", (e) => {
    card.style.transition = `all 1s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = `translateZ(${paralaxDepth}px)`;
    title.style.textShadow = 'none'
    subtitle.style.transform = `translateZ(${paralaxDepth}px)`;
    subtitle.style.textShadow = 'none'
    buttons.forEach((e) => {
        e.style.transform = `translateZ(${paralaxDepth}px)`;

    })
})