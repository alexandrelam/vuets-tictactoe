import { gameIsFinished, getListCoup, getJoueurEnnemi } from './game'

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

  incrementVisite () {
    this.nbVisite++
  }

  incrementVictoire () {
    this.nbVictoire++
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

const selection = (state, root) => {
  let childArr = []
  let maxVal = Number.MIN_VALUE
  let maxNode = root
  while (maxNode.childArr.length || gameIsFinished(state) === false) {
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

const expansion = (state, node) => {
  if (gameIsFinished(state) === false) {
    const joueurEnCours = getJoueurEnnemi(node.player)
    const listCoup = getListCoup(state)
    const newArrayChild = []

    for (let i = 0; i < listCoup.length; i++) {
      const tmpNode = new Node()
      tmpNode.board = state.board
      tmpNode.parent = node
      tmpNode.player = joueurEnCours
      newArrayChild.push(tmpNode)
    }
    node.childArr = newArrayChild
    return node.childArr[0]
  }
  return node
}

export const botFindPlay = (state) => {
  const tree = new Tree()
  const root = tree.root
  for (let iter = 0; iter < 5000; iter++) {
    nodeSelectionne = selection(state, root)
    newnode = expansion(nodeSelectionne)
    winner = simulation(newnode)
    backpropagation(nodeSelectionne)
  }
}
