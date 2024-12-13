document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-carousel video');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muted = document.getElementById('mute');
    const stopped = document.getElementById('stop');
    let currentVideoIndex = 0;

    function showVideo(index) {
        videos.forEach(video => {
            video.classList.remove('active');
            video.pause();
        });
        videos[index].classList.add('active');
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
    }

    function togglePlayPause() {
        const currentVideo = videos[currentVideoIndex];
        if (currentVideo.paused) {
            currentVideo.play();
            playPauseBtn.textContent = 'Pausar';
        } else {
            currentVideo.pause();
            playPauseBtn.textContent = 'Reproducir';
        }
    }

    function mute() {
        let icono = document.getElementById('mutedButton');

        if (videos[currentVideoIndex].muted) {
            videos[currentVideoIndex].muted = false;
            icono.src = 'icon/consonido.png';
        } else {
            videos[currentVideoIndex].muted = true;
            icono.src = 'icon/sinsonido.png';
        }
    }

    function stop() {
        videos[currentVideoIndex].pause();
        videos[currentVideoIndex].currentTime = 0;
        playPauseBtn.textContent = 'Reproducir';
    }

    nextBtn.addEventListener('click', nextVideo);
    prevBtn.addEventListener('click', prevVideo);
    playPauseBtn.addEventListener('click', togglePlayPause);
    muted.addEventListener('click', mute);
    stopped.addEventListener('click', stop);

    showVideo(currentVideoIndex);
});