export default {
  isSupported() {
    return !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
  },

  speak(text) {
    if (!this.isSupported()) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  },
};
