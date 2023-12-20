import read from "./reader.js";
import json from "./parser.js";

class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((value) => {
          resolve(JSON.parse(value));
        })
        .catch((error) => reject(error));
    });
  }
}

export default GameSavingLoader;
