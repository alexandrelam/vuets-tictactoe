<template>
  <div
    class="cell"
    @click="
      togglePlayer();
      play(positionPayload);
    "
  >
    <h2>
      {{ player }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapMutations } from "vuex";

interface Position {
  column: number;
  row: number;
}

export default Vue.extend({
  name: "Cell",

  data() {
    return {
      positionPayload: {
        column: this.position.column,
        row: this.position.row,
      },
    };
  },

  props: {
    player: {
      type: String,
      required: true,
    } as PropOptions<string>,
    position: {
      type: Object,
      required: true,
    } as PropOptions<Position>,
  },

  methods: {
    ...mapMutations(["togglePlayer", "play"]),
  },
});
</script>

<style scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  padding: 1rem 2.5rem;
}
</style>

