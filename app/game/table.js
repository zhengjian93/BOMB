var choose_color = '';//所选背景颜色
var game_level = 'easy';
var ROW_COUNT = 9;
var COL_COUNT = 9;

function init(){
    createMyTable();
    createYourTable();
    $('td').click(function(){
        if(isNaN(Number(this.innerHTML))){
            if($(this).css('background-color') == 'rgba(0, 0, 0, 0)'){
                $(this).removeClass('air_init');
                $(this).removeClass('air_head');
                $(this).removeClass('air_body');
                $(this).addClass(choose_color);
            }else {
                $(this).removeClass('air_head');
                $(this).removeClass('air_body');
                $(this).addClass('air_init');
            }
        }
    });

    $('#head').click(function(){
        choose_color = 'air_head';
    });  

    $('#body').click(function(){
        choose_color = 'air_body';
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

function createMyTable(){
    for(var i=0;i<ROW_COUNT;i++){
        var tr = $('<tr></tr>');
        for(var j=0;j<COL_COUNT;j++){
            var td = $('<td class="air_init"></td');
            if(i == 0){
                td.append(j+1);
            }else if(j == 0){       
                td.append(i+1);
            }else{
                var row_input = $('<input type="hidden" class="row" value="'+(i+1)+'" >');
                var col_input = $('<input type="hidden" class="col" value="'+(j+1)+'" >');
                td.append(row_input);
                td.append(col_input);
            }
            tr.append(td);           
        }
        $('#my').prepend(tr);
    }
}

function createYourTable(){
    for(var i=0;i<ROW_COUNT;i++){
        var tr = $('<tr></tr>');
        for(var j=0;j<COL_COUNT;j++){
            var td = $('<td class="air_init"></td');
            if(i == 0){
                td.append(j+1);
            }else{
                if(j == 0){
                    td.append(i+1);
                }
            }
            tr.append(td);
        }
        $('#your').prepend(tr);
    }
}

function save(){
    var head_list = [];
    var body_list = []; 
    $('#my .air_head').each(function(i){
        var row = $(this).find('.row')[0].value;
        var col = $(this).find('.col')[0].value;
        head_list.push('机头坐标('+col+','+row+')');
    });
    $('#my .air_body').each(function(i){
        var row = $(this).find('.row')[0].value;
        var col = $(this).find('.col')[0].value;
        body_list.push('机身坐标('+col+','+row+')');
    });
    alert(head_list+'<br>'+body_list);
    if(body_list.length != head_list.length * 9){
        alert('飞机残缺!');
    }else{
        alert('保存成功!')
    }
}

function reset(){
    $('#my td').removeClass('air_head');
    $('#my td').removeClass('air_body');
    $('#my td').addClass('air_init');
}