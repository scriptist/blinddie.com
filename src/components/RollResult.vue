<template>
  <div>
    <div v-if="rolling">Rolling...</div>
    <div v-else-if="result != null">Roll Result: {{result}}</div>
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
</style>
