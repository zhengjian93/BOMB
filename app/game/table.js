var choose_color = '';//所选背景颜色

function init(){

    $('td').click(function(){
        if(this.innerHTML == ''){
            if(this.style.background == ''){
                $(this).css('background', choose_color);
            }else {
                $(this).css('background','');
            }
        }
    });

    $('#head').click(function(){
        choose_color = 'red';
    });  

    $('#body').click(function(){
        choose_color = '#9D9D9D';
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