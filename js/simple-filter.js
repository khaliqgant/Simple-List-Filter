$(document).ready(function() {
    var $filters = $('.filters ul');
    $.each($filters,function(index){
        $(this).find('a').on('click',function(){
           var filtered = $(this).parents('ul').attr("class");
           var pattern = "js-([^-]+)-";
           var match = filtered.match(pattern);
           var group = match[1];

           //want the parent li
           var $that = $(this).parent('li');
           var js_done = false;
           var filter = $(this).text();
           var $items = $('#kjg-simple').find('.js-filter-item');

           $.each($items,function(index){
               //show previously hidden items
               $(this).show();
               if ($that.hasClass("active")){
                   $items.show();
                   $that.removeClass('active');
                   js_done = true;
                   return false;
               }

               var itemFilter = $(this).data(group + '-filter');
               itemFilter = itemFilter.toLowerCase();
               filter = filter.toLowerCase();

               if (filter != itemFilter)
                   {
                       $(this).hide();
                   }

           });
           if (!js_done)
               {
                   //not simply clicking the already active filter
                   $that.addClass("active");
                   $that.siblings().removeClass("active");
               }

           return false;

        });
    });

});

