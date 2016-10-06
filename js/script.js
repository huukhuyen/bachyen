$(document).ready(function() {
    function ShowTime() {
        var date = new Date;
        var month = date.getMonth();
        var thu = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
        var d = thu[date.getDay()] + ", ";
        var year = date.getFullYear();
        var day = date.getDate();
        month = checkTime(month);
        if (day < 10) d += "0" + date.getDate() + "/" + month + "/" + year;
        else d += "" + date.getDate() + "/" + month + "/" + year;

        var g = date.getHours();
        g = checkTime(g);

        var p = date.getMinutes();
        p = checkTime(p);

        var s = date.getSeconds();
        s = checkTime(s);
        $('#timer').html(d + ", " + g + ":" + p + ":" + s);
        $('#year').html(year);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    ShowTime();
    setInterval(function() {
        ShowTime();
    }, 800);
    // Click menu responsive
    $('.toggle-menu').click(function(event) {
        $('.content-list-menu').slideToggle('400');
    });
    // Back to top
    function scrolltop() {
        var id_button = '#upTop';
        var offset = 220;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $(id_button).fadeIn(duration);
            } else {
                $(id_button).fadeOut(duration);
            }
        });
        $(id_button).click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }
    scrolltop();
});
