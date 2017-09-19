<template>
  <div class="root">
    <div class="field">
      <button @click="() => this.dice--">-</button>
      <label for="dice">Dice</label>
      <button @click="() => this.dice++">+</button>
      <input type="number" id="dice" v-model="dice" />
    </div>
    <div class="field">
      <button @click="() => this.sides--">-</button>
      <label for="sides">Sides</label>
      <button @click="() => this.sides++">+</button>
      <input type="number" id="sides" v-model="sides" />
    </div>
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
      get() { return this.value.dice; },
      set(value) { this.update({ dice: value }); },
    },
    sides: {
      get() { return this.value.sides; },
      set(value) { this.update({ sides: value }); },
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
.root {
  display: flex;
  margin-bottom: 20px;
}

label {
  color: #aaa;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: .1em;
  text-transform: uppercase;
  vertical-align: .2em;
}

button {
  background: none;
  border: none;
  color: #ccc;
  font-size: 1.5em;
  height: 40px;
  position: relative;
  width: 40px;
}

input {
  background: none;
  border: none;
  color: #444;
  font-family: inherit;
  font-size: 2em;
  margin-top: -.25em;
  text-align: center;
  width: 3em;
}
</style>
