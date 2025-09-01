let basket= document.querySelector(".basket")
let egg =document.querySelector(".egg")

     let positionLeft =  700
       basket.style.left = positionLeft + 'px'
window.addEventListener("keydown",function(e){
  if(e.key === 'ArrowRight') {
        positionLeft += 4;
        basket.style.left = positionLeft + 'px'
    }
    if(e.key === 'ArrowLeft') {
        positionLeft -= 10;
        basket.style.left = positionLeft + 'px'
    }

});
///////////egg

let positionLeft_egg=Math.floor( 100 * Math.random() )
egg.style.left=positionLeft_egg+'%'

let positionTop = -100
egg.style.top=positionTop+'px'

let fall=setInterval(()=>{
  positionTop +=40
egg.style.top=positionTop+'px'
if(positionTop>=window.innerHeight-70){
    check()
    clearInterval(fall)
}
},200);

function check(){
    let eggRect = egg.getBoundingClientRect();
  let basketRect = basket.getBoundingClientRect();

  if (
    eggRect.left < basketRect.right &&
    eggRect.right > basketRect.left &&
    eggRect.bottom > basketRect.top &&
    eggRect.top < basketRect.bottom
  ) {
       egg.hidden = true;
    } else {
        egg.src = "images/broken.png";
    }
}