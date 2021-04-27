<template>
  <div class="cell" @click="play(positionPayload)">
    <h2>
      {{ player }}
    </h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mapMutations } from 'vuex'

interface Position {
  column: number;
  row: number;
}

export default Vue.extend({
  name: 'Cell',

  props: {
    player: {
      type: String,
      required: true
    } as PropOptions<string>,
    position: {
      type: Object,
      required: true
    } as PropOptions<Position>
  },

  data () {
    return {
      positionPayload: {
        column: this.position.column,
        row: this.position.row
      }
    }
  },

  methods: {
    ...mapMutations(['play'])
  }
})
</script>

<style scoped>
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  color: black;
  border-radius:0.7rem;
  background-color: white;
  font-size: 2rem;
}
</style>
