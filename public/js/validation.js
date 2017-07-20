// registro de número telefónico
var $formNumber = $("#form-phone-number");
var $inputFormNumber = $("#enter_number");
var $buttonForm = $("#button-validate");
var $checkboxTerms = $("#checkbox-terms");

function validateInput() {
	if ($checkboxTerms.is(":checked")){
		$buttonForm.removeAttr("disabled");
	}
	else {
		console.log("botón desactivado");
	}
}

function registerPhoneNumber(event){
	event.preventDefault();
	$.post("http://localhost:3000/api/registerNumber", {
	 "phone": $inputFormNumber.val(),
	 "terms": true
	}).then(function(respuesta){
		alert(respuesta.data.code);
	}).catch(function(error){
		console.log(error);
	})
}
// registro de número telefónico


$(document).ready(function(){
	// registro de número telefónico
	$formNumber.submit(registerPhoneNumber);
	$checkboxTerms.change(validateInput);
	// registro de número telefónico

});
