import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving); // Объект класса GameSaving
  })
  .catch((error) => {
    console.error(error); // Обработка ошибок
  });
