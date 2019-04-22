<script type="text/javascript">
    $(window).load(function(){
      
$.fn.capitalize = function () {
    $.each(this, function () {
        var split = this.value.split(' ');
        for (var i = 0, len = split.length; i < len; i++) {
            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase();
        }
        this.value = split.join(' ');
    });
    return this;
};

$('#person_name').on('keyup', function () {
    $(this).capitalize();
}).capitalize();

    });
</script>
