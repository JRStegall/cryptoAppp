// fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-chart?interval=y1&id=inmex%253Aind", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
// 		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa"
// 	}
// })
// .then(response => {
// 	return response.text();
// }).then(function(data){
// 	console.log(data);
// 	document.getElementById('stocks').innerHTML=data;
// })
// .catch(err => {
// 	console.log(err);
// });

// console.log("What the fuckeroo?")

// fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
// 		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa",
// 		"x-bingapis-sdk": "true"
// 	}
// }).then(function(response){
// 	return response.text();
// }).then(function(data){
// 	// console.log(data);
// 	document.getElementById('news').innerHTML=data;
// }).catch(function(error){
// 	// console.log(error);
// })

fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa",
		"x-bingapis-sdk": "true"
	}
}).then(function(response){
	return response.json();
}).then(function(data){
	for(let i = 0; i < data.value.length; i++){
		let container = document.createElement("div");
		let cardBody = document.createElement("div");
		let name = document.createElement("h5");
		let image = document.createElement("img");
		let description = document.createElement("p");
		let mainContainer = document.getElementById("mainContent");
		
		container.classList.add("card")
		cardBody.classList.add("card-body")
		name.classList.add("card-title")
		image.classList.add("card-image-top")
		description.classList.add("card-text")


		
		name.innerHTML = data.value[i].name;
		description.innerHTML = data.value[i].description;
		image.src = data.value[i].image.thumbnail.contentUrl;

		cardBody.appendChild(image);
		cardBody.appendChild(name);
		cardBody.appendChild(description);
		
		container.appendChild(cardBody);
		mainContainer.appendChild(container)
		
	}
	console.log(data);
	/*document.getElementById('news').innerHTML=data.value[0].description;*/
}).catch(function(error){
	console.log(error);
})

/*
const apiKey = 'a5ab9714844845388f763fb2e51bab9d';
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a5ab9714844845388f763fb2e51bab9d';
var req = new Request(url);
fetch(req)
    .then(function(response) {
		console.log(response.json());
		return response.text();
	})*/
	
	