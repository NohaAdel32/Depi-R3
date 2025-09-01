
let successArray=[]
let failArray=[]
function filter(filterParameter,allArray,sort){

    if(filterParameter === "all"){
         sortStudents(sort,allArray)
    } else if (filterParameter === "success") {
       
        let successArray = allArray.filter(student => student.grade > 60);
        sortStudents(sort, successArray);
    } else if (filterParameter === "fail") {
       
        let failArray = allArray.filter(student => student.grade <= 60);
        sortStudents(sort, failArray);
    }

}

function sortStudents(sortParameter,allArray){
      let sorted = [...allArray]; 
    
    if (sortParameter === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        view(sorted)
    } else if (sortParameter === "grade") {
        sorted.sort((a, b) => Number(a.grade) - Number(b.grade));
        view(sorted)
    }
}

