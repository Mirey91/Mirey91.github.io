document.addEventListener("DOMContentLoaded", function() {
    var scrollStart = 0;
    var nav = document.querySelector("#header");
    var offset = nav.getBoundingClientRect();

    document.onscroll = function(e) {
        scrollStart = e.target.scrollingElement.scrollTop;
        if (scrollStart > offset.top + 40) {
            nav.style.backgroundColor = "rgba(169, 169, 227)";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    };
});