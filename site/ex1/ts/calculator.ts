import {ENTER_KEY} from "../../ts/utils/constants";

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
	// TODO
});
// add listener for "onkeyup" so that we can
//  check when the user presses 'enter' and we
//  can trigger our submit button
calcInput.addEventListener("keyup", function(event: KeyboardEvent) {
	// TODO
});


// add listener for "onclick" so that when
//  the user clicks the submit button, we can
//  display the result
calcButton.addEventListener("click", function() {
	// process input
	const [result, success] = processInput(calcInput.value);


	// TODO
});