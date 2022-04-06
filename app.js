let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function(e) {
    if(e.keyCode == 13){
        run(e);
    }
})

userNum.focus();
let counter = 0;

function run(){
    randomnum();
    usernumber();
    comparenumber();
}

function randomnum(){
    let run = Math.floor(Math.random() * 10) + 1;
   
    return run
}

function usernumber(){
    let user = document.getElementById("getNumber").value;
   
    return user
}

function comparenumber(){
    let a = usernumber()
    let b = randomnum()
    let z = document.getElementById("compare")
    let c = document.getElementById("counter")
    z.style.color = "white"
    z.style.padding = "20px"
    z.style.textAlign = "center"
    if(a!=b){
        z.innerHTML = "Numbers are not the same computer got " + b + " and user got " + a;
        z.style.backgroundColor =  "red"
        counter++
        c.innerHTML= "You have tried "+counter+" times"
        c.style.color = "white"
        c.style.padding = "20px"
        c.style.textAlign = "center"
        c.style.backgroundColor =  "black"
        document.querySelector("body").style.backgroundColor="yellow"
    }else if(a==b){
        z.innerHTML = "Numbers are the same computer got " + b + " and user got " + a;
        z.style.backgroundColor =  "green"
        counter++
        c.innerHTML= "You have tried "+counter+" times to get it right"
        c.style.color = "white"
        c.style.padding = "20px"
        c.style.textAlign = "center"
        c.style.backgroundColor =  "black"
        document.querySelector("body").style.backgroundColor = "purple"
    }
    getInput()
}
function getInput(){
    document.getElementById("getNumber").value = ""
}