var $userName = $("#user_name");
var $userMail = $("#user_mail");
var $userPassword = $("#user_password");

var $buttonRegister = $("#button-register");

function validateFilledName () {
	if ($userName.val().length != 0 && $userMail.val().length != 0 && $userPassword.val().length === 6){
		$buttonRegister.removeAttr("disabled");
	}
	else {
		console.log("boton en disabled");
	}
}

function registrateUser(event) {
	e.preventDefault();
	$.post("http://localhost:3000/api/createUser", {
		"name" : $userName.val(),
		"mail" : $userMail.val(),
		"password" : $userPassword.val()
	}).then(function(response){
		console.log(response)
	});
}

$(document).ready(function(){
	$userName.keyup(validateFilledName);
	$userMail.keyup(validateFilledName);
	$userPassword.keyup(validateFilledName);
});
