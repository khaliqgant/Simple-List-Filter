Simple List Filter
=====

Some super simple JS to to filter items using a dropdown menu

Requirements
------
Simple List Filter was made to be as modifiable and easy to use as possible:
* The dropdown filters must be enclosed in an element with a class of "filters"
* The filter category should be the dropdown text ie: ````<a class="js-dropdown" href="#">Cat</a>````
* The ul enclosing the filters should be preceded with a "js" and end with "filter", ex: "js-desiredFilter-filter"
* The filter should be the link text within an li ie: ````<li><a href="#">Playful</a></li>````

```
    <div class="filters">
        <a class="js-dropdown" href="#">Cat</a>
        <ul class="js-cat-filter">
            <li><a href="#">Playful</a></li>
        </ul>
        <a class="js-dropdown" href="#">Food</a>
        <ul class="js-food-filter">
            <li><a href="#">Chicken</a></li>
        </ul>
    </div>
```

* The items to be filtered should be within a ul with an id of "kjg-simple" (kjg being my initials #vain)
* The li item should have a class of js-filter-item and data attributes should specify the filter category
```
        <ul id="kjg-simple">
            <li class="js-filter-item" data-food-filter="Bacon" data-cat-filter="">
                <img class="list-item" src="assets/bacon.jpg">
            </li>
        </ul>
```

* This simple "plugin" requires jQuery

Warranty/License
--------
There's no warranty of any kind. If you find a bug, please report it or submit a pull request with a fix. It's provided completely as-is; if something breaks, you lose data, or something else bad happens, the author(s) and owner(s) of this add-on are in no way responsible.

Why did you make this?
--------
Well, there are several plugins to filter items but none seemed to be modifiable and modular enough for what I need it for. I left the styling and markup as simplistic as possible so you can simply copy the JS code into your project and make it look however you want.
There are a plethora of (more robust) plugins out there to filter items:
* List.js (http://listjs.com/)
* Quicksand (http://razorjack.net/quicksand/)
* Filtrify (http://luis-almeida.github.io/filtrify/)

