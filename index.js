let perIDs = [
    "g1i",
    "g2i",
    "g3i",
    "g4i",
    "g5i",
    "g6i"
]
let grades = []


// Letter Grade	Percent Grade	4.0 Scale
// A+	        97-100	        4.0
// A	        93-96	        4.0
// A-	        90-92	        3.7
// B+	        87-89	        3.3
// B	        83-86	        3.0
// B-	        80-82	        2.7
// C+	        77-79	        2.3
// C	        73-76	        2.0
// C-	        70-72	        1.7
// D+	        67-69	        1.3
// D	        65-66	        1.0
// E/F	        Below 65	    0.0

function caculate() {
    for (let i = 0; i < perIDs.length; i++) {
        const element = perIDs[i];
        let grade
        switch (document.getElementById(element).value) {
            case "A":
                grade = 4.0
                break;
            case "A-":
                grade = 3.7
                break;
            case "B+":
                grade = 3.3
                break;
            case "B":
                grade = 3.0
                break;
            case "B-":
                grade = 2.7
                break;
            case "C+":
                grade = 2.3
                break;
            case "C":
                grade = 2.0
                break;
            case "C":
                grade = 1.7
                break;
            case "D+":
                grade = 1.3
                break;
            case "D":
                grade = 1.0
                break;
            case "D-":
                grade = 0.7
                break;
            case "F+":
                grade = 0.3
                break;
            case "F":
                grade = 0
                break;
            default:
                grade = 0
                break;
        }
        grades[i] = grade;
    }
    document.getElementById("GPA").innerHTML = Math.round(average(grades)*10)/10
    document.getElementById("worst").innerHTML = Math.min(...grades)
}

const average = array => array.reduce((a, b) => a + b) / array.length;