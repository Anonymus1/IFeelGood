$(document).ready(function() {
	$("#compliment").mouseenter(function(){
		$("#compliment").fadeTo("fast",1);
	});
	$("#compliment").mouseleave(function() {
		$("#compliment").fadeTo("fast",0.80);
	});
	$("compliment").click(function(){
		var compliment = Math.floor(Math.random()*5)+1;
		switch(compliment) {
			case 5: 
			alert("Your toes smell like brown sugar!")
			break;
			case 4:
			alert("I like your outfit!")
			break;
			case 3:
			alert("What a nice smile you have!")
			break;
			case 2:
			alert("You're so kind!")
			break;
			default:
			alert("You're so thoughtful!");
		}
	});
	//$("").mouseenter(function(){
		//$("").fadeTo("fast",1);
	//});
	//$("").mouseleave(function() {
		//$("").fadeTo("fast",0.80);
	//});
	//$("").click(function(){
	//});
});
