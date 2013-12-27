(function(){
    var filters = document.querySelectorAll('.filters ul li a')

    for (var i=0; i< filters.length; i++)
    {
        filters[i].addEventListener("click",filterAction,false);
    }

    function filterAction(){
        var filtered = this.parentNode.parentNode.className;
        var pattern = "js-([^-]+)-";
        var match = filtered.match(pattern);
        var group = match[1];
        var filter = this.parentNode.innerHTML.replace(/<[^>]*>/g, "");
        var items = document.getElementById('kjg-simple').getElementsByClassName('js-filter-item');
        var js_done = false;
        filterIt(group,filter,items,this.parentNode,js_done);

        return false;
    }

    function filterIt(group,filter,items,that,js_done){
        for (var i=0; i < items.length; i++)
        {
            items[i].style.display = "inline"

            if ((that.className).indexOf("active") > -1)
                {
                    //need to set all items to a display of inline
                    for (var i=0; i < items.length; i++)
                    {
                        items[i].style.display = "inline";
                    }
                    that.setAttribute("class","");
                    js_done = true;
                    return false;
                }
            var itemFilter = items[i].getAttribute('data-'+ group + '-filter');
            itemFilter = itemFilter.toLowerCase();
            filter = filter.toLowerCase();
            if (filter != itemFilter)
                {
                    items[i].style.display = "none";
                }

        }
        if (!js_done)
            {
                removeActiveClass();
                that.setAttribute("class","active");
            }

    }

    function removeActiveClass(that)
    {
        var filters = document.querySelectorAll('.filters ul li')
        for (var i=0; i < filters.length; i++)
        {
            filters[i].className = "";
        }
    }


})();

