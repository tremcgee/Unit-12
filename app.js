function run(){
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green"
    document.getElementById("paragraph").style.color = "white"
    document.getElementById("paragraph").style.padding = "20px"
    randomnum()
    usernumber()
}

function randomnum(){
    let run = Math.floor(Math.random() * 10) + 1;
    let x = document.getElementById("random")
    x.innerHTML = run;
    x.style.backgroundColor = "purple"
    x.style.color = "white"
    x.style.padding = "20px"
    x.style.textAlign = "center"
}

function usernumber(){
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber")
    y.innerHTML = user
    y.style.color = "yellow"
    y.style.backgroundColor= "orange"
}