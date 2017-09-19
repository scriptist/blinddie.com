<template>
  <div>
    {{value}}
    <button @click="onIncrease">+</button>
    <button @click="onDecrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'number-input',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onIncrease() {
      this.$emit('input', this.value + 1);
    },
    onDecrease() {
      this.$emit('input', this.value - 1);
    },
  },
};
</script>

<style scoped>
</style>
