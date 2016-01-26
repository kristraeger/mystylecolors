// Swag Style Constructur

function SwagStyle(hairColor, eyeColor, skinTone, swagColors) {
	this.hairColor = hairColor;
	this.eyeColor = eyeColor;
	this.skinTone = skinTone;
	this.swagColors = swagColors;
	this.swagID = hairColor + eyeColor + skinTone;
}

//Building up the Swag Style Array

var SwagStyleArray = new Array ();

SwagStyleArray[0] = new SwagStyle("blonde","brown","cool","bl-br-c");
SwagStyleArray[1] = new SwagStyle("blonde","brown","warm","bl-br-w");

SwagStyleArray[2] = new SwagStyle("blonde","blue","cool","bl-bl-c");
SwagStyleArray[3] = new SwagStyle("blonde","blue","warm","bl-bl-w");

SwagStyleArray[4] = new SwagStyle("blonde","green","cool","bl-gr-c");
SwagStyleArray[5] = new SwagStyle("blonde","green","warm","bl-gr-w");

SwagStyleArray[6] = new SwagStyle("brown","brown","cool","br-br-c");
SwagStyleArray[7] = new SwagStyle("brown","brown","warm","br-br-w");

SwagStyleArray[8] = new SwagStyle("brown","blue","cool","br-bl-c");
SwagStyleArray[9] = new SwagStyle("brown","blue","warm","br-bl-w");

SwagStyleArray[10] = new SwagStyle("brown","green","cool","br-gr-c");
SwagStyleArray[11] = new SwagStyle("brown","green","warm","br-gr-w");

SwagStyleArray[12] = new SwagStyle("red","brown","cool","re-br-c");
SwagStyleArray[13] = new SwagStyle("red","brown","warm","re-br-w");

SwagStyleArray[14] = new SwagStyle("red","blue","cool","re-bl-c");
SwagStyleArray[15] = new SwagStyle("red","blue","warm","re-bl-w");

SwagStyleArray[16] = new SwagStyle("red","green","cool","re-gr-c");
SwagStyleArray[17] = new SwagStyle("red","green","warm","re-gr-w");

SwagStyleArray[18] = new SwagStyle("black","brown","cool","bc-br-c");
SwagStyleArray[19] = new SwagStyle("black","brown","warm","bc-br-w");

SwagStyleArray[20] = new SwagStyle("black","blue","cool","bc-br-c");
SwagStyleArray[21] = new SwagStyle("black","blue","warm","bc-br-w");

SwagStyleArray[22] = new SwagStyle("black","green","cool","bc-gr-c");
SwagStyleArray[23] = new SwagStyle("black","green","warm","bc-gr-w");


//create variable from array with input values
var inputHair = document.getElementsByClassName("input-hair")
var inputEye = document.getElementsByClassName("input-eye")
var inputSkin = document.getElementsByClassName("input-skin")

// show result based on user input

function getInfo() {

	//loop through each input array and find checked value
		//find hairColor
	for (var i = 0; i < inputHair.length; i++ ) {
		if(inputHair[i].checked) {
			var hairColor = (inputHair[i].name)
			break
		}
	}
	console.log(hairColor)

		//find eyeColor
	for (var i = 0; i < inputEye.length; i++ ) {
		if(inputEye[i].checked) {
			var eyeColor = (inputEye[i].name)
			break
		}
	}
	console.log(eyeColor)

		//find skinTone
	for (var i = 0; i < inputSkin.length; i++ ) {
		if(inputSkin[i].checked) {
			var skinTone = (inputSkin[i].name)
			break
		}
	}
	console.log(skinTone)

	//give checked value a unique ID
	var swagIDinput = hairColor + eyeColor + skinTone
	console.log(swagIDinput)

	//loop through array containing different styles and find matching ID
	for (var i = 0; i < SwagStyleArray.length; i++) {
		if (swagIDinput === SwagStyleArray[i].swagID) {
			var result = SwagStyleArray[i].swagColors
			console.log(result)
			break
		} 
	}

	// show matching content in modal
	if ( result != undefined ) {
		document.getElementById("resultLabel").innerHTML = "Say hi to your new Style!"
		document.getElementById("resultBody").innerHTML = result
		document.getElementById("resultButton").innerHTML = "Great, thanks!"
	} else {
		document.getElementById("resultLabel").innerHTML = "Hmmmm...."
		document.getElementById("resultBody").innerHTML = "Did you tell us your hair color, your eye color and the tone of your skin? Simply choose your answer from the questionnaire :)"
		document.getElementById("resultButton").innerHTML = "Will do!"
	}
	
}

//clear values when click on close button

function clearForm(){
	$ ('.active').removeClass('active')
	document.getElementById("userInput").reset();
}















