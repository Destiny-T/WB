/**
 * Created by Appleex on 2016/9/10.
 */
$(function(){

    利用json获取动态图片
    $.getJSON("", function (data) {
        $.each(data,function(i) {
            console.log(data[i].src);
            var li=$("<li></li>");
            $("<img/>").attr("src", "img/"+data[i].src).appendTo(li);
            li.appendTo(".bigpic");
        });

        var $banSlide= $('.banSlide');
        var $bigpic = $('.bigpic');
        var $smallIndex = $('.smallIndex');
        var len =data.length;
        var index = 0;
        show();

        //鼠标移入时暂停  移出时运动
        var timer = setInterval(animation,3000);
        $banSlide.on('mouseenter',function(){
            clearInterval(timer);
        }).on('mouseleave',function(){
            timer = setInterval(animation,3000);
        });

        //轮播图的索引
        $smallIndex.on('click','li',function(){
            index = $(this).index();
            show();
        });

        //前后按钮
        $banSlide.on('click','span.prev',function(){
            index--;
            show();
        }).on('click','span.next',function(){
            index++;
            show();
        });

        // 图片切换
        function animation(){
            index++;
            show();
        }
        function show(){
            //console.log(index);
            if(index==len){
                //console.log("hello");
                index=0;
            }else if(index < 0){
                index = len - 1;
            }
            $bigpic.children('li').eq(index).animate({opacity:1}).siblings().animate({opacity:0});
            $(".smallIndex li").eq(index).addClass("active").siblings().removeClass("active");
            //$(".bigpic li img").eq(index).animate({width:"1450px",height:"430px"});
        }
    });
});