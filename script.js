function getQuotes() {
  fetch("https://api.quotable.oi/random")
   .then(Response => Response.json())
   .then(Response => {
    console.log(data);
    document.getElementById("quote").textContent = `"${data.content}"`;
    document.getElementById("author").textContent = `-${data.author}`;
   })
}
getQuotes();

