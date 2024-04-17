/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here

  // first li element
  const li = document.querySelector('li');

  console.log(li);

  // element with an id of myId
  const myId = document.querySelector('#myId');

  console.log(myId);

  // every li element with a yellow background
  const yellowBg = document.querySelectorAll('.bg-warning');
  
  console.log(yellowBg);

  // button labeled target me
  const targetMe = document.querySelector('#target');

  console.log(targetMe);

  // every a element that is social media
  const social = document.querySelectorAll('[data-social-media]');
  
  console.log(social);

  // target cell
  const cell = document.querySelectorAll('#myRow div');

  console.log(cell);

})();
