var SpeechRecognition =
window.speechRecognition || window.webkitSpeechRecognition;
export const recognition = new SpeechRecognition();

export const startReco = () => {
  recognition.start();
};
export const stopReco = () => {
  recognition.stop();
};
