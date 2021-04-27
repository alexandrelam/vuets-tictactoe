<template>
  <div>
    <Board :board="board_jeton" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "~/components/Board.vue";

export default Vue.extend({
  components: { Board },

  data() {
    return {
      board_jeton: [
        ["0", "0", "0"],
        ["X", "0", "0"],
        ["0", "0", "0"],
      ],
    };
  },
});
</script>
