import Vue from "vue";

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
  play(state, positionPayload) {
    const { column, row } = positionPayload;
    let tmpColumn = state.board[column];
    tmpColumn[row] = state.player;
    Vue.set(state.board, column, tmpColumn);
  },
};
