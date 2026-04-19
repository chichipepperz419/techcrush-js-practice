//BONUS: Write a function called summarizeStudent that accepts an array of student objects 
// (each with name and score). The function should return a new array of strings in this format:
//'Amara scored 88 — Grade: B'

function summarizeStudent(students) {
  return students.map(function(student) {
    return `${student.name} scored ${student.score} — Grade: ${gradeScore(student.score)}`;
  });
}

function gradeScore(score) {
  if (score >= 70) return 'A';
  else if (score >= 60) return 'B';
  else if (score >= 50) return 'C';
  else if (score >= 40) return 'D';
  else return 'F';
}

let students = [
  { name: 'Amara', score: 88 },
  { name: 'John', score: 62 },
  { name: 'Tunde', score: 45 },
  { name: 'Ada', score: 30 }
];

console.log(summarizeStudent(students));