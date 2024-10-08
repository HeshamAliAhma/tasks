const student = {
  firstname: "Hesham",
  lastname: "Ali",
  age: 19,
  grades: [85, 90, 78, 92,100,78],

  fullName: function() {
    return `${this.firstname} ${this.lastname}`;
  },

  calculateAverage: function() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },

  getStudentInfo: function() {
    const averageGrade = this.calculateAverage();
    return `Student: ${this.fullName()}, Age: ${this.age}, Average Grade: ${averageGrade}.`;
  }
};

console.log(student.getStudentInfo());
