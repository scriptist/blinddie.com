<template>
  <div id="app">
    <roll-configurer :dice.sync="dice" :sides.sync="sides" />
    <roll-button @click="roll">Roll</roll-button>
    <roll-result :result="result" :rolling="rolling" />
  </div>
</template>

<script>
import RollButton from './components/RollButton';
import RollConfigurer from './components/RollConfigurer';
import RollResult from './components/RollResult';

export default {
  name: 'app',
  components: {
    RollButton,
    RollConfigurer,
    RollResult,
  },
  data: () => ({
    dice: 2,
    sides: 20,
    rolling: false,
    result: null,
  }),
  methods: {
    roll() {
      this.rolling = true;
      this.result = [...new Array(this.dice)]
        .map(() => Math.ceil(Math.random() * this.sides));
      setTimeout(() => {
        this.rolling = false;
      }, 500);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
