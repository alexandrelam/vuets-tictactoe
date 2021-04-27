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
      Vue.set(tmpColumn, row, state.player);
      Vue.set(state.board, column, tmpColumn);

      // then toggle the player
      if (state.player == "X") {
        state.player = "O";
      } else {
        state.player = "X";
      }
    }
  },
  restart(state) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Vue.set(state.board[i], j, " ");
      }
    }
    state.player = "X";
  },
};
