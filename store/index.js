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
  play(state, positionPayload) {
    const { column, row } = positionPayload;
    let tmpColumn = state.board[column];
    if (tmpColumn[row] == " ") {
      // if you can play then play the move
      tmpColumn[row] = state.player;
      Vue.set(state.board, column, tmpColumn);

      // then toggle the player
      if (state.player == "X") {
        state.player = "O";
      } else {
        state.player = "X";
      }
    }
  },
};
