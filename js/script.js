// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//array of quotes
var quotes = [
	{ quote: "Innovation distinguishes between a leader and a follower.",
	source: "Steve Jobs"
	},
	{ quote: "It is during our darkest moments that we must focus to see the light.",
	source: "Aristotle"
	},
	{ quote: "I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
	source: "Marilyn Monroe"
	},
	{ quote: "Be brave. Take risks. Nothing can substitute experience.",
	source: "Paulo Coelho"
	},
	{ quote: "From there to here, and here to there, funny things are everywhere.",
	source: "Dr. Seuss"
	},
	{ quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
	source: "Mahatma Ghandi"
	}
]


function getRandomQuote(){
	//select random quote from array
	var x = quotes[Math.floor(Math.random() * quotes.length)];
	//return quote
	return x;
};


function printQuote(message){
	//init getRandom function
	var selectQuote = getRandomQuote();
	//create html message
	var message = '<p class= "quote"> ' + selectQuote.quote + '</p>';
	message += '<p class="source"> ' + selectQuote.source + '</p>';	
	
	//print to DOM
	var div = document.getElementById('quote-box');
	div.innerHTML = message;
		
};


printQuote(message);


	