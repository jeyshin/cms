// Slider Value
$('input[type=range]').on('input', function(e){
    if (this.className != 'disabled')
    {
        var _m = e.target.min,
        _p = e.target.max,
        _v = e.target.value;

        $(e.target).css({
            'backgroundSize': (_v - _m) * 100 / (_p - _m) + '% calc(100% - 2px)'
        });
    }
}).trigger('input');