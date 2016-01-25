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


// show result based on user input

function getInfo() {
	//check for values of userinfo and set them to variables
	var inputHair = document.getElementsByClassName("hairColor")

	


	//give input a unique ID
	var swagIDinput = hairColor + eyeColor + skinTone
	console.log(swagIDinput)

	//loop through array until it finds the object with matching ID
	for (var i = 0; i < SwagStyleArray.length; i++) {
		if (swagIDinput === SwagStyleArray[i].swagID) {
			var result = SwagStyleArray[i].swagColors
			console.log(result)
			break
		} else {
			console.log("did not find")
		}
	}

	// result modal
	document.getElementById("resultLabel").innerHTML = "Your Swag Colors"
	document.getElementById("resultBody").innerHTML = result
}

//clear values when close button is clicked

function clearForm(){
	document.getElementById("userInput").reset();
}













