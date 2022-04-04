let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function(e) {
    if(e.keyCode == 13){
        run(e);
    }
})

userNum.focus();

function run(){
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green"
    document.getElementById("paragraph").style.color = "yellow"
    document.getElementById("paragraph").style.padding = "20px"
    randomnum();
    usernumber();
    comparenumber();
}

function randomnum(){
    let run = Math.floor(Math.random() * 10) + 1;
    let x = document.getElementById("random")
    x.innerHTML = run;
    x.style.backgroundColor = "purple"
    x.style.color = "red"
    x.style.padding = "20px"
    x.style.textAlign = "center"
    return run
}

function usernumber(){
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber")
    y.innerHTML = user
    y.style.color = "blue"
    y.style.backgroundColor= "orange"
    y.style.padding = "20px"
    y.style.textAlign = "center"
    return user
}

function comparenumber(){
    let a = usernumber()
    let b = randomnum()
    let z = document.getElementById("compare")
    z.style.color = "white"
    z.style.padding = "20px"
    z.style.textAlign = "center"
    if(a!=b){
        z.innerHTML = "Numbers are not the same computer got " + b + " and user got " + a;
        z.style.backgroundColor =  "red"
    }else if(a==b){
        z.innerHTML = "Numbers are the same computer got " + b + " and user got " + a;
        z.style.backgroundColor =  "green"
    }
    getInput()
}
function getInput(){
    document.getElementById("getNumber").value = ""
}