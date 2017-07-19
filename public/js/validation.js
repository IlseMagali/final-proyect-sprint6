var $formNumber = $("#form-phone-number");
var $inputFormNumber = $("#enter_number");
var $buttonForm = $("#button-validate");
var $checkboxTerms = $("checkbox-terms");

function validateInput() {
	if ($checkboxTerms.attr("checked") === "checked"){
		$buttonForm.removeClass("disabled");
	}
	else {
		console.log("número inválido");
	}
}

function registerPhoneNumber(event){
	event.preventDefault();
	$.post("http://localhost:3000/api/registerNumber", {
	 "phone": $inputFormNumber.val(),
	 "terms": true
	}).then(function(respuesta){
		console.log(respuesta.data.code);
	}).catch(function(error){
		console.log("This is an error, please: keep calm.");
	})
}

$(document).ready(function(){
	$inputFormNumber.keydown(validateInput);
	$formNumber.submit(registerPhoneNumber);
});
