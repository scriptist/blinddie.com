<template>
  <div class="root">
    <div v-if="rolling" class="hint">Rolling...</div>
    <div v-else-if="result != null">
      <div class="die" v-for="number in result">
        {{number}}
      </div>
    </div>
    <div v-else class="hint">
      Press "Roll" to start
    </div>
  </div>
</template>

<script>
export default {
  name: 'roll-result',
  props: {
    result: Array,
    rolling: Boolean,
  },
};
</script>

<style scoped>
.root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.die {
  border: 2px solid #ccc;
  color: #444;
  display: inline-block;
  font-size: 60px;
  height: 100px;
  line-height: 100px;
  margin: 20px;
  width: 100px;
}

.hint {
  color: #ccc;
}
</style>
