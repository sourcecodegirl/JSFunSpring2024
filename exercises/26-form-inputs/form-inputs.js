(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Display what the user is typing or selecting from a dropdown.
   *
   * When the user types in an email address,
   * display what they are typing inside of the empty <span> tags.
   * When the user selects an option from the dropdown,
   * display what they selected inside of the empty <span> tags.
   * (See the comments in the HTML for what <span> tags to sue.)
   */
  // Write your answer here
  const emailInput = document.querySelector('#email');
  const displayEmail = document.querySelector('#currentEmail');

  emailInput.addEventListener('input', (event) => {
    displayEmail.textContent = event.target.value;
  });


  const dropdownInput = document.querySelector('#title');
  const displaySelection = document.querySelector('#currentRole');

  dropdownInput.addEventListener('input', (event) => {
    displaySelection.textContent = event.target.value;
  });

  /**
   * Problem 2: Handle a checkbox
   *
   * A <div> that says "✓ Include promotional offers" is hidden o the screen.
   * When the user checks the "Send promotional offers to my email address" checkbox,
   * show the hidden <div> tag.
   *
   * As a bonus, see if you can hide the <div> tag if they uncheck the checkbox.
   */
  // Write your answer here.
const checkedBox = document.querySelector('.form-check-input');
const hiddenText = document.querySelector('.hidden');

checkedBox.addEventListener('click', () => {
  if (checkedBox.checked) {
    hiddenText.classList.remove('hidden');
  } else {
    hiddenText.classList.add('hidden');
  }
});

  /**
   * Problem 3: Input validation
   *
   * There is a hidden error message "Please enter email address."
   * If the user has not typed in anything in the email address textbox,
   * show this error message.
   * If they have typed something, hide this error message.
   *
   * You can use the "input" or "change" events, but the general UX recommendation
   * is to use "blur" events for these types of error messages (form validation errors).
   */
  // Write your answer here

const invalidMessage = document.querySelector('.invalid-feedback');

emailInput.addEventListener('blur', () => {
  if (!emailInput.value) {
    invalidMessage.style.display = 'block';
  } else {
    invalidMessage.style.display = 'none';
  }
});

})();