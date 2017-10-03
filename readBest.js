var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, x) {
	if(err) {
		return console.log(err);
	}

	var output = x.split(",");
	for(var i = 0; i < output.length; i++){
		console.log(output[i]);
	}
});

