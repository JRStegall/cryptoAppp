

fetch("https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "d9a11c1fb1mshd696b88c6fec22dp13a29djsn713c2dd0576a"
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
		
		container.classList.add("card");
		cardBody.classList.add("card-body");
		name.classList.add("card-title");
		image.classList.add("card-image-top");
		description.classList.add("card-text");


		
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