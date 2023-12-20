import GameSavingLoader from "../GameSavingLoader.js";

test("test for promise", (done) => {
  const gsm = new GameSavingLoader();
  gsm
    .load()
    .then((saving) => {
      expect(saving).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
      });
      done();
    })
});
  