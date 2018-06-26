
function init(){
    $('td').click(function(){
        if(this.innerHTML == ''){
            if(this.style.background == ''){
                $(this).css('background','	#9D9D9D');
            }else {
                $(this).css('background','');
            }
        }
    });

    var width = $(document.body).width() * 0.4;
    $('#left_area').width(width);
    $('#my').height(width);
    $('#right_area').width(width);
    $('#your').height(width);
    $('#toolbar').width(width * 0.5);
    $('#head').width(width * 0.1);
    $('#head').height(width * 0.1);
    $('#body').width(width * 0.1);
    $('#body').height(width * 0.1);
}