
//Write a function gradeScore(score) that returns a letter grade:
// 70 to 100  →  'A'
//• 60 to 69    →  'B'
//• 50 to 59    →  'C'
//• 40 to 49    →  'D'
//• Below 40   →  'F'

//Test it with: 85, 62, 45, and 30.
function gradeScore(score){
    if (score >= 70 && score <= 100 ){
        console.log("A")
    }else if(score >= 60 && score <= 69){
        console.log("B")
    }else if(score >= 50 && score <= 59){
        console.log("C")
    }else if (score >= 40 && score <= 49){
        console.log("D")
    }else{
         console.log("F")
    }
}

gradeScore(85)
gradeScore(62)
gradeScore(45)
gradeScore(30)