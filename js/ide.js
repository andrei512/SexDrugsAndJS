$(document).ready(function () {
	var processingInstance = new Processing("canvas1", 	function (processing) {
  			processing.draw = function() {
  			}
  		}
	);

	var last_code = "";

	$(".code-editor").off().on("keyup change paste", function (eventArgs) {
		var processingCode = $(".code-editor").val();

		if (last_code != processingCode) {
			last_code = processingCode;
			var jsCode = new Processing.compile(processingCode).sourceCode;

			console.log(jsCode);

			processingInstance.exit();
			processingInstance = new Processing("canvas1", eval(jsCode));				
		}
	});

});




