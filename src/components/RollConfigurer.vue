<template>
  <div class="root">
    <div class="field">
      <button @click="() => this.dice--">-</button>
      <label class="label" for="dice">Dice</label>
      <button @click="() => this.dice++">+</button>
      <input type="number" id="dice" v-model="dice" />
    </div>
    <div class="field">
      <button @click="() => this.sides--">-</button>
      <label class="label" for="sides">Sides</label>
      <button @click="() => this.sides++">+</button>
      <input type="number" id="sides" v-model="sides" />
    </div>
    <label class="field sound">
      <div class="label">Scod Mode</div>
      <input type="checkbox" id="rollSound" v-model="rollSound" />
    </label>
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
    rollSound: {
      get() {
        return this.value.rollSound;
      },
      set(value) {
        this.update({ rollSound: value });
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
        rollSound: changes.rollSound == null ? this.rollSound === true : changes.rollSound === true,
        sides: this.boundInteger(changes.sides || this.sides, 1, 1000),
      });
    },
  },
};
</script>

<style scoped>
.root {
  display: flex;
  margin-bottom: 1.25em;
  justify-content: space-around;
}

.field {
  display: block;
  width: 10em;
}

.label {
  color: #aaa;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 2rem;
  text-transform: uppercase;
  vertical-align: 0.2em;
}

button {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 1.5em;
  height: 2rem;
  position: relative;
  width: 2rem;
}

input[type='number'] {
  background: none;
  border: none;
  color: #444;
  font-family: inherit;
  font-size: 2rem;
  margin-top: -0.25em;
  text-align: center;
  width: 80%;
}

input[type='checkbox'] {
  display: block;
  height: 1.5rem;
  margin: 0 auto;
  width: 1.5rem;
}

@media (max-width: 380px) {
  .root {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .field {
    display: inline-block;
    margin-top: 0.5rem;
  }
}
</style>
