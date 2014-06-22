(function () {
    var imgPreloader = (function () {
        var load = function (opts) {
            var options = $.extend({
                src: '',
                html: '',
                callback: null,
                width: 300,
                height: 300,
            }, opts);
            var image = new Image(300, 300);
            image.src = src;
            image.onload = function () {
                if (options.html  != '' && options.callback != null)
                    options.callback(options.html);
            };
        }
        return {
            load: load
        };
    }());
});