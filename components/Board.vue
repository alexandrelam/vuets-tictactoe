<template>
  <div class="board">
    <div class="column" v-for="(rowCells, col) in board" :key="col">
      <Cell
        class="cell"
        :player="jeton"
        v-for="(jeton, row) in rowCells"
        :key="row"
        :position="{ column: col, row: row }"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Cell from "./Cell.vue";

export default Vue.extend({
  name: "Board",

  data() {
    return {
      board: this.$store.state.board,
    };
  },

  components: {
    Cell,
  },
});
</script>


<style scoped>
.board {
  display: flex;
}

.cell {
  margin: 0.2rem;
}
</style>

