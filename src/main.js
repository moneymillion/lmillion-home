import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cdrWwGdXIKuUW4RW/scene.splinecode').then(() => {
  console.log("Scene loaded");
  setTimeout(() => {
    document.getElementById('get-started-btn').style.display = 'block';
    console.log("Button displayed");
  }, 100); // Delay in ms, adjust as needed
});

document.addEventListener('DOMContentLoaded', function() {
    var getStartedBtn = document.getElementById('get-started-btn');
    getStartedBtn.addEventListener('click', function() {
        window.location.href = "https://lmillion.builder-preview.com/";
        console.log("DOM fully loaded and parsed");

    });
});
