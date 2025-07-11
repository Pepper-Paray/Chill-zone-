async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById('quote').textContent = `"${data.content}"`;
    document.getElementById('author').textContent = `— ${data.author}`;
  } catch (error) {
    document.getElementById('quote').textContent = 'Could not fetch quote.';
    document.getElementById('author').textContent = '';
    console.error(error);
  }
}


getRandomQuote();

