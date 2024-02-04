const sayDate=function(str){
  console.log("str", Date.now());  
}
const intervalId=setInterval(sayDate, 1000, "hi")
clearInterval(intervalId);



   document.querySelector('#Start').addEventListener('click', function() {
    timerId = setInterval(function() {
        console.log('Timer is running...');
    }, 1000);
});


document.querySelector('#Stop').addEventListener('click', function() {
    clearInterval(timerId);
    console.log('Timer stopped.');
});























// document.querySelector('#start') 
// addEventListener('click', function(){
//     clearInterval=setInterval(function(){
//         console.log("START")
//     });
   
// });

// document.querySelector('#stop')
// addEventListener('click', function(){
//     clearInterval(intervalId)
//     console.log("Stopped")
// })




// document.querySelector('#start')
// addEventListener('click', function(event){
//    intervalId=setInterval(function(event){ 
//    console.log("hii")
// })
// });

    ''