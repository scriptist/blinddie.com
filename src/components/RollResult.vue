<template>
  <div class="root">
    <div v-if="rolling">Rolling...</div>
    <div v-else-if="result != null">
      <div class="die" v-for="number in result">
        {{number}}
      </div>
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
  margin-top: 40px;
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
</style>
