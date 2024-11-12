/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  },
  {
    quote: "In the midst of Chaos, there is also opportunity.",
    source: "Sun Tzu",
    citation: "The Art of War",
    year: "5th Century BC"
  },
  {
    quote: "The greatest victory is that wich requires no battle.",
    source: "Sun Tzu",
    citation: "The Art of War",
    year: "5th Century BC"
  },
  {
    quote: "Don't follow your dreams, chase them.",
    source: "Anonymous"
  },
  {
    quote: "You must be the change you wish to see in the world",
    source: "Mahatma Gandhi",
    citation: "AZ Quotes"
  },
  {
    quote: "Well done is better than well said.",
    source: "Benjamin Franklin",
    citation: "AZ Quotes"
  }
];

/***
 * `getRandomQuote` function
***/


function getRandomQuote (arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  let randomQuote = arr[randomNum];
  //console.log(randomNum);
  //console.log(randomQuote);
  return randomQuote;
};
//console.log(getRandomQuote(quotes));
//console.log(getRandomQuote(quotes).citation);

/***
 * `printQuote` function
***/
var quote = getRandomQuote(quotes);

function printQuote() {
  let html = `
    <p class= "quote" > ${quote.quote} </p>
    <p class= "source" > ${quote.source} `

    if (quote.citation) {
     `<span class = "citation"> ${quote.citation} </span>`
    };
    if (quote.year) {
      `<span class = "year" > ${quote.year} </span>`
    };
    `</p>`

    return html;
};

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/



document.getElementById('load-quote').addEventListener("click", printQuote, false);

