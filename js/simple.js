$(document).ready(function() {
    $('.filters').on('click','.js-dropdown',function(){
        $(this).find('ul').show();
        return false;
    });
}
