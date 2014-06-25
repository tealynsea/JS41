$(document).on('ready', function() {  

$("#btn1").click(function() {
	
	console.log("The button was clicked.");  
		 
	$('p').append('This is the first piece of random text.');


});

 $('#btn2').click(function() {

 	$('h1').append('Here is my h1 heading.');

 });

 $('#btn3').click(function() {

 	$('ul').append('<li>gun</li><li>powder</li><li>lead</li');


 })
 	 

 

});
