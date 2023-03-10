// const playBtn = document.getElementById('play-btn');
// const videoPlayer = document.getElementById('video-player');
// const bgimage = document.getElementById('bgimage');
// const videoUrl = "/images/Aladdin (1992) Trailer 1080p.mp4?autoplay=1";

// // Check if user is on a mobile device
// // if (/Mobi/.test(navigator.userAgent)) {
// //     videoUrl += "&playsinline=1";
// //   }



// playBtn.addEventListener('click', function() {
//     videoPlayer.setAttribute('src', videoUrl);
//     bgimage.style.display = 'none';
// });

// videoPlayer.addEventListener("ended", function() {
//     bgImage.classList.remove("hidden");
// });

var video = document.getElementById("myVideo");

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}