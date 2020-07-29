/*fetch("https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-chart?interval=y1&id=inmex%253Aind", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
		"x-rapidapi-key": "947d668e14msh8a1f9ad2d4973b9p1a6cc9jsne6045d441cfa"
	}
}).then(response => {
	return response.json();
}).then(function(data){
	console.log(data);
	const ticks = data["result"]["inmex:ind"]["ticks"];
	let i = 1;
	ticks.forEach((tick) => {
		let row = document.createElement("tr");
		let number = document.createElement('td');
		let time = document.createElement("td");
		let close = document.createElement("td");
		let volume = document.createElement("td");
		number.innerHTML = i;
		time.innerHTML = tick.time;
		close.innerHTML = tick.close;
		volume.innerHTML = tick.volume;
		row.appendChild(number);
		row.appendChild(time);
		row.appendChild(close);
		row.appendChild(volume);
		let table = document.getElementById("table");
		table.appendChild(row);
		i++;
	})
})
.catch(err => {
	console.log(err);
});
*/



console.log("What the fuckeroo?")

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
		let container = document.getElementById(`news`);
		let card = document.createElement(`div`);
		let name = document.createElement(`div`);
		let image = document.createElement(`img`);
		let description = document.createElement('p');
		name.innerHTML = data.value[i].name;
		description.innerHTML = data.value[i].description;
		image.src = data.value[i].image.thumbnail.contentUrl;
		card.appendChild(name);
		card.appendChild(description);
		card.appendChild(image);
		container.appendChild(card);
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