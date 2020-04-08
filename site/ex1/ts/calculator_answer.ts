/**********************************************




const ENTER_KEY = 13;


// get references to all the HTML elements
const calcInput  = document.getElementById("calculator-input") as HTMLInputElement;
const calcButton = document.getElementById("calculator-submit-button") as HTMLButtonElement;
const calcResult = document.getElementById("calculator-results") as HTMLDivElement;



// function to evaluate the input string and
//  give our calculated answer
function processInput(input: string): [string, boolean] {
	// try to evaluate input
	try {
		// eval is a magic function that will evaluate the input
		// (shouldn't really use this production ever but it's
		//   easier then making your entire own calculator)
		return [eval(input), true];
	}
	catch(e) {
		return ["", false];
	}
}


// add listener for "oninput" so that when
//  the user changes what's in the text field
//  we can disable or enable the submit button
//  and we want to disable the button if the text
//  is blank or just whitespace
calcInput.addEventListener("input", function(event: InputEvent) {
	// set button disabled if the text is empty
	if (calcInput.value.trim() == "")
		calcButton.disabled = true;
	else
		calcButton.disabled = false;
});
// add listener for "onkeyup" so that we can
//  check when the user presses 'enter' and we
//  can trigger our submit button
calcInput.addEventListener("keyup", function(event: KeyboardEvent) {
	// check if user pressed enter to click our button
	if (event.keyCode == ENTER_KEY)
		calcButton.click();
});


// add listener for "onclick" so that when
//  the user clicks the submit button, we can
//  display the result
calcButton.addEventListener("click", function() {
	// process input
	const [result, success] = processInput(calcInput.value);


	if (!success) {
		// set invalid text
		calcResult.innerHTML = "Invalid input!";
	}
	else {
		// set text to be the result
		calcResult.innerHTML = result;
	}

	// clear the input
	calcInput.value = "";
});




**********************************************/