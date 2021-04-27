<template>
  <div>
    <h1 v-if="isPartieEnCours">
      {{ currentPlayer }} is playing!
    </h1>
    <h1 v-else-if="isDraw">
      It's a draw !
    </h1>
    <h1 v-else>
      {{ currentPlayer }} won!
    </h1>
    <Board />
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
