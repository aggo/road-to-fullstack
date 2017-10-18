function audio() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    const context = new AudioContext();

    navigator.getUserMedia({audio: true}, function(stream) {
        const microphone = context.createMediaStreamSource(stream);

        microphone.connect(context.destination);
    }, console.log);
}
