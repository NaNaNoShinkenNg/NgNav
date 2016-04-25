/**
 * Created by hm on 2016/4/25.
 */
$(document).ready(function(){
    $(".ngnav>ul li").hover(function(){
        $(this).find(".tree_two").show(100);
        $(this).find(".tree_two").hover(function(){
            $(this).find(".tree_three").show(100);
            $(this).find(".tree_three").hover(function(){},function(){
                $(this).hide(300);
                $(".tree_two").hide(300);
            });

        },function(){
            $(this).find(".tree_three").hide(300);
            $(this).hide(300);

        })
    },function(){
        $(this).find(".tree_two").hide(300);
    });

});