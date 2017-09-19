<template>
  <div id="app">
    <roll-configurer v-model="config" />
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
    config: {
      dice: 2,
      sides: 20,
    },
    rolling: false,
    result: null,
  }),
  methods: {
    roll() {
      this.rolling = true;
      this.result = [...new Array(this.config.dice)]
        .map(() => Math.ceil(Math.random() * this.config.sides));
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
