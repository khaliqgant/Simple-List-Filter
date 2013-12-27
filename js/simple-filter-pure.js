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
            //HT http://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript
            var display = window.getComputedStyle(items[i]).getPropertyValue('display');
            if (items[i].style)
            {
                if (display === "" || display === "none")
                    {
                        items[i].style.display = items[i].getAttribute('oldDisplay');
                    }

            }

            if ((that.className).indexOf("active") > -1)
            {
                for (var i=0; i < items.length; i++)
                {
                    display = items[i].getAttribute('oldDisplay');
                    items[i].style.display = display;
                }
                that.setAttribute("class","");
                js_done = true;

                return false;
            }

            var itemFilter = items[i].getAttribute('data-'+ group + '-filter');
            itemFilter = itemFilter.toLowerCase();
            filter = filter.toLowerCase();
            if (filter !== itemFilter)
            {
                //set data attribute before hiding the item
                //HT http://stackoverflow.com/questions/8970184/how-does-jquerys-show-hide-function-work
                if (display !== "none" && !items[i].getAttribute('oldDisplay'))
                {
                    items[i].setAttribute("oldDisplay",display);
                }
                items[i].style.display = "none";
            }

        }
        if (!js_done)
        {
            removeActiveClass();
            that.setAttribute("class","active");
        }

    }

    function removeActiveClass()
    {
        var filters = document.querySelectorAll('.filters ul li')
        for (var i=0; i < filters.length; i++)
        {
            filters[i].className = "";
        }
    }

})();

