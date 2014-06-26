$(document).on('ready', function() {

//Change color of paragraphs//
	$('#para1').mouseover(function(){
		$('#para1').css('background-color', 'pink');
		console.log('highlighted');
	});

	$('#para1').mouseleave(function() {
		$('#para1').css('background-color', 'white');
		 
	});

	$('#para2').mouseover(function(){
		$('#para2').css('background-color', 'pink');
		console.log('highlighted');
	});

	$('#para2').mouseleave(function() {
		$('#para2').css('background-color', 'white');
	});

	$('#para3').mouseover(function(){
		$('#para3').css('background-color', 'pink');
		console.log('highlighted');
	});

	$('#para3').mouseleave(function() {
		$('#para3').css('background-color', 'white');
	});

	 



//Add ! to headings//
	  
	$('h1, h3').append('!');

//confirm or deny url navigation//
	$('a').on('click', function(){

		var answer = confirm("Do you want to navigate away from this page?");
		if (answer === true) {
			alert('You are now leaving Hipsters on the Rise.');


		}  else {
			
			$(this).remove();
			return false;

			}

		
	
	});



	 













});