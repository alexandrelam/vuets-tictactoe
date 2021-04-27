<template>
  <div class="board">
    <div class="column" v-for="(row, index) in board" :key="index">
      <Cell
        class="cell"
        :player="jeton"
        v-for="(jeton, index) in row"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Cell from "./Cell.vue";

export default Vue.extend({
  name: "Board",

  props: {
    board: {
      type: Object,
      default: () => [],
      required: true,
    },
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

