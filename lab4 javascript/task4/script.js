const addButton = document.querySelector("button");
const table = document.querySelector("table");
const task = document.querySelector("#taskInput");



addButton.addEventListener("click",addTask)

function addTask(){
  let newROw=document.createElement("tr")
  let firstColumn=document.createElement("td")
  firstColumn.innerHTML= `<input type="checkbox" class="checkbox"></input>`;

 let secondColumn=document.createElement("td");
 secondColumn.innerText=task.value
 secondColumn.classList.add("taskInput")
 let thirdColumn=document.createElement("td")
  thirdColumn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  thirdColumn.addEventListener("click",function(){
    this.parentElement.remove();
  });
  
    table.appendChild(newROw)
    newROw.appendChild(firstColumn)
    newROw.appendChild(secondColumn)
    newROw.appendChild(thirdColumn)
    task.value=""
      check()
}
function check(){
 let checks = document.querySelectorAll(".checkbox");
 let tasks = document.querySelectorAll(".taskInput")
for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener("click",function(){
       if(this.checked){
          tasks[i].style.textDecoration= "line-through";
   }else tasks[i].style.textDecoration = "";
  
    })
}
}
check()



