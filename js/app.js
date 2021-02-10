'use strict'
let mark=0;
let userName = prompt("Whats Your Name");
document.write("Hello" + "  " + userName + " " );
let userHobby= prompt("Software development is one of my hobbies? y/n");

if(userHobby.toLocaleUpperCase() === "Y" || userHobby.toUpperCase()==="YES"){
    alert("Ohhhh Its Correct");
    mark++
}else{
    alert("Obbs its my favorite hobbie");
}
let userMovies=prompt("This type of movies I like it (Science,Science Fiction and Action)? y/n")
if(userMovies.toLowerCase() === "y" || userMovies.toLowerCase() === "yes"){
    alert("Ohhhh Its Correct");
    mark++;
}else{
    alert("Obbs I like This type of movies");
}
let userUniversity=prompt("Did I graduate From Jordan university of science and technology? y/n");
if(userUniversity.toLowerCase() === "y" || userUniversity.toLowerCase() === "yes"){
    alert("Ohhhh Its Correct")
    mark++;
}else{
    alert("Obbs I graduate From JUST");
}
let userDish = prompt("Is Mansaf my favorite dish? y/n");
if(userDish.toLowerCase()=== "y" || userDish.toLowerCase() === "yes"){
    alert("Ohhhh Its Correct");
    mark++;
}else{
    alert('Obbs you must meet me in Grand Omaya Restaurant and Cafe- Irbid');
}
let userClub = prompt("Is Real Madrid my favorite football club ? y/n");
if(userDish.toLowerCase()=== "y" || userDish.toLowerCase() === "yes"){
    alert("Ohhhh Its Correct");
    mark++;
}else{
    alert("Obbs Real Madrid my favorite football club");
}

let correctAnswer = 3;
let userGuess;
for(let i=3 ; i>=0 ; i--){
userGuess = prompt("How long do I have in customer service experience??")
    
    if (parseInt(userGuess) === correctAnswer) {
        alert("Ohhhh Thats Correct")
        mark++;
        break;
    }else if(parseInt(userGuess)>correctAnswer && i>0){
        alert("Obbs Your answer is too high you have only " + i + " opportunities")

    }else if(parseInt(userGuess)<correctAnswer && i>0){
        alert("Obbs Your answer is too low you have only " + i + " opportunities")
    }else if(i>0){
        //alert(" you have only " + i + " opportunities");
    }

        else if(i === 0)
        {
        alert("I have 3 Years experience in customer service");
        }
    }

    let myCity = ["amman","alzarqa","almafraq","alkarak"];
    let userCity;

    for(let j=5 ; j >0 ; j--){

        
        // for (let n=0 ; n<=5 ; n++){
            userCity = prompt("Wahts your guess about cities i fisted in jordan?")
        // if(userCity.toLocaleLowerCase === myCity )
        if(userCity.toLowerCase() === myCity[0] || userCity.toLowerCase() === myCity[1] || userCity.toLowerCase() === myCity[2] || userCity.toLowerCase() === myCity[3])
        {
            alert("Ohhh its correct");
            mark++;
            break;
        }else {
            alert("Ohhh Its wrong try again you have only " + j + " opportunities");
        }
        // }
    }

    document.write("Your correct answer score" + " " + mark + " " +"out of 7");



// console.log('userDish' + userDish);
// console.log('userHobby' + userHobby);
// console.log('userName' + userName);
// console.log('userUniversity' + userUniversity );
// console.log('userMovies' + userMovies);
// console.log('userClub' + userClub);