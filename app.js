/*
 

 -- get API
$.getJSON(searchURL, -, -);


*/






var searchURL = 'https://www.googleapis.com/youtube/v3/search';

$(document).ready(function(){
	$('form').submit(function(){
		event.preventDefault();
		var toSearch = $(this).find('.input-search').val();
	});

});