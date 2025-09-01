const studentName = document.querySelector("input[name=studentName]");
const studentGrade = document.querySelector("input[name=studentGrade]");
const studentsTable = document.querySelector(".students-table");
const addButton = document.querySelector(".add-button");
const filterParameter = document.querySelector(".filter-parameter");
const sortParameter = document.querySelector(".sort-parameter");
const nameError = document.querySelector("#nameError");
const gradeError = document.querySelector("#gradeError");

//verfication
if (studentName.value === "") nameError.classList.add('show');
if (studentGrade.value === "") gradeError.classList.add('show');
studentName.addEventListener("change",()=>{
     if (studentName.value == "") nameError.classList.add("show");
    else nameError.classList.remove("show");
});
studentGrade.addEventListener("change",()=>{
    if (studentGrade.value == "") gradeError.classList.add("show");
    else gradeError.classList.remove("show");
});
studentName.onkeypress=(e)=>{
     if (!isNaN(parseInt(e.key))) e.preventDefault();
}
studentGrade.onkeypress=(e)=>{
     if (isNaN(parseInt(e.key))) e.preventDefault();
}
////////////////////////////////////////////////////////////////////
//error
 const errorText = document.querySelector(".error-notification");
 function launchError(message){
     const error = document.querySelector('h3');
     errorText.innerHTML=""
    if(studentName.value=="")errorText.innerHTML = `"You should enter a valid name !"`
    if(!studentGrade.value || studentGrade.value < 0 || studentGrade.value > 100 )errorText.innerHTML = `"You should enter a grade between 0 and 100 !"`
    if (message) errorText.innerHTML = `${message}`;
    error.classList.add("show-error-notification");
}
const closeNotificationButton = document.querySelector(".close-notification");

closeNotificationButton.addEventListener("click",() => {
    const error = document.querySelector('h3');
    error.classList.remove("show-error-notification");
})

////////////////////////////////////////////////////////////////////////////////////
let uid=1;
students=[];

//add
addButton.addEventListener("click", () => {
  const exists = students.some(student => student.name === studentName.value);
    if (exists) {
            launchError("Student is already registered!");
            isStudentPresent = true;
        }
  if(!exists&& studentName.value !==""&& studentGrade.value !==""&& studentGrade.value>0&&studentGrade.value<=100){
    students.push({
        id: uid,
        name: studentName.value,
        grade: studentGrade.value
    });
    uid++;
studentName.value="";
studentGrade.value="";
filter(filterParameter.value,students,sortParameter.value)
} else {
        launchError();
    }

});

//view
function view(arrayShow){
   studentsTable.innerHTML="";
   for(let student of arrayShow){
          studentsTable.innerHTML+=
          `
          <tr>
             <td> ${student.name}</td>
             <td> ${student.grade}</td>
             <td onClick="deleteStudent(${student.id})"> <i class="fa-solid fa-trash-can"></i></td>
          </tr>
          `
   }
}
// view(students)
//delete
function deleteStudent(id){
     students =students.filter(task => task.id !== id);
      view( students)
}

///filter
filterParameter.onchange = () => {
    filter(filterParameter.value,students,sortParameter.value);

}
//sort
sortParameter.addEventListener("change", () => {
    sortStudents(sortParameter.value,students);
});





