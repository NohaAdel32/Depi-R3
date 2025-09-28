const Person=function(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.introduce = function() {
    return `My Name is ${this.name}, and  I am ${this.age} years old`
}

const Teacher=function(name,age,subject){
    Person.call(this,name,age)
    this.subject=subject;
}
Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher;

const Student=function(name,age,grade){
    Person.call(this,name,age);
    this.grade=grade;
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;

Student.Compare=function(student1,student2){
     if (student1.grade > student2.grade) return `${student1.name} scored higher.`;
  if (student1.grade < student2.grade) return `${student1.name} scored higher.`;
  return "Both students have the same score.";
}

const marawan = new Student("Marawan Emad", 25,90)

const Laila= new Student("Laila Emad", 26,80)
console.log("🚀 ~ marawan:", marawan.introduce())
console.log( Student.Compare(marawan,Laila))