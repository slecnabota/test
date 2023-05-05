const openUp = () => {
    document.querySelector(".header-up").classList.add("active");
    document.querySelector(".btn").classList.add("unactive")
}

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,
        easing: "swing"
    }
    );
    return false;
});