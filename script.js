const quoteHistory = []; 

async function getZenQuote() {
  try {
    const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
    if (!res.ok) {
      throw new Error("Network response was not okay");
    }

    const result = await res.json();
    const data = JSON.parse(result.contents);

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Quote data is not valid");
    }

    const quoteObj = data[0]; // The current quote object from API
    const quoteText = quoteObj?.q ?? "No quote found";
    const quoteAuthor = quoteObj?.a ?? "Unknown";

    // Save the quote to history array
    quoteHistory.push({
      text: quoteText,
      author: quoteAuthor
    });

    // Update HTML with current quote
    document.getElementById('quote').textContent = `"${quoteText}"`;
    document.getElementById('author').textContent = `— ${quoteAuthor}`;
  } catch (error) {
    document.getElementById('quote').textContent = 'Could not fetch quote.';
    document.getElementById('author').textContent = '';
    console.error(error);
  }
}


getZenQuote()
console.log(quoteHistory);



