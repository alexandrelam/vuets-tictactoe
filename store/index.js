import Vue from "vue";

export const state = () => ({
  board: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
  player: "X",
  partieEnCours: true,
});

export const mutations = {
  play(state, positionPayload) {
    const { column, row } = positionPayload;
    let tmpColumn = state.board[column];
    if (tmpColumn[row] == " " && state.partieEnCours) {
      // if you can play then play the move
      Vue.set(tmpColumn, row, state.player);
      Vue.set(state.board, column, tmpColumn);

      // then toggle the player
      togglePlayer(state);
      if (boardIsFull(state)) {
        state.partieEnCours = false;
        console.log("Partie terminé !");
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
    state.partieEnCours = true;
  },
};

const togglePlayer = (state) => {
  if (state.player == "X") {
    state.player = "O";
  } else {
    state.player = "X";
  }
};

const boardIsFull = (state) => {
  let isFull = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.board[i][j] == " ") {
        isFull = false;
      }
    }
  }
  return isFull;
};
