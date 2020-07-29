

//     let chartHolder = document.getElementById("chartHolder");

//    ("https://api.nomics.com/v1/currencies/ticker?key=afa8436d939ae06b4604b0939a47b034", function (data) {
   
//     console.log("The response from the api ticker");
//     console.log(data);
//     console.log(data.message);

//     function appenedChart(data) {
//     var imageElement = document.createElement("div");
//     imageElement.src= data.message;
//     imageElement.style.height="200px";
//     imageElement.style.width="200px";
    
//     chartHolder.appendChild(imageElement);
//     }
// });


// chartHolder.addEventListener("click", function () {
//     console.log("You FINALLY CLICKED ME")

//     fetch ("https://api.nomics.com/v1/currencies/ticker?key=afa8436d939ae06b4604b0939a47b034")
//     .then(response => response.json())
//     .then(data => console.log(data))
    

//     function appenedChart(data) {
//             let chartHolder = document.getElementById("chartHolder");
//             chartHolder.addEventListener("click", function () {
//                 console.log("You FINALLY CLICKED ME")
//             })
//             var imageElement = document.createElement("div");
//             imageElement.src= data.message;
//             imageElement.style.height="200px";
//             imageElement.style.width="200px";
            
//             chartHolder.appendChild(imageElement);
//             }


