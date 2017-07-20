var timer = 0;
var totalSeconds = 21;
var spanContainer = document.getElementById("timer-span");

var input = document.getElementById("enter-code");

function timingSeconds(){
	setTimeout(function(){location.href = "create-user.html"}, 5000);
}

function filledInput(){
	if (input.value < 20 ) {
		console.log(input.value);
	}
	else {
		timingSeconds();
	}
}

$(document).ready(function(){
	filledInput();
});
