export default function speak(text) {
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
