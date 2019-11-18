
var thirdPerSing = ["He", "She", "It"];
var ran3PSIndex = Math.floor(Math.random() * 3);

var sum = [["sum","I was "], ["es","You have been "], ["est", thirdPerSing[ran3PSIndex] + " was "], ["sumus","We have been "], ["estis","Ya'll were "], ["sunt", "They have been "]];

var eram = [["eram","I had been "], ["eras","You had been "], ["erat", thirdPerSing[ran3PSIndex] + " had been "], ["eramus","We had been "], ["eratis","Ya'll had been "], ["erant", "They had been "]];

var ero = [["ero","I will have been "], ["eris","You will have been "], ["erit", thirdPerSing[ran3PSIndex] + " will have been "], ["erimus","We will have been "], ["eritis","Ya'll will have been "], ["erunt", "They will have been "]];


var verbsFirst = [["am", "loved"],  ["d", "given"],["laud", "praised"],["serv", "saved"],["voc", "called"], ["par", "prepared"]];

var verbsSecond = [["vidē", "seen"], ["terrē", "frightened"], ["tenē", "held"], ["monē", "warned"],["timē", "feared"],["habē", "held"]];


var perEndingsFirst = [["or", "I am "], ["āris", "You are "], ["atur", thirdPerSing[ran3PSIndex] + " is "], ["āmur", "We are "], ["āmini", "Ya'll are "], ["antur", "They are "]];

var perEndingsFirstImp = [["ābar", "I was being "], ["ābaris", "You used to be "], ["ābatur", thirdPerSing[ran3PSIndex] + " used to be "], ["ābamur", "We kept being "], ["ābamini", "Ya'll were being "], ["ābantur", "They used to be "]];

var perEndingsFuture = [["ābor", "I will be "], ["āberis", "You will be "], ["ābitur", thirdPerSing[ran3PSIndex] + " will be "], ["abimur", "We will be "], ["ābimini", "Ya'll will be "], ["ābuntur", "They will be "]];



var answers = ["serBtnA", "serBtnA1", "serBtnB", "serBtnB2", "serBtnC", "serBtnC3"];



var verbsFirstPerPass = [["amatus", "amata","amatum","amati"," loved"],  ["datus", "data","datum","datae"," given"],["laudatus", "laudata","laudatum","laudati"," praised"],["servatus", "servata","servatum","servatae"," saved"],["vocatus", "vocata","vocatum", "vocati"," called"], ["paratus", "parata", "paratum", "paratae"," prepared"]];





var randIndex = Math.floor(Math.random() * 6);
var randPEIndex = Math.floor(Math.random() * 6);
var rand6VerbPickIndex = Math.floor(Math.random() * 6);
var randVerbPickIndex = Math.floor(Math.random() * 4);



var futTV0 =  verbsFirst[randIndex][0] + perEndingsFuture[randPEIndex][0];
var presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
var impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
var perTV3 = verbsFirstPerPass[randIndex][0] + " " + sum[randPEIndex][0];
var pluPerTV4 = verbsFirstPerPass[randIndex][0] + " " + eram[randPEIndex][0];
var futPerTV5 = verbsFirstPerPass[randIndex][0] + " " + ero[randPEIndex][0];


