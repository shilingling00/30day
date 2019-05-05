$(document).ready(function() {
   // $('i').hide();
})

$(window).load(function() {
    //$('i').show();

    var twitterPos = $('.iconweixin').position();
    var githubPos = $('.iconGitHub').position();
    var stackPos = $('.iconyouxiang').position();
    var linkedinPos = $('.iconweibo').position();
    var codePos = $('.iconqq').position();
    var plusPos = $('.iconfacebook').position();
    var mailPos = $('.icontwitter').position();
    var imgPos = $('.imgbox').position();


    $('i').css({
        position: 'absolute',
        zIndex: '1',
        top: imgPos.top + 100,
        left: '47%'
    });

    setTimeout(function() {
        $('.iconweixin').animate({
            top: twitterPos.top + 10,
            left: twitterPos.left - 10
        }, 500);
    }, 250);

    setTimeout(function() {
        $('.iconGitHub').animate({
            top: twitterPos.top,
            left: twitterPos.left
        }, 250);

        $('.iconGitHub').animate({
            top: githubPos.top + 10,
            left: githubPos.left - 6
        }, 500);
    }, 500);

    setTimeout(function() {
        $('.iconyouxiang').animate({
            top: githubPos.top,
            left: githubPos.left
        }, 250);

        $('.iconyouxiang').animate({
            top: stackPos.top + 10,
            left: stackPos.left - 3
        }, 500);
    }, 750);



})