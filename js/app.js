'use strict';


let mark = 0;
let userName = prompt("Whats Your Name");
document.write("Hello" + "  " + userName + " ");


function userAnswer(question) {
    let userInput = prompt(question);
    return userInput;
}

let myQuestions = ["Software development is one of my hobbies? y/n",
    "This type of movies I like it (Science,Science Fiction and Action)? y/n",
    "Did I graduate From Jordan university of science and technology? y/n",
    "Is Mansaf my favorite dish? y/n",
    "Is Real Madrid my favorite football club ? y/n",
    "How long do I have in customer service experience??",
    "Wahts your guess about cities i fisted in jordan?"]

//console.log(myQuestion.length);
let userAnswers = [" ", " ", " ", " ", " ", " ", " "];

for (let i = 0; i < 7; i++) {
    userAnswers[i] = userAnswer(myQuestions[i]);
    switch (i) {
        case 0:
            if (userAnswers[0].toLocaleUpperCase() === "Y" || userAnswers[0].toUpperCase() === "YES") {
                alert("Ohhhh Its Correct");
                mark++;
            } else {
                alert("Obbs its my favorite hobbie");
            }
            break;
        case 1:
            if (userAnswers[1].toLowerCase() === "y" || userAnswers[1].toLowerCase() === "yes") {
                alert("Ohhhh Its Correct");
                mark++;
            } else {
                alert("Obbs I like This type of movies");
            }
            break;
        case 2:
            if (userAnswers[2].toLowerCase() === "y" ||userAnswers[2].toLowerCase() === "yes") {
                alert("Ohhhh Its Correct")
                mark++;
            } else {
                alert("Obbs I graduate From JUST");
            }
            break;
        case 3:
            if (userAnswers[3].toLowerCase() === "y" || userAnswers[3].toLowerCase() === "yes") {
                alert("Ohhhh Its Correct");
                mark++;
            } else {
                alert('Obbs you must meet me in Grand Omaya Restaurant and Cafe- Irbid');
            }
            break;
        case 4:
            if (userAnswers[4].toLowerCase() === "y" || userAnswers[4].toLowerCase() === "yes") {
                alert("Ohhhh Its Correct");
                mark++;
            } else {
                alert("Obbs Real Madrid my favorite football club");
            }
            break;
        case 5:
            let correctAnswer = 3;
            for (let i = 2; i >= 0; i--) {
                userAnswers[5]= prompt(myQuestions[5]);

                if (parseInt(userAnswers[5]) === correctAnswer) {
                    alert("Ohhhh Thats Correct")
                    mark++;
                    break;
                } else if (parseInt(userAnswers[5]) > correctAnswer && i > 0) {
                    alert("Obbs Your answer is too high you have only " + i + " opportunities")

                } else if (parseInt(userAnswers[5]) < correctAnswer && i > 0) {
                    alert("Obbs Your answer is too low you have only " + i + " opportunities")
                } else if (i > 0) {
                    //alert(" you have only " + i + " opportunities");
                }
                else if (i === 0) {
                    alert("I have 3 Years experience in customer service");
                }
            }
            break;
        case 6:
            let myCity = ["amman", "alzarqa", "almafraq", "alkarak"];
            let x = 0;

            for (let j = 5; j > 0; j--) {


                // for (let n=0 ; n<=5 ; n++){
                userAnswers[6] = prompt("Wahts your guess about cities i fisted in jordan?")
                // if(userCity.toLocaleLowerCase === myCity )
                if (userAnswers[6].toLowerCase() === myCity[0] || userAnswers[6].toLowerCase() === myCity[1] || userAnswers[6].toLowerCase() === myCity[2] || userAnswers[6].toLowerCase() === myCity[3]) {
                    alert("Ohhh its correct");
                    mark++;
                    x = 1 ;
                    break;
                } else {
                    alert("Ohhh Its wrong try again you have only " + j + " opportunities");
                }
                // }
            }
            if(x = 0){
            alert(`correct answer is ${myCity[0]} , ${myCity[1]}, ${myCity[2]} and ${myCity[3]}`);
            }
            break;
        default:
            break;
    }
}
