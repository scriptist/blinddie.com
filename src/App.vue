<template>
  <div id="app">
    <roll-configurer></roll-configurer>
    <roll-button></roll-button>
    <roll-result></roll-result>
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
    dice: 1,
    sides: 20,
    rolling: false,
    result: null,
  }),
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
