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
button {
  background: #7DB4C1;
  border: none;
  border-bottom: 2px solid #327585;
  color: white;
  font-size: 1.6em;
  letter-spacing: .05em;
  padding: 1em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  width: 100%;
}
</style>
