function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
  this.courseLoad = {};
}

function Course(courseName, department, numCredits){
  this.courseName = courseName;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
}

var bob = new Student("Bob", "McGee");
var claire = new Student("Claire", "McGoo");
var algebra = new Course("Algebra", "Math", 5);
var trig = new Course("Trig", "Math", 6);
var ceramics = new Course("Ceramics", "Art", 5);

Course.prototype.addStudent = function(student){
  this.students.push(student);
};

Student.prototype.enroll = function(course){
  this.courses.push(course);
  course.addStudent(this);
  if (this.courseLoad[course.department]){
    this.courseLoad[course.department] += course.numCredits;
  }
  else{
    this.courseLoad[course.department] = course.numCredits;
  }
};

bob.enroll(algebra)
bob.enroll(trig)
claire.enroll(trig)
claire.enroll(ceramics)

console.log(claire.courseLoad);
console.log(bob.courseLoad);
