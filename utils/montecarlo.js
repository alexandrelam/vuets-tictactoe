class Node {
  constructor() {
    this.parent = null;
    this.child = [];
    this.board = [[]];
    this.player = "";
    this.nbVisite = 0;
    this.nbVictoire = 0;
    this.uctScore = 0;
  }

  setParent(parent) {
    this.parent = parent;
  }

  setChild(childArr) {
    this.child = childArr;
  }

  incrementVisite() {
    this.nbVisite++;
  }

  incrementVictoire() {
    this.nbVictoire++;
  }

  setPlayer(player) {
    this.player = player;
  }

  setBoard(board) {
    this.board = board;
  }

  updateUctScore(C) {
    if (this.nbVisite == 0) {
      this.uctScore = Number.MAX_VALUE;
    } else {
      const exploitation = this.nbVictoire / this.nbVisite;
      const exploration =
        C * Math.sqrt(Math.log(this.parent.nbVisite) / this.nbVisite);
      this.uctScore = exploitation + exploration;
    }
  }
}

class Tree {
  constructor() {
    this.root = new Node();
  }
}

const selection = (root) => {
  childArr = [];
  while (root.childArr.length) {
    childArr = root.childArr;

    childArr.forEach((node) => node.updateUctScore(2));

      max
  }
};

export const botFindPlay = (plateau) => {
  let tree = new Tree();
  let root = tree.root;
  for (let iter = 0; iter < 5000; iter++) {
    nodeSelectionne = selection(root);
    newnode = expansion(nodeSelectionne);
    winner = simulation(newnode);
    backpropagation(nodeSelectionne);
  }
};
