var timer = 0;
var totalSeconds = 21;
var spanContainer = document.getElementById("timer-span");

var input = document.getElementById("enter-code");

function timingSeconds(){
	setTimeout(function(){location.href = "create-user.html"}, 7000);
	console.log("contando 7 segundos antes de cambiar de pantalla");
}

function filledInput(){
	if (input.value != 0) {
		timingSeconds();
	}
	else {
		console.log("error");
	}
}

input.value = "";

$(document).ready(function(){
	input.addEventListener("keydown", filledInput);
});
