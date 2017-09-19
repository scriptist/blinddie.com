<template>
  <div>
    Rolling
    <number-input :value="dice" @input="updateDice" />
    dice with
    <number-input :value="sides" @input="updateSides" />
    sides
  </div>
</template>

<script>
import NumberInput from './NumberInput';

export default {
  name: 'roll-configurer',
  components: {
    NumberInput,
  },
  props: {
    dice: {
      type: Number,
      required: true,
    },
    sides: {
      type: Number,
      required: true,
    },
  },
  methods: {
    boundInteger(n, min, max) {
      return Math.max(min, Math.min(max, Math.round(n)));
    },
    updateDice(value) {
      this.$emit('update:dice', this.boundInteger(value, 1, 10));
    },
    updateSides(value) {
      this.$emit('update:sides', this.boundInteger(value, 1, 1000));
    },
  },
};
</script>

<style scoped>
</style>
