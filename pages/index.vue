<template>
  <div class="container">
    <h1 v-if="isPartieEnCours">
      {{ currentPlayer }} is playing!
    </h1>
    <h1 v-else-if="isDraw">
      It's a draw !
    </h1>
    <h1 v-else>
      {{ currentPlayer }} won!
    </h1>
    <div class="board-wrapper">
      <Board />
    </div>
    <button @click="restart">
      Restart
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Board from '~/components/Board.vue'

export default Vue.extend({
  components: { Board },
  computed: {
    currentPlayer () {
      return this.$store.state.player
    },
    isDraw () {
      return this.$store.state.isDraw
    },
    isPartieEnCours () {
      return this.$store.state.isPartieEnCours
    }
  },
  methods: {
    ...mapMutations(['restart'])
  }
})
</script>

<style>
* {
  --bg-dark: #202135;
  --bg: #363752;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

body {
  background-color: var(--bg-dark);
  color: white;
  margin: 0;
}

h1{
    margin-bottom: 7rem;
    font-size:3rem;
}

.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  margin: auto;
}

.board-wrapper {
  padding: 3rem;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}
</style>
