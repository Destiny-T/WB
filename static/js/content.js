/**
 * Created by Administrator on 2016/9/18.
 */
$(function(){
    //利用json获取动态图片
    $.getJSON("/static/json/ptShow_r.json", function (data) {
        $.each(data.pt_slide.ht,function(i) {
            var a=$("<a class='ht_ban_a' href='#'></a>");
            var div=$("<div class='ht_title'></div>");
            var p1=$("<p></p>");
            var p2=$("<p></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_slide.ht[i].pro1);
            p2.html(data.pt_slide.ht[i].pro2);
            $("<img>").attr("src", "/static/img/"+data.pt_slide.ht[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".hot_banner_view_pt");
        });
        $.each(data.pt_slide.sale,function(i) {
            var a=$("<a class='sl_ban_a' href='#'></a>");
            var div=$("<div class='sl_title'></div>");
            var p1=$("<p></p>");
            var p2=$("<p></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_slide.sale[i].pro1);
            p2.html(data.pt_slide.sale[i].pro2);
            $("<img>").attr("src", "/static/img/"+data.pt_slide.sale[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".sale_banner_view_pt");
        });
        $.each(data.pt_slide.new,function(i) {
            var a=$("<a class='nw_ban_a' href='#'></a>");
            var div=$("<div class='nw_title'></div>");
            var p1=$("<p></p>");
            var p2=$("<p></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_slide.new[i].pro1);
            p2.html(data.pt_slide.new[i].pro2);
            $("<img>").attr("src", "/static/img/"+data.pt_slide.new[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".new_banner_view_pt");
        });
        $.each(data.pt_l.ht, function (i) {
            var a=$("<a class='ht_ptShow_l_a' href='#'></a>");
            var p1=$("<p class='ht_ptShow_l_a_p1'></p>");
            var p2=$("<p class='ht_ptShow_l_a_p2'></p>");
            var p3=$("<p class='ht_ptShow_l_a_p3'></p>");
            p1.appendTo(a);
            p2.appendTo(a);
            p3.appendTo(a);
            $("<img>").attr("src", "/static/img/"+data.pt_l.ht[i].src).appendTo(p1);
            p2.html(data.pt_l.ht[i].pro);
            p3.html(data.pt_l.ht[i].price);
            a.appendTo(".ht_ptShow_l");
        });
        $.each(data.pt_l.sale, function (i) {
            var a=$("<a class='sl_ptShow_l_a' href='#'></a>");
            var p1=$("<p class='sl_ptShow_l_a_p1'></p>");
            var p2=$("<p class='sl_ptShow_l_a_p2'></p>");
            var p3=$("<p class='sl_ptShow_l_a_p3'></p>");
            p1.appendTo(a);
            p2.appendTo(a);
            p3.appendTo(a);
            $("<img>").attr("src", "/static/img/"+data.pt_l.sale[i].src).appendTo(p1);
            p2.html(data.pt_l.sale[i].pro);
            p3.html(data.pt_l.sale[i].price);
            a.appendTo(".sl_ptShow_l");
        });
        $.each(data.pt_l.new, function (i) {
            var a=$("<a class='nw_ptShow_l_a' href='#'></a>");
            var p1=$("<p class='nw_ptShow_l_a_p1'></p>");
            var p2=$("<p class='nw_ptShow_l_a_p2'></p>");
            var p3=$("<p class='nw_ptShow_l_a_p3'></p>");
            p1.appendTo(a);
            p2.appendTo(a);
            p3.appendTo(a);
            $("<img>").attr("src", "/static/img/"+data.pt_l.new[i].src).appendTo(p1);
            p2.html(data.pt_l.new[i].pro);
            p3.html(data.pt_l.new[i].price);
            a.appendTo(".nw_ptShow_l");
        });
        $.each(data.pt_r.ht, function (i) {
            var a=$("<a class='ht_ptShow_r_a' href='#'></a>");
            var div=$("<div class='ht_ptShow_r_msg'></div>");
            var p1=$("<p class='ht_ptShow_r_msg_p1'></p>");
            var p2=$("<p class='ht_ptShow_r_msg_p2'></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_r.ht[i].pro);
            p2.html(data.pt_r.ht[i].price);
            $("<img>").attr("src", "/static/img/"+data.pt_r.ht[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".ht_ptShow_r");
        });
        $.each(data.pt_r.sale, function (i) {
            var a=$("<a class='sl_ptShow_r_a' href='#'></a>");
            var div=$("<div class='sl_ptShow_r_msg'></div>");
            var p1=$("<p class='sl_ptShow_r_msg_p1'></p>");
            var p2=$("<p class='sl_ptShow_r_msg_p2'></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_r.sale[i].pro);
            p2.html(data.pt_r.sale[i].price);
            $("<img>").attr("src", "/static/img/"+data.pt_r.sale[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".sl_ptShow_r");
        });
        $.each(data.pt_r.new, function (i) {
            var a=$("<a class='nw_ptShow_r_a' href='#'></a>");
            var div=$("<div class='nw_ptShow_r_msg'></div>");
            var p1=$("<p class='nw_ptShow_r_msg_p1'></p>");
            var p2=$("<p class='nw_ptShow_r_msg_p2'></p>");
            p1.appendTo(div);
            p2.appendTo(div);
            p1.html(data.pt_r.new[i].pro);
            p2.html(data.pt_r.new[i].price);
            $("<img>").attr("src", "/static/img/"+data.pt_r.new[i].src).appendTo(a);
            div.appendTo(a);
            a.appendTo(".nw_ptShow_r");
        });
        $.each(data.logo.ht, function (i) {
            var a=$("<a class='all_brandLogo_wrap_a' href='#'></a>");
            var it=$("<i style='display: none'></i>");
            $("<img>").attr("src", "/static/img/"+data.logo.ht[i].src).appendTo(a);
            it.appendTo(a);
            it.html(data.logo.ht[i].pro);
            a.appendTo(".ht_brandLogo_wrap");
        });
        $.each(data.logo.sale, function (i) {
            var a=$("<a class='all_brandLogo_wrap_a' href='#'></a>");
            var it=$("<i style='display: none'></i>");
            $("<img>").attr("src", "/static/img/"+data.logo.sale[i].src).appendTo(a);
            it.appendTo(a);
            it.html(data.logo.sale[i].pro);
            a.appendTo(".sl_brandLogo_wrap");
        });
        $.each(data.logo.new, function (i) {
            var a=$("<a class='all_brandLogo_wrap_a' href='#'></a>");
            var it=$("<i style='display: none'></i>");
            $("<img>").attr("src", "/static/img/"+data.logo.new[i].src).appendTo(a);
            it.appendTo(a);
            it.html(data.logo.new[i].pro);
            a.appendTo(".new_brandLogo_wrap");
        });
        $.each(data.brand, function (i) {
            var a=$("<a  href='#'></a>");
            var p1=$("<p class='brand_msg_p1'></p>");
            var p2=$("<p class='brand_msg_p2'></p>");
            var p3=$("<p class='brand_msg_p3'></p>");
            $("<img>").attr("src", "/static/img/"+data.brand[i].src1).appendTo(p1);
            $("<img>").attr("src", "/static/img/"+data.brand[i].src2).appendTo(p2);
            p3.html(data.brand[i].pro);
            p1.appendTo(a);
            p2.appendTo(a);
            p3.appendTo(a);
            a.appendTo(".brand_msg");
        });
        $.each(data.like.lk_l, function (i) {
            var a1=$("<a  href='#'></a>");
            $("<img>").attr("src", "/static/img/"+data.like.lk_l[i].src1).appendTo(a1);
            var a2=$("<a  href='#'></a>");
            $("<img>").attr("src", "/static/img/"+data.like.lk_l[i].src2).appendTo(a2);
            var div=$("<div class='lk_guess_l_txt'></div>");
            var diva1=$("<a  href='#'></a>");
            var diva2=$("<a  href='#'></a>");
            var diva3=$("<a  href='#'></a>");
            var diva4=$("<a  href='#'></a>");
            var diva5=$("<a  href='#'></a>");
            var diva6=$("<a  href='#'></a>");
            diva1.appendTo(div);
            diva2.appendTo(div);
            diva3.appendTo(div);
            diva4.appendTo(div);
            diva5.appendTo(div);
            diva6.appendTo(div);
            diva1.html(data.like.lk_l[i].pro1);
            diva2.html(data.like.lk_l[i].pro2);
            diva3.html(data.like.lk_l[i].pro3);
            diva4.html(data.like.lk_l[i].pro4);
            diva5.html(data.like.lk_l[i].pro5);
            diva6.html(data.like.lk_l[i].pro6);
            a1.appendTo(".lk_guess_l");
            a2.appendTo(".lk_guess_l");
            div.appendTo(".lk_guess_l");
        });
        $.each(data.like.lk_r, function (i) {
            var a=$("<a  href='#'></a>");
            $("<img>").attr("src", "/static/img/"+data.like.lk_r[i].src1).appendTo(a);
            var div=$("<div class='lk_guess_r_wrap_a_msg'></div>");
            var h3=$("<h3></h3>");
            h3.html(data.like.lk_r[i].pro1);
            var p=$("<p></p>");
            var span1=$("<span></span>");
            var span2=$("<span></span>");
            span1.html(data.like.lk_r[i].pro2);
            span2.html(data.like.lk_r[i].pro3);
            span1.appendTo(p);
            span2.appendTo(p);
            h3.appendTo(div);
            p.appendTo(div);
            div.appendTo(a);
            a.appendTo(".lk_guess_r_wrap");
        });
        $.each(data.share, function (i) {
            var a=$("<a class='shareShow_a' href='#'></a>");
            var p1=$("<p class='shareShow_a_p1'></p>");
            $("<img>").attr("src", "/static/img/"+data.share[i].src).appendTo(p1);
            var p2=$("<p class='shareShow_a_p2'></p>");
            p1.appendTo(a);
            p2.appendTo(a);
            p2.html(data.share[i].pro);
            a.appendTo(".shareShow");
        });
        $.each(data.shop_news.news, function (i) {
            var li=$("<li></li>");
            var h6=$("<h6 class='newsListh6_a'></h6>");
            h6.appendTo(li);
            var ha=$("<a class='newsList_txt' href='#'></a>");
            var a1=$("<a class='newsList_txt' href='#'></a>");
            var a2=$("<a class='newsList_txt' href='#'></a>");
            var a3=$("<a class='newsList_txt' href='#'></a>");
            var a4=$("<a class='newsList_txt' href='#'></a>");
            var a5=$("<a class='newsList_txt' href='#'></a>");
            ha.html(data.shop_news.news[i].proh6);
            a1.html(data.shop_news.news[i].proa1);
            a2.html(data.shop_news.news[i].proa2);
            a3.html(data.shop_news.news[i].proa3);
            a4.html(data.shop_news.news[i].proa4);
            a5.html(data.shop_news.news[i].proa5);
            ha.appendTo(h6);
            a1.appendTo(li);
            a2.appendTo(li);
            a3.appendTo(li);
            a4.appendTo(li);
            a5.appendTo(li);
            li.appendTo(".newsList ul");
        });
        $.each(data.qrcode, function (i) {
            var a=$("<a class='qr_a' href='#'></a>");
            var div1=$("<div class='qr_a_t'></div>");
            $("<img>").attr("src", "/static/img/"+data.qrcode[i].src).appendTo(div1);
            var div2=$("<div class='qr_a_b'></div>");
            var p1=$("<p class='qr_a_b_1'></p>");
            var p2=$("<p class='qr_a_b_2'></p>");
            p1.html(data.qrcode[i].pro1);
            p2.html(data.qrcode[i].pro2);
            p1.appendTo(div2);
            p2.appendTo(div2);
            div1.appendTo(a);
            div2.appendTo(a);
            a.appendTo(".qrCode_wrap_Sort");
        });
        allShow($('.hot_banner_'),$('.hot_banner_control'),$('.hot_banner_page'),$('.hot_banner_view_pt'),data.pt_slide.ht.length,$('.hot_smallIndex li'));
        allShow($('.sale_banner_'),$('.sale_banner_control'),$('.sale_banner_page'),$('.sale_banner_view_pt'),data.pt_slide.sale.length,$('.sale_smallIndex li'));
        allShow($('.new_banner_'),$('.new_banner_control'),$('.new_banner_page'),$('.new_banner_view_pt'),data.pt_slide.new.length,$('.new_smallIndex li'));
        function allShow(banner_,banner_control,banner_page,banner_view_pt,m,all_smallIndexli){
            var len =m;
            var index = 0;
            show();
            //鼠标移入时暂停  移出时运动
            var timer = setInterval(animation,3000);
            banner_.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(animation,3000);
            });
            //轮播图的索引
            banner_page.on('click','li',function(){
                index = $(this).index();
                show();
            });
            //前后按钮
            banner_control.on('click','span.all_prev',function(){
                index--;
                show();
            }).on('click','span.all_next',function(){
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
                    index=0;
                }else if(index < 0){
                    index = len - 1;
                }
                banner_view_pt.children('a').eq(index).animate({opacity:1}).siblings().animate({opacity:0});
                all_smallIndexli.eq(index).addClass("all_active").siblings().removeClass("all_active");
            }


            // 鼠标移入显示logo名称  移出隐藏
            $(".all_brandLogo_wrap_a").hover(
                function () {
                    $(this).children("i").show();
                    $(this).children("img").hide();
                },
                function () {
                    $(this).children("i").hide();
                    $(this).children("img").show();
                })
        }
    });



    var $nav = $('.panel');
    var $panel=$("");
    var $floor = $('.indexContent .panel_z');
    // 1、给window绑定scroll事件
    $(window).on('scroll',function(){
        // 获取滚动过的距离
        var scrollTop = $(window).scrollTop();

        // 1）当滚动到一定距离时，显示导航条
        if(scrollTop >= $(".hot").offset().top-$nav.height()&&scrollTop<=$(".qrCode").offset().top){
            $nav.fadeIn();
        }else{
            $nav.fadeOut();
        }

        // 2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
        // 目的：获得index值
        $floor.each(function(idx,ele){
            if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
                $nav.find('a').removeClass('panel_act').eq(idx).addClass('panel_act');
                $nav.find('i').removeClass('panel_i1').eq(idx).addClass('panel_i1');
                //console.log(idx);
                return false;
            }
        });
    });

    // 2、点击导航条，滚动到相应的楼层
    $nav.on('click','a',function(){
         //3、返回顶部
        //if($(this).hasClass('last')){
        //    // $(window).scrollTop(0);
        //    $('html,body').animate({scrollTop:0});
        //    return;
        //}
        var index = $(this).index();
        $nav.find('a').removeClass('panel_act').eq(index).addClass('panel_act');
        var scrollTop = $floor.eq(index).offset().top;
         $(window).scrollTop(scrollTop);
        $('html,body').animate({scrollTop:scrollTop});
    });


    var goods=JSON.parse($.cookie("cart"));
    var goodsSum=0;
    for(var i=0;i<goods.length;i++)
    {
        goodsSum+=parseInt(goods[i].num);
    }
    console.log(goods[0].num);
    $(".goodsNumx").html(goodsSum);




});