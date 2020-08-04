function placeHolderChart() {
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [0],
            datasets: [{
                label: "BitCoin Monthly Trend",
                backgroundColor: 'rgb(245, 87, 66)',
                borderColor: 'rgb(75, 66, 245)',
                data: [0],
            }]
        },

        // Configuration options go here
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



} 

//This is where the Daily Chart is Generated

async function createDailyChart() {

    let ibmDataClose = []
    let dailyData = {
        open: 0,
        open1: 0,
        open2: 0,
        open3: 0,
        open4: 0,
        close: 0,
        day: 0,
        day1: 0,
        day2: 0,
        day3: 0,
        day4: 0
    }
    
    
    let apikey = "4WNOTMZ6XCS94HP0"
    
    async function getData() {
        const response = await fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey="+apikey);
        const data = await response.json();
    
        
        //this lets me know about the object length
        let size = Object.keys(data["Time Series (Digital Currency Daily)"])
  
        
     
        //Market Open for Bitcoin
        dailyData.open = (data["Time Series (Digital Currency Daily)"][size[0]]["1a. open (USD)"]);
        dailyData.open1 = (data["Time Series (Digital Currency Daily)"][size[1]]["1a. open (USD)"]);
        dailyData.open2 = (data["Time Series (Digital Currency Daily)"][size[2]]["1a. open (USD)"]);
        dailyData.open3 = (data["Time Series (Digital Currency Daily)"][size[3]]["1a. open (USD)"]);
        dailyData.open4 = (data["Time Series (Digital Currency Daily)"][size[4]]["1a. open (USD)"]);
        
        
        
        
        
        
        dailyData.close = (data["Time Series (Digital Currency Daily)"][size[0]]["4. close"])
        

       
        
        dailyData.day = size[0]
        dailyData.day1 = size[1]
        dailyData.day2 = size[2]
        dailyData.day3= size[3]
        dailyData.day4 = size[4]
       
       
      
    }
    
    await getData()
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [dailyData.day4,dailyData.day3,dailyData.day2,dailyData.day1,dailyData.day],
            datasets: [{
                label: "BitCoin Trend",
                backgroundColor: 'rgb(215, 66, 245)',
                borderColor: 'rgb(99, 99, 132)',
                data: [dailyData.open4,dailyData.open3, dailyData.open2, dailyData.open1, dailyData.open],
            }]
        },
        options: {}
    });


    
   

}


//This will create the Weekly Chart

async function createWeeklyChart() {

    let ibmDataClose = []
    let weeklyData = {
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
        const response = await fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=USD&apikey="+apikey);
        const data = await response.json();
        console.log(data)
        
        
        //this lets me know about the object length
        let size = Object.keys(data["Time Series (Digital Currency Weekly)"])
    
     
        //Market Open for Bitcoin
        weeklyData.open = (data["Time Series (Digital Currency Weekly)"][size[0]]["1a. open (USD)"]);
        weeklyData.open1 = (data["Time Series (Digital Currency Weekly)"][size[1]]["1a. open (USD)"]);
        weeklyData.open2 = (data["Time Series (Digital Currency Weekly)"][size[2]]["1a. open (USD)"]);
        weeklyData.open3 = (data["Time Series (Digital Currency Weekly)"][size[3]]["1a. open (USD)"]);
        weeklyData.open4 = (data["Time Series (Digital Currency Weekly)"][size[4]]["1a. open (USD)"]);
    
        
        weeklyData.close = (data["Time Series (Digital Currency Weekly)"][size[0]]["4. close"])
        // console.log(`daily data updated in get data function: ${dailyData.open}`)

       
        
        weeklyData.day = size[0]
        weeklyData.day1 = size[1]
        weeklyData.day2 = size[2]
        weeklyData.day3= size[3]
        weeklyData.day4 = size[4]

        console.log(weeklyData.day)
       
       
        
      
    }
    
    await getData()
    
    

    //This is where the chart is generated
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [weeklyData.day4,weeklyData.day3,weeklyData.day2,weeklyData.day1,weeklyData.day],
            datasets: [{
                label: "BitCoin Trend",
                backgroundColor: 'rgb(188, 245, 66)',
                borderColor: 'rgb(66, 245, 152)',
                data: [weeklyData.open4,weeklyData.open3, weeklyData.open2, weeklyData.open1, weeklyData.open],
            }]
        },

        // Configuration options go here
        options: {}
    });


}


async function createMonthlyChart() {

    let ibmDataClose = []
    let monthlyData = {
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
    let apikey2 = "12R20Z739KRGF23F"
    
    async function getData() {
        const response = await fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=USD&apikey="+apikey2);
        const data = await response.json();
        console.log(data)
        
        
        //this lets me know about the object length
        let size = Object.keys(data["Time Series (Digital Currency Monthly)"])
      
     
        //Market Open for Bitcoin
        monthlyData.open = (data["Time Series (Digital Currency Monthly)"][size[0]]["1a. open (USD)"]);
        monthlyData.open1 = (data["Time Series (Digital Currency Monthly)"][size[1]]["1a. open (USD)"]);
        monthlyData.open2 = (data["Time Series (Digital Currency Monthly)"][size[2]]["1a. open (USD)"]);
        monthlyData.open3 = (data["Time Series (Digital Currency Monthly)"][size[3]]["1a. open (USD)"]);
        monthlyData.open4 = (data["Time Series (Digital Currency Monthly)"][size[4]]["1a. open (USD)"]);
    
        
        monthlyData.close = (data["Time Series (Digital Currency Monthly)"][size[0]]["4. close"])
        // console.log(`daily data updated in get data function: ${dailyData.open}`)

       
        
        monthlyData.day = size[0]
        monthlyData.day1 = size[1]
        monthlyData.day2 = size[2]
        monthlyData.day3= size[3]
        monthlyData.day4 = size[4]
        
      
    }
    
    await getData()
    


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [monthlyData.day4,monthlyData.day3,monthlyData.day2,monthlyData.day1,monthlyData.day],
            datasets: [{
                label: "BitCoin Monthly Trend",
                backgroundColor: 'rgb(245, 87, 66)',
                borderColor: 'rgb(75, 66, 245)',
                data: [monthlyData.open4,monthlyData.open3, monthlyData.open2, monthlyData.open1, monthlyData.open],
            }]
        },

        // Configuration options go here
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


    
   

}

placeHolderChart()

//Here is the button fuctionality. 

let dailyButton = document.getElementById("bitCoinDaily")
let weeklyButton = document.getElementById("bitCoinWeekly")
let monthlyButton = document.getElementById("bitCoinMonthly")

dailyButton.addEventListener("click", function () {
    createDailyChart();
    console.log("Created Daily")
})

weeklyButton.addEventListener("click", function () {
    createWeeklyChart();
    console.log("Created Weekly")
})

monthlyButton.addEventListener("click", function () {
    createMonthlyChart();
    console.log("Created Monthly")
})









































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


