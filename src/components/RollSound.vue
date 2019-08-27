<script>
import Speech from '../lib/Speech';

async function loadRollBuffer(context) {
  return window
    .fetch('/static/dice-roll.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer));
}

export default {
  name: 'roll-sound',
  props: {
    result: Array,
    rolling: Boolean,
    rollSound: Boolean,
  },
  data() {
    return {
      context: new AudioContext(),
      rollBuffer: null,
    };
  },
  created() {
    loadRollBuffer(this.context).then(rollBuffer => {
      this.rollBuffer = rollBuffer;
    });
  },
  watch: {
    rolling(value) {
      if (value && this.rollSound) {
        const source = this.context.createBufferSource();
        source.buffer = this.rollBuffer;
        source.connect(this.context.destination);
        source.start();
      }
    },
    result(value) {
      if (value == null) {
        return;
      }

      const s =
        value.length > 1
          ? `${value.slice(0, -1).join(', ')}, and ${value[value.length - 1]}`
          : value[value.length - 1];
      Speech.speak(s);
    },
  },
  render() {
    return null;
  },
};
</script>
