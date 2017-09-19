<template>
  <div id="app">
    <div class="result">
      <roll-result :result="result" :rolling="rolling" />
    </div>
    <div class="config">
      <roll-configurer v-model="config" />
      <roll-button @click="roll">Roll</roll-button>
    </div>
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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.result,
.config {
  background: white;
  left: 0;
  position: fixed;
  width: 100%;
}

.result {
  bottom: 12em;
  overflow: auto;
  top: 0;
}

.config {
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 12em;
  justify-content: flex-end;
}
</style>
