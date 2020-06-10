(function ($) {
    
    // Init
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Geri sayım
    if ($('#countdown').length) { 
        $('#countdown').countdown({
            render: function(data) {
                if (data.years >= 1) {
                    var $days = (data.years*365)+data.days;
                } else {
                    var $days = data.days;
                }
                $(this.el).html(
                    '<div class="day">' + this.leadingZeros($days) + ' <span>Gün</span></div>'+
                    '<div class="hour">' + this.leadingZeros(data.hours, 2) + ' <span>Saat</span></div>'+
                    '<div class="min">' + this.leadingZeros(data.min, 2) + ' <span>Dakika</span></div>'+
                    '<div class="sec">' + this.leadingZeros(data.sec, 2) + ' <span>Saniye</span></div>'
                );
            }
        });
    }
    
})(jQuery);
