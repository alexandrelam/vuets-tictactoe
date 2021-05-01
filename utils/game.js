export const togglePlayer = (state) => {
  if (state.player === 'X') {
    state.player = 'O'
  } else {
    state.player = 'X'
  }
}

export const boardIsFull = (state) => {
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

export const isWinner = (state) => {
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

export const gameIsFinished = () => {
  if (isWinner || boardIsFull) {
    return true
  }
  return false
}
