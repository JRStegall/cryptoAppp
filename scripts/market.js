
function placeHolderTickerChart() {
    
    let ctx = document.getElementById('myTickerChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [0],
            datasets: [{
                label: "Cryto Leaderboard",
                backgroundColor: 'rgb(245, 87, 66)',
                borderColor: 'rgb(75, 66, 245)',
                data: [0],
            }]
        },

        // Configuration options go here
        options: {
                
                }
    });



} 

let cryto1ID
    let cryto1Name;
    let cryto1Rank;
    let cypto1MarketCap;
    let crypto1HighCap;

    

    let cryto2ID;
    let cryto2Name;
    let cryto2Rank;
    let cypto2MarketCap;
    let crypto2HighCap;

let chartContainer = document.getElementById("chartHolder")



let apiKey = "9ec661b5817819d76c0128fb17d7af83"

  async function createTickChart() {


    
 
    
    async function getData() {
        const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR`);
        const data = await response.json();
    
        
        //this lets me know about the object length
        cryto1ID = data[0].id
        cryto1Name = data[0].name
        cryto1Rank = data[0].rank
        cypto1MarketCap = data[0].market_cap
        crypto1HighCap = data[0].high

        console.log("")
        
        cryto2ID = data[1].id
        cryto2Name = data[1].name
        cryto2Rank = data[1].rank
        cypto2MarketCap = data[1].market_cap
        crypto2HighCap = data[1].high
     
       
        
      
    }

    await getData()



    let ctx = document.getElementById('myTickerChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [cryto1Name, cryto2Name],
            datasets: [{
                label: "Cryto Leaderboard",
                backgroundColor: 'rgb(245, 87, 66)',
                borderColor: 'rgb(75, 66, 245)',
                data: [crypto1HighCap, crypto2HighCap],
            }]
        },

        // Configuration options go here
        options: {
                
                }
    });
  }


 placeHolderTickerChart() 

 let loadTicker = document.getElementById("loadTickerChart")
 loadTicker.addEventListener("click", createTickChart())