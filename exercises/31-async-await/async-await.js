(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */

// get random quote from API and update quote
const randomQuote = () => {
  axios({
    url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
    method: 'GET',
  })
  .then(response => {
    const quote = response.data;
    const updateQuote = document.querySelector('#quote');
    updateQuote.textContent = quote;
  })
  .catch((err) => console.error(err));
};

// listen for button click and update quote
const randomQuoteBtn = document.querySelector('#button');
randomQuoteBtn.addEventListener('click', randomQuote);

})();
