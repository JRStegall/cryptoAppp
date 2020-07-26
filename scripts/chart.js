
//this will obtain the cryptocurrency api for the graph (BitCoin)
// let bitcoinURL = "https://api.coinlore.net/api/ticker/?id=90"


// fetch(bitcoinURL)
// .then(function(response) {
//     return response.json();
     
// })
// .then (function(data) {
//     console.log(data);
// });


let bitcoinURL = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
let qString = "?CMC_PRO_API_KEY=27e7f55d-4a48-4cc4-b254-008fcfbeae60"


fetch(bitcoinURL+qString)
.then(function(response) {
    return response.json();
     
})
.then (function(data) {
    console.log(data.data);
});





//This will obtain ETH data
let ethURL = "https://api.coinlore.net/api/ticker/?id=90"


fetch(ethURL)
.then(function(response) {
    return response.json();
     
})
.then (function(data) {
    console.log(data);
});



