

// This will be where my data goes


















async function createChart() {

    let ibmDataClose = []
    let dailyData = {
        open: 0,
        open1: 0,
        open2: 0,
        open3: 0,
        open4: 0,
        close: 0,
        day1: 0,
        day2: 0,
        day3: 0,
        day4: 0
    }
    
    
    let apikey = "4WNOTMZ6XCS94HP0"
    
    async function getData() {
        const response = await fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey="+apikey);
        const data = await response.json();
        console.log(data)
        
        //ibmDataOpen.push((data["Weekly Time Series"]["2020-07-27"][["1. open"]]))
        // ibmDataClose.push((data["Weekly Time Series"]["2020-07-27"][["4. close"]]))
        // console.log(data["Meta Data"])
        // console.log(data["Weekly Time Series"]["2020-07-27"])
        // console.log(data["Weekly Time Series"]["2020-07-27"][["1. open"]])
    
       
   
        
        //this lets me know about the object length
        let size = Object.keys(data["Time Series (Digital Currency Daily)"])
        // console.log(data["Weekly Time Series"])
        // console.log(data["Weekly Time Series"][size[0]])
        // console.log(data["Weekly Time Series"][size[0]]["1. open"])
    
        // console.log(size[0][1])
        // console.log(size[1])
        
     
        //Market Open for Bitcoin
        dailyData.open = (data["Time Series (Digital Currency Daily)"][size[0]]["1a. open (USD)"]);
        dailyData.open1 = (data["Time Series (Digital Currency Daily)"][size[1]]["1a. open (USD)"]);
        dailyData.open2 = (data["Time Series (Digital Currency Daily)"][size[2]]["1a. open (USD)"]);
        dailyData.open3 = (data["Time Series (Digital Currency Daily)"][size[3]]["1a. open (USD)"]);
        dailyData.open4 = (data["Time Series (Digital Currency Daily)"][size[4]]["1a. open (USD)"]);
        
        
        
        
        
        
        dailyData.close = (data["Time Series (Digital Currency Daily)"][size[0]]["4. close"])
        // console.log(`daily data updated in get data function: ${dailyData.open}`)

        console.log(size)
        
        dailyData.day = size[0]
        dailyData.day1 = size[1]
        dailyData.day2 = size[2]
        dailyData.day3= size[3]
        dailyData.day4 = size[4]
       
        
      
    }
    
    await getData()
    
    
    
    // console.log(`This is Daily Data.Open ${dailyData.open}`)
    
    
    // let crytoChart = new Chart(myChart, {
    //     type: 'line',
    //     data: {
    //         labels: ['BitCoin'],
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
    //                     beginAtZero: false
    //                 }
    //             }]
    //         }
    //     }
    // });
    


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [dailyData.day4,dailyData.day3,dailyData.day2,dailyData.day1,dailyData.day],
            datasets: [{
                label: "BitCoin Trend",
                backgroundColor: 'rgb(99, 99, 132)',
                borderColor: 'rgb(99, 99, 132)',
                data: [dailyData.open4,dailyData.open3, dailyData.open2, dailyData.open1, dailyData.open],
            }]
        },

        // Configuration options go here
        options: {}
    });


    
   

}

createChart()









































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


