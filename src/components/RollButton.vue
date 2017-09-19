<template>
  <button @click="onClick">Roll</button>
</template>

<script>
export default {
  name: 'roll-button',
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
</style>
