var emotionsGiphyArry = ["Bored", "Confused", "Inspired", "Lonely", "Scared", "Surprised", "Tired", "Nervous", "Pain", "Reaction", "Hungry", "Sassy", "Drunk", "Shocked", "Frustrated"];
var currentGiphy;
var arryOfGif;
var giph;

function displayGiphy(){

	$("#giphyDiv").html('');
	var giphyChoice = $(this).attr('data-name');
	var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" +giphyChoice+ "&api_key=dc6zaTOxFJmzC";
	$.ajax({ url: giphyURL, method: 'GET'})
	.done(function(giphyData){
		console.log(giphyURL);
	currentGiphy = giphyData.data;
	
	$.each(currentGiphy, function(index, value){
	arryOfGif= value.images.original.url;
	var newGiphy = $('<img class="img-rounded">');
	newGiphy.attr('src', arryOfGif);
	$("#giphyDiv").append(newGiphy);
	});
});


}
// show list of the button
function addNewGiphyButton(){
	$("#giphyList").html('');
	for (var i=0; i<emotionsGiphyArry.length; i++){
		giph = $('<button id="btn" class="btn btn-warning">');
		giph.addClass("giphyChoice");
		giph.attr('data-name', emotionsGiphyArry[i]);
		giph.text(emotionsGiphyArry[i]);
		$("#giphyList").append(giph);
	}
}
// add new buttons
$("#addButton").on('click', function(){
	var giphyChoice = $("#giphy-add").val().trim();
	emotionsGiphyArry.push(giphyChoice);
	addNewGiphyButton();
	return false;
});
addNewGiphyButton();
$(document).on('click', '.giphyChoice', displayGiphy);