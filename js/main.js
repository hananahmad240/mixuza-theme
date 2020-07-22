$('#year').text(new Date().getFullYear());
$('body').scrollspy({
    target: '#main-nav'
});

$('#main-nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        })
    }
    // console.log(this.hash);

})