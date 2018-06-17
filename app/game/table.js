
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
}