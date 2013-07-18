var title = 'My Vacation Story';
var storyText = [];
var wordTypes = [];
var answers = [];
var theType;
var theInput;

storyText = [
'A vacation is when you take a trip to some ',
'place with your ',
' family. Usually you go to some place that is near a/an ',
' or up on a/an ',
'.A good vacation place is one where you can ride ',
' or play ',
' or go hunting for ',
'. I like to spend my time ',
' or ',
'. When parents go on a vacation, they spend their time eating three ',
' a day, and fathers play golf, and mothers sit around ',
'. Last summer, my little brother fell in a/an ',
' and got poison ',
' all over his ',
'. My family is going to go to (the) ',
', and I will practice ',
'. Parents need vacations more than kids because parents are always very ',
' and because they have to work ',
' hours every day all year making enough ',
' to pay for the vacation.'
];

wordTypes = [
'adjective',
'adjective',
'noun',
'noun',
'plural noun',
'game',
'plural noun',
'verb ending with -ing',
'verb ending with -ing',
'plural noun',
'verb ending with -ing',
'noun',
'plant',
'body part',
'place',
'verb ending with -ing',
'adjective',
'number',
'plural noun'
];

var count = 0;

$(window).load(function(event){
	loadNext(count);
});

$('#submitWord').click(function(event){
	theInput = $('#inputWord').val();
	answers.push(theInput);
	count++;
	if (count>=wordTypes.length){
		$('#playcircle').empty().append('<button class="btn" onclick="showStory()" id="showStory"><p>make my mad lib!</p></button>');
	} else{
		loadNext(count);
	}

});

function loadNext(count){

		theType = wordTypes[count];
		$('#inputWord').val('');
		if (theType.charAt(0)=='a'||theType.charAt(0)=='e'||theType.charAt(0)=='i'||theType.charAt(0)=='o'||theType.charAt(0)=='u'){
			$('#giveme').empty().append('give me an...');
		} else{
			$('#giveme').empty().append('give me a...');
		};
		$('#type').empty().delay('500').append(theType);
};

function showStory(){

	$('#storyblock').css({'display':'block'});
	$('#storyblock').append('<h1>'+title+'</h1><p class="storyText" id="theText">'+storyText[0]+'</p>');

	for(var i=0;i<answers.length;i++){
		$('#theText').append(answers[i]+storyText[i+1]);
	}

};







