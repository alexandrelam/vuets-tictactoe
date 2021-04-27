export const state = () => ({
  board: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  player: "X",
});

export const mutations = {
  togglePlayer(state) {
    if (state.player == "X") {
      state.player = "O";
    } else {
      state.player = "X";
    }
  },
  play(state, x, y, player) {
    state.board[x][y] = player;
  },
};
