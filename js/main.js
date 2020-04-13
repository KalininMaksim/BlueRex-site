// https://youtu.be/Zjt1Kcq_a-A

$(function () {

    // preloader function

    // $(window).on('load', function () {
    //     $('.preloader').delay(150).fadeOut('slow', function () {
    //         $(this).attr('style', 'display: none !important')
    //     });
    // });


    // galer

    baguetteBox.run('.gallery');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.skrollToTop').fadeIn();
        } else {
            $('.skrollToTop').fadeOut();
        }
    });

    $('.skrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false
    });
});

// castomaise youtube ifraime

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
