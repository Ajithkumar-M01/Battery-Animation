const text = document.createElement("div")
const result = document.querySelector(".container")
result.appendChild(text)

function charging() {
    
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#39ff14"
        text.innerText = `Charging.......20%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 1000)
    setTimeout(()=>{
        document.getElementById("two").style.backgroundColor = "#39ff14"
        text.innerText = `Charging.......40%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 2000)
    setTimeout(()=>{
        document.getElementById("three").style.backgroundColor = "#39ff14"
        text.innerText = `Charging.......60%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 3000)
    setTimeout(()=>{
        document.getElementById("four").style.backgroundColor = "#39ff14"
        text.innerText = `Charging.......80%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 4000)
    setTimeout(()=>{
        document.getElementById("five").style.backgroundColor = "#39ff14"
        text.innerText = `Charging.......100%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 5000)

    setTimeout(()=>{
        text.innerText = `Charging-Completed`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 6000)
}

function draining() {
    
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#39ff14"
        document.getElementById("two").style.backgroundColor = "#39ff14"
        document.getElementById("three").style.backgroundColor = "#39ff14"
        document.getElementById("four").style.backgroundColor = "#39ff14"
        document.getElementById("five").style.backgroundColor = "#39ff14"

        text.innerText =`Battery is gonna drain`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 8000)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#FFA6A3"
        document.getElementById("two").style.backgroundColor = "#FFA6A3"
        document.getElementById("three").style.backgroundColor = "#FFA6A3"
        document.getElementById("four").style.backgroundColor = "#FFA6A3"
        document.getElementById("five").style.backgroundColor = "#FFA6A3"

        text.innerText = `Draining.......90%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 8500)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#ff0800"
        document.getElementById("two").style.backgroundColor = "#ff0800"
        document.getElementById("three").style.backgroundColor = "#ff0800"
        document.getElementById("four").style.backgroundColor = "#ff0800"
        document.getElementById("five").style.backgroundColor = ""
        
        text.innerText = `Draining.......80%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 9000)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#FFA6A3"
        document.getElementById("two").style.backgroundColor = "#FFA6A3"
        document.getElementById("three").style.backgroundColor = "#FFA6A3"
        document.getElementById("four").style.backgroundColor = "#FFA6A3"
        document.getElementById("five").style.backgroundColor = ""

        text.innerText = `Draining.......70%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 9500)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#ff0800"
        document.getElementById("two").style.backgroundColor = "#ff0800"
        document.getElementById("three").style.backgroundColor = "#ff0800"
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""
        
        text.innerText = `Draining.......60%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 10000)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#FFA6A3"
        document.getElementById("two").style.backgroundColor = "#FFA6A3"
        document.getElementById("three").style.backgroundColor = "#FFA6A3"
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""

        text.innerText = `Draining.......50%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 10500)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#ff0800"
        document.getElementById("two").style.backgroundColor = "#ff0800"
        document.getElementById("three").style.backgroundColor = ""
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""
        
        text.innerText = `Draining.......40%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    },11000)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#FFA6A3"
        document.getElementById("two").style.backgroundColor = "#FFA6A3"
        document.getElementById("three").style.backgroundColor = ""
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""

        text.innerText = `Draining.......30%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 11500)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#ff0800"
        document.getElementById("two").style.backgroundColor = ""
        document.getElementById("three").style.backgroundColor = ""
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""
        
        text.innerText = `Draining.......20%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 12000)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = "#FFA6A3"
        document.getElementById("two").style.backgroundColor = ""
        document.getElementById("three").style.backgroundColor = ""
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""

        text.innerText = `Draining.......10%`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 12500)
    setTimeout(()=>{
        document.getElementById("one").style.backgroundColor = ""
        document.getElementById("two").style.backgroundColor = ""
        document.getElementById("three").style.backgroundColor = ""
        document.getElementById("four").style.backgroundColor = ""
        document.getElementById("five").style.backgroundColor = ""

        text.innerText = `Charge the Battery`;
        text.style.textAlign = "center"
        text.style.marginTop = "2em"
        text.style.fontSize = "2rem"
    }, 13000)
}

draining();

const button = document.querySelector("button")
button.addEventListener("click", ()=>{
    charging();
})