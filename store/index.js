import Vue from 'vue'

export const state = () => ({
  board: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ],
  player: 'X',
  isPartieEnCours: true,
  isDraw: true
})

export const mutations = {
  play (state, positionPayload) {
    const { column, row } = positionPayload
    const tmpColumn = state.board[column]
    if (tmpColumn[row] === ' ' && state.isPartieEnCours) {
      // if you can play then play the move
      Vue.set(tmpColumn, row, state.player)
      Vue.set(state.board, column, tmpColumn)

      // check if player won
      if (isWinner(state)) {
        console.log(state.player + ' is the winner')
        state.isPartieEnCours = false
        state.isDraw = false
      } else if (boardIsFull(state)) {
      // check if it's a draw
        state.isPartieEnCours = false
        console.log('Partie terminé !')
      } else {
      // then toggle the player
        togglePlayer(state)
      }
    }
  },
  restart (state) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Vue.set(state.board[i], j, ' ')
      }
    }
    state.player = 'X'
    state.isPartieEnCours = true
    state.isDraw = true
  }
}

const togglePlayer = (state) => {
  if (state.player === 'X') {
    state.player = 'O'
  } else {
    state.player = 'X'
  }
}

const boardIsFull = (state) => {
  let isFull = true
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.board[i][j] === ' ') {
        isFull = false
      }
    }
  }
  return isFull
}

const isWinner = (state) => {
  let row = 0
  let column = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.board[i][j] === state.player) {
        row++
      }
      if (state.board[j][i] === state.player) {
        column++
      }
    }
    if (row === 3 || column === 3) {
      return true
    }
    row = 0
    column = 0
  }
  if (
    state.board[0][0] === state.player &&
    state.board[1][1] === state.player &&
    state.board[2][2] === state.player
  ) {
    return true
  }
  if (
    state.board[0][2] === state.player &&
    state.board[1][1] === state.player &&
    state.board[2][0] === state.player
  ) {
    return true
  }
  return false
}
