var category = 'happiness';
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY' },
    contentType: 'application/json',
    success: function (result) {
        // Assuming the API returns an array of quotes, get the first quote
        var quote = result[0];

        // Update HTML content with the received quote
        displayQuote(quote);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

function displayQuote(quote) {
    // Assuming you have HTML elements with IDs 'quote-text' and 'quote-author'
    var quoteText = document.getElementById('quote-text');
    var quoteAuthor = document.getElementById('quote-author');

    // Update HTML content with the received quote
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
}