(function ($) {

    $.fn.wrapEach = function (what, replace) {
        var text = this.html();
        return this.html(text.replace(what, replace));
    };

}(jQuery));