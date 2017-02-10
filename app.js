/*jshint esversion: 6 */

var searchURL = 'https://www.googleapis.com/youtube/v3/search';

function getApi(toSearch, callback){
			var query = {
				q: toSearch,
				key: 'AIzaSyC9nQIHsILpfiajJV7rBo5IKJ7hVh_CLlA',
				part: 'snippet'
			};
			$.getJSON(searchURL, query, callback);
		}

function displaySearch(data) {
			var result = '';
			if (data.items) {
				data.items.forEach(function(searchResult){
					
					
				result += (`<li><img class="thumb" src="${searchResult.snippet.thumbnails.default.url}">
					<span>${searchResult.snippet.title}</span></li>`);

				});
			}
			else {
				result += '<p>Search not Found</p>';
			}
			$('#js-search-results').html(result);	
		}

$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		var toSearch = $(this).find('.input-search').val();	
		getApi(toSearch, displaySearch);
		
	});
});


/*
$.getJSON('http://example.com/search', {query: 'food', format: 'json'}function(response){
	console.log(response.data)
})
*/

