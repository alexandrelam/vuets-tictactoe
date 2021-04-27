<template>
  <div>
    <h1>C'est à {{ currentPlayer }} de jouer !</h1>
    <Board />
    <button @click="restart">Restart</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "~/components/Board.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: { Board },
  computed: {
    currentPlayer() {
      return this.$store.state.player;
    },
  },
  methods: {
    ...mapMutations(["restart"]),
  },
});
</script>
