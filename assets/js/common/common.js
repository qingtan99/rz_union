/**
 * Created by tanqing on 2017/8/16.
 */

$(function() {
    $(".m-hd-nav ul li").on({
        mouseenter: function() {
            $(this).siblings().find(".nav-chilist").hide();
            $(this).find(".nav-chilist").show();
        },
        mouseleave: function() {
            $(this).find(".nav-chilist").hide();
        }
    });

    $(".m-hd-nav .nav-chilist").on({
        mouseenter: function() {
            $(this).siblings().addClass("h-nav-active");
        },
        mouseleave: function() {
            $(this).siblings().removeClass("h-nav-active");
        }
    });
});