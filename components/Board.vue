<template>
  <div class="board">
    <div v-for="(rowCells, col) in board" :key="col" class="column">
      <Cell
        v-for="(jeton, row) in rowCells"
        :key="row"
        class="cell"
        :player="jeton"
        :position="{ column: col, row: row }"
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
  margin: 0.2rem;
}
</style>
