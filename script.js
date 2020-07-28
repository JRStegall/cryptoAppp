fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-chart?interval=y1&id=inmex%253Aind", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa"
	}
})
.then(response => {
	return response.text();
}).then(function(data){
	console.log(data);
	document.getElementById('stocks').innerHTML=data;
})
.catch(err => {
	console.log(err);
});

console.log("What the fuckeroo?")

fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa",
		"x-bingapis-sdk": "true"
	}
}).then(function(response){
	return response.text();
}).then(function(data){
	console.log(data);
	document.getElementById('news').innerHTML=data;
}).catch(function(error){
	console.log(error);
})