function run(){
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green"
    document.getElementById("paragraph").style.color = "yellow"
    document.getElementById("paragraph").style.padding = "20px"
    randomnum()
    usernumber()
}

function randomnum(){
    let run = Math.floor(Math.random() * 10) + 1;
    let x = document.getElementById("random")
    x.innerHTML = run;
    x.style.backgroundColor = "purple"
    x.style.color = "red"
    x.style.padding = "20px"
    x.style.textAlign = "center"
}

function usernumber(){
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber")
    y.innerHTML = user
    y.style.color = "blue"
    y.style.backgroundColor= "orange"
    y.style.padding = "20px"
    y.style.textAlign = "center"
}