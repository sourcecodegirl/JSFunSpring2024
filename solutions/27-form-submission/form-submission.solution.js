(function () {
  /**
   * Problem 1: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */

  // Step 1: Target
  const oceanForm = document.querySelector("#handleThisForm");
  const oceanInput = document.querySelector("#oceanInput");
  const oceanDisplay = document.querySelector("#oceanOutput");

  // Step 2: React to event
  oceanForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Step 3: Do something - stop the form from refreshing and display "No results for ____ found".
    oceanDisplay.textContent = `No results for ${oceanInput.value} found`;
  });

  /**
   * Problem 2: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your JavaScript here
})();