if (randPEIndex < 3){
if (ran3PSIndex == 0){
	var perTV3 = verbsFirstPerPass[randIndex][0] + " " + sum[randPEIndex][0];
	var pluPerTV4 = verbsFirstPerPass[randIndex][0] + " " + eram[randPEIndex][0];
	var futPerTV5 = verbsFirstPerPass[randIndex][0] + " " + ero[randPEIndex][0];
}

if (ran3PSIndex == 1){
	var perTV3 = verbsFirstPerPass[randIndex][1] + " " + sum[randPEIndex][0];
	var pluPerTV4 = verbsFirstPerPass[randIndex][1] + " " + eram[randPEIndex][0];
	var futPerTV5 = verbsFirstPerPass[randIndex][1] + " " + ero[randPEIndex][0];
}

if (ran3PSIndex == 2){
	var perTV3 = verbsFirstPerPass[randIndex][2] + " " + sum[randPEIndex][0];
	var pluPerTV4 = verbsFirstPerPass[randIndex][2] + " " + eram[randPEIndex][0];
	var futPerTV5 = verbsFirstPerPass[randIndex][2] + " " + ero[randPEIndex][0];
}

} else {
	var perTV3 = verbsFirstPerPass[randIndex][3] + " " + sum[randPEIndex][0];
	var pluPerTV4 = verbsFirstPerPass[randIndex][3] + " " + eram[randPEIndex][0];
	var futPerTV5 = verbsFirstPerPass[randIndex][3] + " " + ero[randPEIndex][0];
}



var rand6TenseVerbPick =[futTV0, presTV1,impTV2, perTV3, pluPerTV4, futPerTV5];

var randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish1 = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish2 = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];

var randVerbPickEnglish3 = sum[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
var randVerbPickEnglish4 = eram[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
var randVerbPickEnglish5 = ero[randPEIndex][1] + verbsFirstPerPass[randIndex][4];

var rand6TenseVerbPickEnglishArray = [randVerbPickEnglish0,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3,randVerbPickEnglish4, randVerbPickEnglish5];



var num_questions = 5;
var count = 0;




function incrementCount(){
	count++;
}



//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var serBtnA = get(answers[0]);
    var serBtnB = get(answers[2]);
    var serBtnC = get(answers[4]);

    var serBtnA1 = get(answers[1]);
    var serBtnB2 = get(answers[3]);
    var serBtnC3 = get(answers[5]);





//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "massPass";}

function gameTitle() {get("startButton").innerHTML = "Start to start Massive Passives!";}





//This loads the names of the games

    appName();
    //gameTitle();


function resetColors(){



		serBtnA.style.backgroundColor = "white";
		serBtnA.style.border = "white";
		serBtnA.style.color = "black";
		serBtnA.disabled =false;
		document.getElementById(answers[0]).style.backgroundColor = "white";

		serBtnA1.style.color = "black";
		serBtnA1.style.backgroundColor = "white";
		serBtnA1.style.border = "white";
		serBtnA1.disabled = false;
		document.getElementById(answers[1]).style.backgroundColor = "white";



		serBtnB.style.backgroundColor = "white";
		serBtnB.style.border = "white";
		serBtnB.style.color = "black";
		serBtnB.disabled =false;
		document.getElementById(answers[2]).style.backgroundColor = "white";

		serBtnB2.style.color = "black";
		serBtnB2.style.backgroundColor = "white";
		serBtnB2.style.border = "white";
		serBtnB2.disabled = false;
		document.getElementById(answers[3]).style.backgroundColor = "white";


		serBtnC.style.backgroundColor = "white";
		serBtnC.style.border = "white";
		serBtnC.style.color = "black";
		serBtnC.disabled =false;
		document.getElementById(answers[4]).style.backgroundColor = "white";

		serBtnC3.style.color = "black";
		serBtnC3.style.backgroundColor = "white";
		serBtnC3.style.border = "white";
		serBtnC3.disabled = false;
		document.getElementById(answers[5]).style.backgroundColor = "white";

		responseButton.innerHTML = "";
		responseButton.style.color = "";

		document.getElementById("serpensA").style.backgroundColor = "white";
		document.getElementById("serpensA1").style.backgroundColor = "white";
		document.getElementById("serpensB").style.backgroundColor = "white";
		document.getElementById("serpensB2").style.backgroundColor = "white";
		document.getElementById("serpensC").style.backgroundColor = "white";
		document.getElementById("serpensC3").style.backgroundColor = "white";

}


var correctAns = 0;
var correctAnswerTotal = 1;








//Score variables and functions



    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


 //Timer variables
	var timeleft = 20;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			resetColors();
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
    			correctAns = 0;


  }

}



