/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  // edit img tag
  const img = document.querySelector('img');
  img.src = 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif';

  // change link
  const link = document.querySelector('.alert-warning a');
  link.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';

  // change text
  const text = document.querySelector('.alert-success');
  text.textContent = 'I am victorious!';

  // change bgcolor
  const bgColor = document.querySelector('.alert-info');
  bgColor.style.backgroundColor = 'orange';

  // change text color with class
  const textColor = document.querySelector('#text-color');
  textColor.classList.add('text-primary');

  // hide div
  const hiddenDiv = document.querySelector('#hide');
  hiddenDiv.style.display = 'none';

  // show hidden div
  const showDiv = document.querySelector('.hidden');
  showDiv.classList.remove('hidden');

  // conditional logic to change button
  const button = document.querySelector('#aButton');
  if (button.classList.contains('btn-primary')) {
    document.querySelector('#buttonText').textContent = '✓ blue';
  }
})();
