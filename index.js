var hitrn1 = 0;
var timer = 60;
var score = 0;
function makebubble(){
    let clutter = "";
for(var i=1;i<=133;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runtime(){
    var timerint = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent = timer
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>game over !! </h1>";
        }
    }, 1000);
}
function getnewhit(){
    hitrn1 = Math.floor(Math.random()*10);
    document.querySelector("#hitcount").textContent = hitrn1;
}
function increasescore(){
    score += 10;
    document.querySelector("#score1").textContent = score;
}
makebubble();
getnewhit();
runtime();
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn1){
        increasescore();
        makebubble();
        getnewhit();
    }
});
