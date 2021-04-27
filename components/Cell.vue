<template>
  <div class="cell">
    <h2>
      {{ player }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "Cell",

  props: {
    player: {
      type: String,
      required: true,
    } as PropOptions<string>,
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

