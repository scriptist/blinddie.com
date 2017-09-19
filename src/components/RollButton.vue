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
  font-size: 1.4em;
  margin-top: 30px;
  padding: 0.4em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  width: 80%;
}
</style>
