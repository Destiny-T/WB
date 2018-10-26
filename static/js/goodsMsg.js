/**
 * Created by Administrator on 2016/9/20.
 */
$(function(){
    var _smallImg = $(".g_l_b_z"); //小图
    var _smallArea = $(".g_l_b_zp"); //小区域
    var _bigImg = $(".g_l_b_zw_"); //大图
    var _bigArea = $(".g_l_b_zw"); //大区域

    _smallArea.width( _smallImg.width()/_bigImg.width() * _bigArea.width() );
    _smallArea.height( _smallImg.height()/_bigImg.height() * _bigArea.height() );


    //放大系数(放大倍数)
    var scale = _bigImg.width() / _smallImg.width();


    //鼠标移动
    _smallImg.mousemove(function(e){
        _bigArea.show();
        _smallArea.show(); //显示小区域

        //移动小区域, 跟随鼠标移动
        var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
        var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;

        //判断x不超出左边界,也不超出右边界
        if (x < 0) {
            x = 0;
        }
        else if (x > _smallImg.width() - _smallArea.width()) {
            x = _smallImg.width() - _smallArea.width();
        }

        //判断y不超出上边界,也不超出下边界
        if (y < 0) {
            y = 0;
        }
        else if (y > _smallImg.height() - _smallArea.height()) {
            y = _smallImg.height() - _smallArea.height();
        }

        _smallArea.css({left: x, top: y});

        //移动大图
        _bigImg.css({left: -x*scale, top: -y*scale});

    })

    //鼠标移出
    _smallImg.mouseleave(function(){
        _bigArea.hide();
        _smallArea.hide(); //隐藏小区域
    })
})