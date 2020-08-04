
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
        const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP,BCH,LTC,USDT,LINK,ADA,BNB&interval=1d,30d`);
        const data = await response.json();
    
        console.log(data)
        //This will be the first Cryto
        cryto1ID = data[0].id
        cryto1Name = data[0].name
        cryto1Rank = data[0].rank
        cypto1MarketCap = data[0].market_cap
        crypto1HighCap = data[0].high
        crypto1Value = data[0].price

        
        // This will be the second Cryto
        cryto2ID = data[1].id
        cryto2Name = data[1].name
        cryto2Rank = data[1].rank
        cypto2MarketCap = data[1].market_cap
        crypto2HighCap = data[1].high
        crypto2Value = data[1].price
        

        //This will be the third Cryto
        cryto3ID = data[2].id
        cryto3Name = data[2].name
        cryto3Rank = data[2].rank
        cypto3MarketCap = data[2].market_cap
        crypto3HighCap = data[2].high
        crypto3Value = data[2].price


        //This will be the fourth Cryto
        cryto4ID = data[3].id
        cryto4Name = data[3].name
        cryto4Rank = data[3].rank
        cypto4MarketCap = data[3].market_cap
        crypto4HighCap = data[3].high
        crypto4Value = data[3].price

        //5TH
        cryto5ID = data[4].id
        cryto5Name = data[4].name
        cryto5Rank = data[4].rank
        cypto5MarketCap = data[4].market_cap
        crypto5HighCap = data[4].high
        crypto5Value = data[4].price

        //6TH
        cryto6ID = data[5].id
        cryto6Name = data[5].name
        cryto6Rank = data[5].rank
        cypto6MarketCap = data[5].market_cap
        crypto6HighCap = data[5].high
        crypto6Value = data[5].price

        //7TH
        cryto7ID = data[6].id
        cryto7Name = data[6].name
        cryto7Rank = data[6].rank
        cypto7MarketCap = data[6].market_cap
        crypto7HighCap = data[6].high
        crypto7Value = data[6].price
      
    }

    await getData()



    let ctx = document.getElementById('myTickerChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [cryto1Name, cryto2Name, cryto3Name, cryto4Name, cryto5Name, cryto6Name, cryto7Name],
            datasets: [{
                label: "Other CryptoCurries",
                backgroundColor: ["rgb(137, 79, 98)", "rgb(250, 30, 60)", "rgb(177, 187, 120)", "rgb(53, 188, 242)","rgb(252, 240, 187)", "rgb(103, 153, 101)","rgb(238, 100, 154)" ],
                borderColor: 'rgb(75, 66, 245)',
                data: [crypto1Value, crypto2Value, crypto3Value, crypto4Value, crypto5Value, crypto6Value, crypto7Value]
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