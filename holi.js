

const button = document.getElementById("celebrateBtn");
const nameInput = document.getElementById("nameInput");
const holiText = document.getElementById("holiText");
const inputBox = document.getElementById("inputBox");

button.addEventListener("click", showHoli);

function showHoli(){
    const name = nameInput.value.trim();

    if(name === ""){
        alert("Please Enter your Sweet name!");
        return;
    }

    inputBox.style.display = "none";

    holiText.innerHTML = "🌈 Happy Holi, " + name + "🎨";
    holiText.style.display = "block";

    createExplosion();
}

function createExplosion(){
    for(let i = 0; i < 150; i++){
        const particle = document.createElement("div")
        particle.classList.add("particle");

        const size = Math.random()*8+4;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.background = randomColor();
        particle.style.left = "50%";
        particle.style.top = "50%";

        const spread = window.innerWidth < 600 ? 300 : 800;

        const x = (Math.random()-0.5) * spread + "px";
        const y = (Math.random()-0.5) * spread + "px";

        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);

        document.body.appendChild(particle);

        setTimeout(()=> particle.remove(), 2000)
    }
}

function randomColor(){
    const colors = ["red", "yellow", "blue", "green", "pink", "orange", "purple", "cyan"];
    return colors[Math.floor(Math.random()*colors.length)];

}