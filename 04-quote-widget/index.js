const request = require('request');

updateQuote = () => {
    request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", (err, response, body) => {
        let bodyJson = JSON.parse(body);
        let index = Math.floor(Math.random() * (bodyJson.length));
        let randomQuote = bodyJson[index]["content"].rendered;

        document.getElementById("quote").innerHTML = randomQuote;
    });
};

updateQuote();
setInterval(updateQuote, 5000);