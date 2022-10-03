$(document).ready(function () {
	var form = document.querySelector("#contact-form");
	Pageclip.form(form, {
		onSubmit: function (event) { },
		onResponse: function (error, response) { },
		successTemplate: "<h2>Sua mensagem foi enviada!</h2>",
	});
});
