document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-carousel video');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muted = document.getElementById('mute');
    const stopped = document.getElementById('stop');
    const pausePlay = document.getElementById('pausePlay');
    const volumen = document.getElementById('volumeControl');
    const tiempo = document.getElementById('tiempo');

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
        pausePlay.src = 'icon/play.png';
    }
    
    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
        pausePlay.src = 'icon/play.png';
    }

    function togglePlayPause() {
        const currentVideo = videos[currentVideoIndex];
        if (currentVideo.paused) {
            currentVideo.play();
            pausePlay.src = 'icon/pausa.png';
        } else {
            currentVideo.pause();
            pausePlay.src = 'icon/play.png';
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
        pausePlay.src = 'icon/play.png';
    }

    function volume() {
        videos[currentVideoIndex].volume = volumen.value / 100;
    }

    function updateProgress() {
        const currentVideo = videos[currentVideoIndex];
        currentVideo.currentTime = (tiempo.value / 100) * currentVideo.duration;
        currentVideo.addEventListener('timeupdate', function() {
            tiempo.value = (currentVideo.currentTime / currentVideo.duration) * 100;
        });

    }

    nextBtn.addEventListener('click', nextVideo);
    prevBtn.addEventListener('click', prevVideo);
    playPauseBtn.addEventListener('click', togglePlayPause);
    muted.addEventListener('click', mute);
    stopped.addEventListener('click', stop);
    pausePlay.addEventListener('click', togglePlayPause);
    volumen.addEventListener('input', volume);
    tiempo.addEventListener('click', updateProgress);
    tiempo.addEventListener('input', updateProgress);

    showVideo(currentVideoIndex);
});