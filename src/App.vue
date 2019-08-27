<template>
  <div id="app">
    <div class="result">
      <roll-result :result="result" :rolling="rolling" />
    </div>
    <div class="config">
      <roll-configurer v-model="config" />
      <roll-button @click="roll">Roll</roll-button>
    </div>
    <roll-sound
      :result="rolling ? null : result"
      :rolling="rolling"
      :rollSound="config.rollSound"
    />
  </div>
</template>

<script>
import RollButton from './components/RollButton';
import RollConfigurer from './components/RollConfigurer';
import RollResult from './components/RollResult';
import RollSound from './components/RollSound';

export default {
  name: 'app',
  components: {
    RollButton,
    RollConfigurer,
    RollResult,
    RollSound,
  },
  data: () => ({
    config: {
      dice: 2,
      rollSound: true,
      sides: 20,
    },
    rolling: false,
    result: null,
  }),
  methods: {
    roll() {
      this.rolling = true;
      this.result = [...new Array(this.config.dice)].map(() =>
        Math.ceil(Math.random() * this.config.sides),
      );
      setTimeout(() => {
        this.rolling = false;
      }, 800);

      try {
        window.ga('send', 'event', {
          eventCategory: 'dice',
          eventAction: 'roll',
          eventLabel: this.result.join(', '),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Google analytics failed to fire event');
      }
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
  overflow-x: hidden;
  overflow-y: auto;
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
