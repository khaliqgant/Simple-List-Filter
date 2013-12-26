$(document).ready(function() {
    $('.filters').on('click','.js-dropdown',function(){
        $(this).next('ul').toggle();
        return false;
    });
    $('.filters ul li a').on('click',function(){
        $(this).parents('ul').hide();
        return false;
    });
});
