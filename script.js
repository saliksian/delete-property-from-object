var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("Before delete object property: ");
for (var x in student) {
  console.log(x + ": " + student[x]);
}

delete student.rollno; // delete rollno property from object student

console.log("After delete object property: ");
for (var x in student) {
  console.log(x + ": " + student[x]);
}
