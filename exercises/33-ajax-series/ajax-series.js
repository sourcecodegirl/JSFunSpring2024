(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

// get list of characters from API
const updateCharList = async () => {
  try {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    const dropdown = document.querySelector('#dropdown');

    // loop each character
    characters.forEach(character => {
      const option = document.createElement('option');
      option.textContent = character.name;
      dropdown.appendChild(option);
    });

    // event listener for dropdown
    dropdown.addEventListener('change', async (event) => {
      const selectedCharacterName = event.target.value;
      const selectedCharacter = characters.find(character => character.name === selectedCharacterName);
      if (selectedCharacter) {
        try {
          const imageResponse = await axios.get(selectedCharacter.image);
          const characterImage = document.querySelector('#get-schwifty');
          const characterTitle = document.querySelector('#title-head');
          characterImage.src = imageResponse.request.responseURL;
          characterImage.alt = selectedCharacter.name;
          characterTitle.textContent = selectedCharacter.name;
        } catch (imageError) {
          console.error('There was an error retrieving the image:', imageError);
        }
      }
    });

  } catch (err) {
    console.error('There was an error retrieving the character list:', err);
  }
};

updateCharList();

})();
