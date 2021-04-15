$(function () {
    'use strict';
    $('html').niceScroll({
        cursorwidth: "5px",
        background: "#eee",
        cursorcolor: "#eebb4d",
        cursorborder: 0,
        cursorborderradius: 0
    });
    // Smooth Scroll To Element
    $('.header .navbar .links li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 2000);
    });
    // Add Class Active On Link and Remove class Active On Siblings
    $('.header .navbar .links li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    // navbar add class scroll-selected
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scroll-selected');
        } else {
            $('.navbar').removeClass('scroll-selected');
        }
    });
    // Sync Navbar Links with Section
    $(window).scroll(function () {
        $('.blocked').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top) {
                $('.header .navbar .links li a').removeClass('active');
                $('.header .navbar .links li a[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    // addClass ListItem Features
    $('.features .listItem li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Show And Hide
    $('.features .listItem li').click(function () {
        $('.features .biolist > div').hide();
        $($(this).data('class')).show();
    });
    // addClass list-point AboutUs
    $('.people .comments .list-point-click li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Show And Hide
    $('.people .comments .list-point-click li').click(function () {
        $('.people .comments .block-div > div').hide();
        $($(this).data('list')).show();
    });
    // ScrollTop Hide And Show
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        }else {
            $('#scrollTop').fadeOut();
        }
    });
    // ScrollTop Up
    $('#scrollTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
});
