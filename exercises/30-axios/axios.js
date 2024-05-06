(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

// function to get random image from API
function getRandomImg() {
  axios({
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'GET',
  })
  .then(response => {
    const url = response.data.message;
    updateImg(url);
  })
  .catch((err) => console.error(err));
}

// function to update image src
function updateImg(url) {
  const image = document.querySelector('#image');
  image.src = url;
}

// listen for button click and update image
const randomBtn = document.querySelector('#random');

randomBtn.addEventListener('click', () => {
  getRandomImg();
});


})();

