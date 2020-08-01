

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



let apiKey = "e838ab174e5a8f76c25a6becfa21fd618bd73751"

  async function createNewsChart() {


    
 
    
    async function getData() {
        const response = await fetch(`https://cryptopanic.com//api/v1/posts/?auth_token=e838ab174e5a8f76c25a6becfa21fd618bd73751`);
        const data = await response.json();
    
      
        
      
    }

    await getData()



    let ctx = document.getElementById('myTickerChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [cryto1Name, cryto2Name, cryto3Name],
            datasets: [{
                label: "Cryto Leaderboard",
                backgroundColor: 'rgb(245, 87, 66)',
                borderColor: 'rgb(75, 66, 245)',
                data: [crypto1Value, crypto2Value, crypto3Value],
            }]
        },

        // Configuration options go here
        options: {
                
                }
    });
  }


 placeHolderTickerChart() 

 let loadTicker = document.getElementById("loadTickerChart")
 loadTicker.addEventListener("click", function () {
     console.log("You clicked me")
     createTickChart()
 })