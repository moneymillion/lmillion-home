import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cdrWwGdXIKuUW4RW/scene.splinecode');

document.addEventListener('DOMContentLoaded', function() {
    var getStartedBtn = document.getElementById('get-started-btn');
    getStartedBtn.addEventListener('click', function() {
        window.location.href = "https://lmillion.builder-preview.com/";
    });
});
