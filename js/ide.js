$(document).ready(function () {
	var Runtime = {
		"eval" : function(code) {
			var result = null;
			try {
				result = eval(code);
			}

			catch(e) {}

			return result ? result : code;
		}
	};

	var sketchProc = function (processing) {
	  // Override draw function, by default it will be called 60 times per second
	  processing.draw = function() {
	  	// processing.rect(1, 1, 100, 100);
	  };
	}

	var canvas = $("#canvas1");
	// attaching the sketchProc function to the canvas
	var processingInstance = new Processing(canvas, sketchProc);


	$(".code-editor").off().on("keyup change paste", function (eventArgs) {
		code = $(".code-editor").val();

		result = Runtime.eval(code);
		console.log(result);
	});

});

