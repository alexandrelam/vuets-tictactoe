import { gameIsFinished } from './game'

class Node {
  constructor () {
    this.parent = null
    this.child = []
    this.board = [[]]
    this.player = ''
    this.nbVisite = 0
    this.nbVictoire = 0
    this.uctScore = 0
  }

  setParent (parent) {
    this.parent = parent
  }

  setChild (childArr) {
    this.child = childArr
  }

  incrementVisite () {
    this.nbVisite++
  }

  incrementVictoire () {
    this.nbVictoire++
  }

  setPlayer (player) {
    this.player = player
  }

  setBoard (board) {
    this.board = board
  }

  updateUctScore (C) {
    if (this.nbVisite === 0) {
      this.uctScore = Number.MAX_VALUE
    } else {
      const exploitation = this.nbVictoire / this.nbVisite
      const exploration =
        C * Math.sqrt(Math.log(this.parent.nbVisite) / this.nbVisite)
      this.uctScore = exploitation + exploration
    }
  }
}

class Tree {
  constructor () {
    this.root = new Node()
  }
}

const selection = (root) => {
  let childArr = []
  let maxVal = Number.MIN_VALUE
  let maxNode = root
  while (maxNode.childArr.length || gameIsFinished() === false) {
    childArr = maxNode.childArr

    for (let i = 0; i < childArr.length; i++) {
      childArr[i].updateUctScore(2)
      if (childArr[i].uctScore > maxVal) {
        maxVal = childArr[i].uctScore
        maxNode = childArr[i]
      }
    }
  }
  return maxNode
}

export const botFindPlay = (plateau) => {
  const tree = new Tree()
  const root = tree.root
  for (let iter = 0; iter < 5000; iter++) {
    nodeSelectionne = selection(root)
    newnode = expansion(nodeSelectionne)
    winner = simulation(newnode)
    backpropagation(nodeSelectionne)
  }
}