function stopTimer() {


	clearInterval(countdown);


}


function resetTimer(){

	if (correctAns >= 3){
	resetColors();
	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
	correctAns = 0;
}
}

function resetOnCorrectAnswer(){


	//resetColors();

	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";

}






function enableButtons(){

	serBtnA.disabled = false;
	serBtnB.disabled = false;
	serBtnC.disabled = false;

	serBtnA1.disabled = false;
	serBtnB2.disabled = false;
	serBtnC3.disabled = false;


}

function disableButtons(){
	serBtnA.disabled = true;
	serBtnB.disabled = true;
	serBtnC.disabled = true;

	serBtnA1.disabled = true;
	serBtnB2.disabled = true;
	serBtnC3.disabled = true;
}




function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }


								 //This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
								 	var currentIndex = array.length;
								 	var temporaryValue;
								 	//var randIndex;

								 	while (currentIndex > 0){
								 		randomIndex = Math.floor(Math.random() * currentIndex);
								 		currentIndex --;

								 		temporaryValue = array[currentIndex];
								 		array[currentIndex] = array[randomIndex];
								 		array[randomIndex] = temporaryValue;
								 	}
								 		return array;
}




function resetVerb(){



	thirdPerSing = ["He", "She", "It"];
	ran3PSIndex = Math.floor(Math.random() * 3);

	sum = [["sum","I was "], ["es","You have been "], ["est", thirdPerSing[ran3PSIndex] + " was "], ["sumus","We have been "], ["estis","Ya'll were "], ["sunt", "They have been "]];

	eram = [["eram","I had been "], ["eras","You had been "], ["erat", thirdPerSing[ran3PSIndex] + " had been "], ["eramus","We had been "], ["eratis","Ya'll had been "], ["erant", "They had been "]];

	ero = [["ero","I will have been "], ["eris","You will have been "], ["erit", thirdPerSing[ran3PSIndex] + " will have been "], ["erimus","We will have been "], ["eritis","Ya'll will have been "], ["erunt", "They will have been "]];


	verbsFirst = [["am", "loved"],  ["d", "given"],["laud", "praised"],["serv", "saved"],["voc", "called"], ["par", "prepared"]];

	verbsSecond = [["vidē", "seen"], ["terrē", "frightened"], ["tenē", "held"], ["monē", "warned"],["timē", "feared"],["habē", "held"]];


	perEndingsFirst = [["or", "I am "], ["āris", "You are "], ["atur", thirdPerSing[ran3PSIndex] + " is "], ["āmur", "We are "], ["āmini", "Ya'll are "], ["antur", "They are "]];

	perEndingsFirstImp = [["ābar", "I was being "], ["ābaris", "You used to be "], ["ābatur", thirdPerSing[ran3PSIndex] + " used to be "], ["ābamur", "We kept being "], ["ābamini", "Ya'll were being "], ["ābantur", "They used to be "]];

	perEndingsFuture = [["ābor", "I will be "], ["āberis", "You will be "], ["ābitur", thirdPerSing[ran3PSIndex] + " will be "], ["abimur", "We will be "], ["ābimini", "Ya'll will be "], ["ābuntur", "They will be "]];



	answers = ["serBtnA", "serBtnA1", "serBtnB", "serBtnB2", "serBtnC", "serBtnC3"];



	verbsFirstPerPass = [["amatus", "amata","amatum","amati"," loved"],  ["datus", "data","datum","datae"," given"],["laudatus", "laudata","laudatum","laudati"," praised"],["servatus", "servata","servatum","servatae"," saved"],["vocatus", "vocata","vocatum", "vocati"," called"], ["paratus", "parata", "paratum", "paratae"," prepared"]];





	randIndex = Math.floor(Math.random() * 6);
	randPEIndex = Math.floor(Math.random() * 6);
	rand6VerbPickIndex = Math.floor(Math.random() * 6);
	randVerbPickIndex = Math.floor(Math.random() * 4);



	futTV0 =  verbsFirst[randIndex][0] + perEndingsFuture[randPEIndex][0];
	presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
	impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
	perTV3 = verbsFirstPerPass[randIndex][0] + " " + sum[randPEIndex][0];
	pluPerTV4 = verbsFirstPerPass[randIndex][0] + " " + eram[randPEIndex][0];
	futPerTV5 = verbsFirstPerPass[randIndex][0] + " " + ero[randPEIndex][0];

	if (randPEIndex < 3){
	if (ran3PSIndex == 0){
		perTV3 = verbsFirstPerPass[randIndex][0] + " " + sum[randPEIndex][0];
		pluPerTV4 = verbsFirstPerPass[randIndex][0] + " " + eram[randPEIndex][0];
		futPerTV5 = verbsFirstPerPass[randIndex][0] + " " + ero[randPEIndex][0];
	}

	if (ran3PSIndex == 1){
		perTV3 = verbsFirstPerPass[randIndex][1] + " " + sum[randPEIndex][0];
		pluPerTV4 = verbsFirstPerPass[randIndex][1] + " " + eram[randPEIndex][0];
		futPerTV5 = verbsFirstPerPass[randIndex][1] + " " + ero[randPEIndex][0];
	}

	if (ran3PSIndex == 2){
		perTV3 = verbsFirstPerPass[randIndex][2] + " " + sum[randPEIndex][0];
		pluPerTV4 = verbsFirstPerPass[randIndex][2] + " " + eram[randPEIndex][0];
		futPerTV5 = verbsFirstPerPass[randIndex][2] + " " + ero[randPEIndex][0];
	}

	} else {
		perTV3 = verbsFirstPerPass[randIndex][3] + " " + sum[randPEIndex][0];
		pluPerTV4 = verbsFirstPerPass[randIndex][3] + " " + eram[randPEIndex][0];
		futPerTV5 = verbsFirstPerPass[randIndex][3] + " " + ero[randPEIndex][0];
	}



	rand6TenseVerbPick =[futTV0, presTV1,impTV2, perTV3, pluPerTV4, futPerTV5];


resetColors();


}




