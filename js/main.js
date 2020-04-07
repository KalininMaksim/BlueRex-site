// https://youtu.be/Zjt1Kcq_a-A

$(function () {
    baguetteBox.run('.gallery');
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var scriptTag = document.getElementsByTagName('script')[0];

scriptTag.appendChild(tag)


function onYouTubeIframeAPIReady() {
    var iStatus;

    oPlayer = new YT.Player('player', {
        height: '480',
        width: '853',
        playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'showinfo': 0, 'rel': 1, 'modestbranding': 0 },
        videoId: 'Zjt1Kcq_a-A',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    var $playButton = $('#videoPlayBtn');
    $playButton.on("click", function () {
        if (iStatus == YT.PlayerState.PLAYING) {
            $playButton.show();
            oPlayer.pauseVideo();
            iStatus = YT.PlayerState.PAUSED;
        } else {
            oPlayer.playVideo();
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
            $playButton.show();
            iStatus = YT.PlayerState.PAUSED;
        } else if (event.data == YT.PlayerState.PLAYING) {
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    }
}
