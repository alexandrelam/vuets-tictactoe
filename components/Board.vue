<template>
  <div class="board">
    <div v-for="(rowCells, col) in board" :key="col" class="column">
      <Cell
        v-for="(jeton, row) in rowCells"
        :key="row"
        class="cell"
        :player="jeton"
        :position="{ column: col, row: row }"
        :class="[(jeton=='O') ? 'purple' : 'yellow']"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Cell from './Cell.vue'

export default Vue.extend({
  name: 'Board',

  components: {
    Cell
  },

  data () {
    return {
      board: this.$store.state.board
    }
  }

})
</script>

<style scoped>
.board {
  display: flex;
}

.cell {
  margin: 1.6rem 0.8rem;
}

.yellow{
  color: #ffae12;
}

.purple {
  color: #7321db;
}
</style>
