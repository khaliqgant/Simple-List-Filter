(function(){
    var categories = document.querySelectorAll('.filters a.js-dropdown');
    for (var i=0; i< categories.length; i++)
    {
        categories[i].addEventListener("click",dropItDown,false);
    }

    var filters = document.querySelectorAll('.filters ul li a');
    for (var i=0; i< filters.length; i++)
    {
        filters[i].addEventListener("click",hideTheDrop,false);
    }

    function dropItDown(){
        //hideOtherDrops();
        this.nextElementSibling.toggle();
    }

    function hideTheDrop(){
        this.parentNode.parentNode.style.display = "none";
    }

    function hideOtherDrops(){
        var drops = document.querySelectorAll('.filters ul');
        for (var i=0; i< drops.length; i++)
        {
            drops[i].style.display = "none";
        }
    }

    Element.prototype.toggle = function() {
    //partially lifted from http://stackoverflow.com/questions/20138532/jquery-equivalent-javascript-for-element-function-like-div-toggle
        if (this.style.display == 'block') {
            this.style.display = 'none';
        } else{
            this.style.display = 'block';
        }
    }
})();
