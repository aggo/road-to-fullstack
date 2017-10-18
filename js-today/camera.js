const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let localMediaStream = null;

function showCamera() {
    navigator.getUserMedia({video: true}, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream;
    }, console.log);
}

function takeSnapshot() {
    if (localMediaStream) {
        ctx.drawImage(video, 0,0, 150, 100);
        document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
}

let idx = 0;
const filters = ['grayscale', 'sepia', 'blur', 'brightness',
    'contrast', 'hue-rotate', 'saturate', 'invert', ''];

function changeFilter(e) {
    const el = e.target;
    el.className = '';
    const effect = filters[idx++ % filters.length]; // loop through filters.
    if (effect) {
        el.classList.add(effect);
    }
}

document.querySelector('video').addEventListener('click', changeFilter, false);
