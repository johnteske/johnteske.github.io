// although on mobile.. scroll is ~56px off due to fixed header
function notMobile() {
    if(window.innerWidth >= 600) return true;
}

// Paulund
$(document).ready(function(){
    if(notMobile()){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 56 // 56px, to offset fixed header
        }, 900, 'swing');
    });
    }
});
