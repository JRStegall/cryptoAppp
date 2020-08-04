

// fetch("https://finnhub-realtime-stock-price.p.rapidapi.com/stock/symbol?exchange=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "finnhub-realtime-stock-price.p.rapidapi.com",
// 		"x-rapidapi-key": "d9a11c1fb1mshd696b88c6fec22dp13a29djsn713c2dd0576a"
// 	}
// })
// .then(function(response){
// 	return response.json();
// }).then(function(data){
// 	for(let i = 0; i < data.value.length; i++){
// 		let container = document.createElement("div");
// 		let cardBody = document.createElement("div");
// 		let name = document.createElement("h5");
// 		let image = document.createElement("img");
// 		let description = document.createElement("p");
// 		let mainContainer = document.getElementById("mainContent");
		
// 		container.classList.add("card");
// 		cardBody.classList.add("card-body");
// 		name.classList.add("card-title");
// 		image.classList.add("card-image-top");
// 		description.classList.add("card-text");


		
// 		name.innerHTML = data.value[i].name;
// 		description.innerHTML = data.value[i].description;
// 		image.src = data.value[i].image.thumbnail.contentUrl;

// 		cardBody.appendChild(image);
// 		cardBody.appendChild(name);
// 		cardBody.appendChild(description);
		
// 		container.appendChild(cardBody);
// 		mainContainer.appendChild(container)
		
// 	}
// 	console.log(data);
// 	/*document.getElementById('news').innerHTML=data.value[0].description;*/
// }).catch(function(error){
// 	console.log(error);
// })





// let newsContainer = document.getElementById("chartHolder")



// let apiKey = "e838ab174e5a8f76c25a6becfa21fd618bd73751"



// let newsContainer = document.getElementById("mainContent")




  // async function createNewsChart() {


    
 
    
  //   async function getNewsData() {
  //       const response = await fetch(`https://cryptopanic.com//api/v1/posts/?auth_token=e838ab174e5a8f76c25a6becfa21fd618bd73751`);
  //       const data = await response.json();
    
    
  //       console.log(data.results[0]["currencies"][0]["title"])
        
  //       //Tye 
  //       console.log(data.results[0]["kind"])
        
  //       //This is the video source
  //       console.log(data.results[0]["source"]["domain"])
        
  //       //This is the main title
  //       console.log(data.results[0]["title"])
        
  //       // this is the URL
  //       console.log(data.results[0]["url"])
  //       // console.log(data.results[0]["news"])
  //       // console.log(data)
  //       // console.log(data)
  //       // console.log(data)

      

  //       // console.log(data.results[0]["currencies"])
  //       // console.log(data.results[0]["id"])
  //       // console.log(data.results[0]["id"])
  //       // console.log(data.results[0]["id"])
  //       // console.log(data.results[0]["id"])

  //   }

  //   await getNewsData()

  //   if (getNewsData) {

  //     console.log("GetNewsData is true")

  //   for(let i = 0; i < data.results.length; i++){
	// 	let container = document.createElement("div");
	// 	let cardBody = document.createElement("div");
	// 	let name = document.createElement("h5");
	// 	let image = document.createElement("img");
	// 	let description = document.createElement("p");
	// 	let mainContainer = document.getElementById("mainContent");
		
	// 	container.classList.add("card")
	// 	cardBody.classList.add("card-body")
	// 	name.classList.add("card-title")
	// 	image.classList.add("card-image-top")
	// 	description.classList.add("card-text")


		
	// 	name.innerHTML = data.results[i]["title"];
	// 	description.innerHTML = data.results[i]["kind"];
	// 	image.src = data.results[i]["source"]["domain"];

	// 	cardBody.appendChild(image);
	// 	cardBody.appendChild(name);
	// 	cardBody.appendChild(description);
		
	// 	container.appendChild(cardBody);
	// 	mainContainer.appendChild(container)

  //   }
  // }
  // }

function createNewsChart () {


  fetch("https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Off&q=stocks", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "d9a11c1fb1mshd696b88c6fec22dp13a29djsn713c2dd0576a",
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
		let url = document.createElement("a");
		let description = document.createElement("p");
		let mainContainer = document.getElementById("mainContent");
		
		container.classList.add("card")
		cardBody.classList.add("card-body")
		name.classList.add("card-title")
		image.classList.add("card-image-top")
		description.classList.add("card-text")
		url.classList.add(`btnbtn-primarystretched-link`)

		console.log(data)

		
		name.innerHTML = data.value[i].name;
		description.innerHTML = data.value[i].description;
		image.src = data.value[i].image.thumbnail.contentUrl;
		url.href= data.value[i].url
		url.innerHTML = "Go to site!"

		cardBody.appendChild(image);
		cardBody.appendChild(name);
		cardBody.appendChild(description);
		cardBody.appendChild(url);
		
		container.appendChild(cardBody);
		mainContainer.appendChild(container)
		
	}
	console.log(data);
	/*document.getElementById('news').innerHTML=data.value[0].description;*/
}).catch(function(error){
	console.log(error);
})
}

let button = document.getElementById("loadNewsChart");

button.addEventListener("click", function () {
  
  createNewsChart()
})