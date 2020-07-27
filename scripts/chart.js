
//this will obtain the cryptocurrency api for the graph (BitCoin)
// let bitcoinURL = "https://api.coinlore.net/api/ticker/?id=90"


// fetch(bitcoinURL)
// .then(function(response) {
//     return response.json();
     
// })
// .then (function(data) {
//     console.log(data);
// });




//Too many tries in one day. Will need to wait

// let bitcoinURL = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
// let qString = "?CMC_PRO_API_KEY=27e7f55d-4a48-4cc4-b254-008fcfbeae60"

// fetch(bitcoinURL+qString)
// .then(response => response.json())
// .then(data => {
//     console.log(data)

// })

// This will be where my data goes

async function createChart() {

    let ibmDataClose = []
    let dailyData = {
        open: 0,
        close: 0
    }
    
    
    let apikey = "4WNOTMZ6XCS94HP0"
    
    async function getData() {
        const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey="+apikey);
        const data = await response.json();
        
        //ibmDataOpen.push((data["Weekly Time Series"]["2020-07-27"][["1. open"]]))
        // ibmDataClose.push((data["Weekly Time Series"]["2020-07-27"][["4. close"]]))
        // console.log(data["Meta Data"])
        // console.log(data["Weekly Time Series"]["2020-07-27"])
        // console.log(data["Weekly Time Series"]["2020-07-27"][["1. open"]])
    
       
    
        // let dailyHigh = 
        // let dailyLow = 
        
        //this lets me know about the object length
        let size = Object.keys(data["Weekly Time Series"])
        console.log(data["Weekly Time Series"])
        console.log(data["Weekly Time Series"][size[0]])
        console.log(data["Weekly Time Series"][size[0]]["1. open"])
    
        // console.log(size[0][1])
        // console.log(size[1])
        
     
        dailyData.open = (data["Weekly Time Series"][size[0]]["1. open"]);
        dailyData.close = (data["Weekly Time Series"][size[0]]["4. close"])
        console.log(`daily data updated in get data function: ${dailyData.open}`)
        
    
        
       
    }
    
    await getData()
    
    
    
    console.log(`This is Daily Data.Open ${dailyData.open}`)
    
    
    let crytoChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: ['BitCoin', 'Etherum', 'Lite'],
            datasets: [{
                label: 'CyptoCurrency Price Per Day',
                data: [dailyData.open, dailyData.close],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                borderColor:"#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000"
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
    
    
    console.log(ibmDataOpen)

}

createChart()

// let ibmDataClose = []
// let dailyData = {
//     open: 234,
//     close: 446
// }


// let apikey = "4WNOTMZ6XCS94HP0"

// async function getData() {
//     const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey="+apikey);
//     const data = await response.json();
    
//     //ibmDataOpen.push((data["Weekly Time Series"]["2020-07-27"][["1. open"]]))
//     // ibmDataClose.push((data["Weekly Time Series"]["2020-07-27"][["4. close"]]))
//     // console.log(data["Meta Data"])
//     // console.log(data["Weekly Time Series"]["2020-07-27"])
//     // console.log(data["Weekly Time Series"]["2020-07-27"][["1. open"]])

   

//     // let dailyHigh = 
//     // let dailyLow = 
    
//     //this lets me know about the object length
//     let size = Object.keys(data["Weekly Time Series"])
//     console.log(data["Weekly Time Series"])
//     console.log(data["Weekly Time Series"][size[0]])
//     console.log(data["Weekly Time Series"][size[0]]["1. open"])

//     // console.log(size[0][1])
//     // console.log(size[1])
    
 
//     dailyData.open = 600;
//     console.log(`daily data updated in get data function: ${dailyData.open}`)
    

    
   
// }

// getData()



// console.log(`This is Daily Data.Open ${dailyData.open}`)


// let crytoChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//         labels: ['BitCoin', 'Etherum', 'Lite'],
//         datasets: [{
//             label: 'CyptoCurrency Price Per Day',
//             data: [dailyData.open, dailyData.close],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             borderColor:"#777",
//             hoverBorderWidth: 3,
//             hoverBorderColor: "#000"
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


// console.log(ibmDataOpen)