function serpens132() {
	resetVerb();
	 countDownTimer();
	 timeleft = 20;
	 countdown = setInterval(countDownTimer,1000);


	 resetColors();
	 //setRandomSerpIndices();
	 enableButtons();
	 startButton.disabled = true;







subject = perEndingsFuture[randPEIndex][1] + verbsFirst[randIndex][1];

get(answers[0]).innerHTML = subject;

//This sets the false subject in serpensA1




fakeSubject = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
get(answers[1]).innerHTML = fakeSubject;







//object = newObject.nounForm +accPE1;
object = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
get(answers[2]).innerHTML = object;



fakeObject = sum[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
get(answers[3]).innerHTML = fakeObject;




verb = eram[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
get(answers[4]).innerHTML = verb;

fakeVerb = ero[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
//fakeVerb = falseVerb.verbForm + pres3rdPl;
get (answers[5]).innerHTML = fakeVerb;




get("startButton").innerHTML =  rand6TenseVerbPick[rand6VerbPickIndex];




incrementCount();





	if (count > num_questions) {
	 resetColors();
	 serBtnA.innerHTML = "";
	 serBtnB.innerHTML = "";
	 serBtnC.innerHTML = "";

	 serBtnA1.innerHTML = "";
	 serBtnB2.innerHTML = "";
	 serBtnC3.innerHTML = "";


	 startButton.innerHTML = "Click to play again!"
	 startButton.disabled = false;
	 count = 0;
	 document.getElementById("boxThree").innerHTML = "Score";
	 responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		points = 0;

	 stopTimer();
	 document.getElementById("boxOne").innerHTML = "Timer";

	}


}



function clickedButton1(){







	if (document.getElementById("startButton").innerHTML == futTV0 &&
		document.getElementById(answers[0]).innerHTML == perEndingsFuture[randPEIndex][1] + verbsFirst[randIndex][1]
){
		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnA.style.backgroundColor = "yellow";
		serBtnA.style.border = "yellow";
		document.getElementById("serpensA").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
//resetColors();
resetOnCorrectAnswer();
//resetVerb();
		//resetTimer();


	} else {

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";


	}

}


function clickedButton2(){






if (document.getElementById("startButton").innerHTML == presTV1 &&
	document.getElementById(answers[1]).innerHTML == perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1]
){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		//responseButton.innerHTML = correctAns;
		document.getElementById("boxThree").innerHTML = points;


		serBtnA1.style.backgroundColor = "yellow";
		serBtnA1.style.border = "yellow";
		document.getElementById("serpensA1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
//resetColors();
resetOnCorrectAnswer();
//resetVerb();
		//resetTimer();

	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}



}






function clickedButton3(){





	if (document.getElementById("startButton").innerHTML == impTV2 &&
		document.getElementById(answers[2]).innerHTML == perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1]
){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB.style.backgroundColor = "yellow";
		serBtnB.style.border = "yellow";
		document.getElementById("serpensB").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
//resetColors();
resetOnCorrectAnswer();
//resetVerb();
		//resetTimer();

	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton4(){






if (document.getElementById("startButton").innerHTML == perTV3 &&
	document.getElementById(answers[3]).innerHTML == sum[randPEIndex][1] + verbsFirstPerPass[randIndex][4]
){


		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB2.style.backgroundColor = "yellow";
		serBtnB2.style.border = "yellow";
		document.getElementById("serpensB2").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
//resetColors();
		resetOnCorrectAnswer();
		//resetVerb();
				//resetTimer();
			} else {
				wrongAnswerAudio();
				points -= pointsPerCorrectAnswer/2;
				document.getElementById("boxThree").innerHTML = points;


				serBtnB2.style.color = "red";
				serBtnB2.style.backgroundColor = "black";
				serBtnB2.style.border = "black";
				serBtnB2.disabled = true;
				document.getElementById("serpensB2").style.backgroundColor = "black";
				responseButton.style.color = "black";

				responseButton.innerHTML = "Eheu!";

			}


}







function clickedButton5(){







	if (document.getElementById("startButton").innerHTML == pluPerTV4 &&
		document.getElementById(answers[4]).innerHTML == eram[randPEIndex][1] + verbsFirstPerPass[randIndex][4]

){



		correctAnswerAudio();
		//clickedCorrectAnswerFiveAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnC.style.backgroundColor = "yellow";
		serBtnC.style.border = "yellow";
		document.getElementById("serpensC").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";


		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
//resetColors();
resetOnCorrectAnswer();
//resetVerb();

		//resetTimer();
	} else {

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
	responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton6(){






//serBtnC3.innerHTML = rand6TenseVerbPickEnglishArray[rand6VerbPickIndex];
	//serBtnC3.style.backgroundColor = ero[randPEIndex][1] + verbsFirstPerPass[randIndex][4];
//document.getElementById(answers[0]).innerHTML == rand6TenseVerbPick[rand6VerbPickIndex];

if (document.getElementById("startButton").innerHTML == futPerTV5 &&
	document.getElementById(answers[5]).innerHTML == ero[randPEIndex][1] + verbsFirstPerPass[randIndex][4]

){



		correctAnswerAudio();
		//clickedCorrectAnswerSixAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.backgroundColor = "yellow";
		serBtnC3.style.border = "yellow";
		document.getElementById("serpensC3").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";

		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
//resetColors();
    resetOnCorrectAnswer();
		//resetVerb();


		//resetTimer();
	} else {
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
    responseButton.style.color = "black";
		responseButton.innerHTML = "Eheu!";

	}


}
