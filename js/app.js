'use strict';
let score = 0 ;
let userName = prompt("please enter your name", "your name").toLowerCase();
// console.log(userName);
alert("thank you for visiting my page " + userName);

let myName = prompt ("my name is aya?");
if (myName.toLowerCase()==="yes"||myName.toLowerCase()==="y") {
    // console.log("thats corecct my name is aya!");
    alert("thats corecct my name is aya!");
    score++ ;
}  else if (myName.toLowerCase()==="no"||myName.toLowerCase()==="n") {
//    console.log("thats false my name is aya!");
    alert("thats false my name is aya!");

  }


  let myAge = prompt ("my age is 23?");
if (myAge.toLowerCase()==="yes"||myAge.toLowerCase()==="y") {
    // console.log("thats corecct my age is 23!");
    alert("thats corecct my age is 23!");
    score++;
}  else if (myAge.toLowerCase()==="no"||myAge.toLowerCase()==="n") {
    // console.log ("thats false my age is 23!");
    alert("thats false my age is 23!");

  }

  let myEducation = prompt (" did i study architecture in university?");
if (myEducation.toLowerCase()==="yes"||myEducation.toLowerCase()==="y") {
    // console.log("thats corecct i'm studied architecture in university!");
    alert("thats corecct i'm studied architecture in university!");
    score++;
}  else if (myEducation.toLowerCase()==="no"||myEducation.toLowerCase()==="n") {
//    console.log("thats false i'm  studied architecture in university !");
    alert("thats false i'm  studied architecture in university !");

  }
  
  let myGraduation = prompt (" did i graduate from  university?");
if (myGraduation.toLowerCase()==="yes"||myGraduation.toLowerCase()==="y") {
    // console.log("thats corecct i'm graduated from university!");
    alert("thats corecct i'm graduated from university!");
    score++;
  }  else if (myGraduation.toLowerCase()==="no"||myGraduation.toLowerCase()==="n") {
    // console.log("thats false i'm  graduated from university!");
    alert("thats false i'm  graduated from university!");

  }
   
  let myExperience = prompt (" did i have a work experience ?");
if (myExperience.toLowerCase()==="yes"||myExperience.toLowerCase()==="y") {
  // console.log("thats false i'm fresh graduated so i'm don't have work experience!");
    alert("thats false i'm fresh graduated so i'm don't have work experience!");
}  else if (myExperience.toLowerCase()==="no"||myExperience.toLowerCase()==="n") {
//    console.log("thats corecct i'm fresh graduated so i'm don't have work experience!");
    alert("thats corecct i'm fresh graduated so i'm don't have work experience!");
    score++;
  }
  alert("thank you for visiting my page " + userName);
  

let guessNmber = 'num' ;
function q6 () {
  guessNmber = prompt (' guess ! what is the number in my mind ?') ;
  guessNmber = (guessNmber);
  for (let i =1;i < 4;i++) {
    if ((guessNmber)=== 15) {
      alert ('great , the number is 15');
      console.log('great , the number is 15');
      score++;
      break;
    } else if ((guessNmber) < 15) {
      alert ('too low');
      console.log ('too low');
      guessNmber = prompt ('guess another number greater than this number');
    } else if ((guessNmber) > 15 ) {
      alert ('too high');
      console.log('too high');
      guessNmber = prompt('guess another number less than this number');
    }

  }
  alert('15 is the correct answer');
  console.log('15 is the correct answer');
} q6();


let myColor= 'color';
function q7(){
  myColor = ['blue', 'red'];
  for (let c=0 ; c<6 ; c++){
    let userColor = prompt('my favarout color is ?  ');
    userColor = userColor.toLowerCase();

    if(userColor === myColor[0] || userColor === myColor[1] ){
      alert('its right this is one of my colors');
      console.log('its right this is one of my colors');
      score++;
      break;
    }else {
      alert('its wrong this is not one of my colors');
      console.log('its wrong this is not one of my colors');
    }
  }
  alert('me best colors is ' + myColor);
  console.log('me best colors is ' + myColor);
  alert('your score is ' + score ) ;
  console.log('your score is ' + score ) ;
  alert('welcom ' + userName);
  console.log('welcom ' + userName);
} q7();


 






















  


