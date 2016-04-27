/**
 * Created by hm on 2016/4/25.
 */

var intime,outtime;

if($.browser.msie) {
    intime=outtime=0;
} else {
    intime=100;
    outtime=300;
}

$(document).ready(function(){
    $(".ngnav>ul li").hover(function(){
        $(this).find(".tree_two").show(intime);
        $(this).find(".tree_two").hover(function(){
            $(this).find(".tree_three").show(intime);
            $(this).find(".tree_three").hover(function(){},function(){
                $(this).hide(outtime);
                $(".tree_two").hide(outtime);
            });
        },function(){
            $(this).find(".tree_three").hide(outtime);
            $(this).hide(outtime);
        })
    },function(){
        $(this).find(".tree_two").hide(outtime);
    });
});