let request = require('request');

request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(err, response, body){
	let data = JSON.parse(body);
	let quote = data[0].content.rendered;
	document.getElementById('quote').innerHTML = quote;
})

let i = 0;
setInterval(function(){
	request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(err, response, body){
		let data = JSON.parse(body);
		let quote = data[i].content.rendered;
		console.log(quote)
		document.getElementById('quote').innerHTML = quote;
	});
	if(i < 10){
		i++;
	}else{
		i--;
	}
}, 5000);