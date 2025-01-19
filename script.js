// fetch("https://api.quotable.io/random")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));

const api_url= "https://api.quotable.io/random";
async function getQuote(url) {
    const response = await fetch(url);
    var data =await response.json();
    console.log(data);
}
getQuote(api_url);