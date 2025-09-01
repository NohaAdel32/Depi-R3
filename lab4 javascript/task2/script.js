let red=document.getElementById("red")
let blue=document.getElementById("blue")
let green=document.getElementById("green")
let container=document.getElementById("container")

let divs=document.querySelectorAll(".task")

for(square of divs){
    square.addEventListener("click",addSquare)
}

function addSquare(){
    let newٍSquare=document.createElement('div')
    newٍSquare.classList.add('task')
     let color = this.getAttribute("id");
    newٍSquare.classList.add(color)
     newٍSquare.setAttribute("id",color)
     newٍSquare.addEventListener("click",addSquare)
    container.appendChild(newٍSquare)
   this.classList.add("disabled") 
 
   
}