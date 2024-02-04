const sayAbhishek = function(){
    console.log("abhishek");
}

const changeText = function(){
    document.querySelector('h1').
    innerHTML= "best js series";
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#Stop'). 
addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("STOPPED");
})

//setTimeout(changeText, 2000);