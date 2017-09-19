<template>
  <div>
    Rolling
    <input type="number" v-model="dice" />
    dice with
    <input type="number" v-model="sides" />
    sides
  </div>
</template>

<script>
export default {
  name: 'roll-configurer',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dice: {
      get() {
        return this.value.dice;
      },
      set(value) {
        this.update({ dice: value });
      },
    },
    sides: {
      get() {
        return this.value.sides;
      },
      set(value) {
        this.update({ sides: value });
      },
    },
  },
  methods: {
    boundInteger(n, min, max) {
      return Math.max(min, Math.min(max, Math.round(n)));
    },
    update(changes) {
      this.$emit('input', {
        dice: this.boundInteger(changes.dice || this.dice, 1, 10),
        sides: this.boundInteger(changes.sides || this.sides, 1, 1000),
      });
    },
  },
};
</script>

<style scoped>
</style>
