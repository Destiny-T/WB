// /**
//  * Created by Administrator on 2016/9/20.
//  */
// $(function () {
//     $.getJSON("json/addShowCart.json", function (data) {
//
//         var x=location.search;
//         var y= x.substring(1);
//         //console.log(y);
//         $.each(data,function(k) {
//             if(y==data[k].id)
//             {
//                 $(".g_r_num_d1_r").click(function () {
//                     $(".g_r_num_d1_c").val(parseInt($(".g_r_num_d1_c").val())+1);
//                 })
//                 $(".g_r_num_d1_l").click(function () {
//                     $(".g_r_num_d1_c").val(parseInt($(".g_r_num_d1_c").val())-1);
//                 })
//                 $(".g_r_btn2").click(function () {
//                     var goodsNum=parseInt($(".g_r_num_d1_c").val());
//                     var goodsId=data[k].id;
//                     var goodsName=$(".goodsName_n").html();
//                     var goodsPriceN=$(".goodsPriceN").html();
//                     var goodsPriceM=$(".goodsPriceM").html();
//                     var goodsImg=$(".goodsImg").attr("src");
//                     var goodsList= $.cookie("cart")?JSON.parse($.cookie("cart")):[];
//                     var isExists=false;
//                     for (var i=0;i<goodsList.length;i++)
//                     {
//                         if(goodsList[i].id==goodsId)
//                         {
//                             var x=parseInt(goodsList[i].num);
//                             goodsList[i].num=x+parseInt(goodsNum);
//                             isExists=true;
//                         }
//                     }
//                     if(!isExists)
//                     {
//                         var goods={
//                             id:goodsId,
//                             name:goodsName,
//                             priceM:goodsPriceM,
//                             priceN:goodsPriceN,
//                             img:goodsImg,
//                             num:goodsNum
//                         };
//                         //console.log(goods.img);
//                         goodsList.push(goods);
//                     }
//                     $.cookie("cart",JSON.stringify(goodsList),{
//                         expires:22,
//                         path:"/"
//                     });
//                     console.log($.cookie("cart"));
//                     var goods=JSON.parse($.cookie("cart"));
//                     var goodsSum=0;
//                     for(var i=0;i<goods.length;i++)
//                     {
//                         goodsSum+=parseInt(goods[i].num);
//                     }
//                     console.log(goods[0].num);
//                     $(".goodsNumx").html(goodsSum);
//                 });
//
//                 $(".g_r_btn1").click(function () {
//                     location.href="clearShopCart.html";
//                 });
//
//
//
//                 $.each(data[k].g_l_s,function(i) {
//                     var a=$("<i class='g_l_s_pic_a'><img src='img/"+data[k].g_l_s[i].src+"' alt=''></i>");
//                     a.appendTo(".g_l_s_pic");
//                 });
//                 $(".goodsImg").attr("src", "img/"+data[k].g_l_b[0].src);
//                 $(".g_l_b_zw_").attr("src", "img/"+data[k].g_l_b[0].src);
//                 $.each(data[k].g_l_b,function(i) {});
//                 $(".g_l_s_pic_a").click(function () {
//                     $(".goodsImg").attr("src", "img/"+data[k].g_l_b[$(this).index()].src);
//                     $(".g_l_b_zw_").attr("src", "img/"+data[k].g_l_b[$(this).index()].src);
//                 })
//                 //console.log(data[k].g_r.name);
//                 var h1 =$("<span class='goodsName_n'>"+data[k].g_r.name+"</span>");
//                 var b=$("<b class='goodsPriceN'>"+data[k].g_r.priceN+"</b>");
//                 var del=$("<del class='goodsPriceM'>"+data[k].g_r.priceM+"</del><span>&nbsp;|&nbsp;</span>");
//                 b.appendTo(".g_r_p_t_1");
//                 del.appendTo(".g_r_p_t_2");
//                 h1.appendTo(".goodsName");
//             }
//         });
//
//
//
//
//         //    $.each(data.g_l_s,function(i) {
//         //
//         //    });
//
//     });
//     var goods=JSON.parse($.cookie("cart"));
//     var goodsSum=0;
//     for(var i=0;i<goods.length;i++)
//     {
//         goodsSum+=parseInt(goods[i].num);
//     }
//     console.log(goods[0].num);
//     $(".goodsNumx").html(goodsSum);
// });

$(function () {

    // 加操作
    $('.g_r_num_d1_r').on('click',function () {
        var goodsid = $(this).attr('goodsid')

        $.get('/wb/addtocart/',{'goodsid':goodsid},function (response) {
            // console.log($(this))
            if (response['status'] == '-1'){

                window.open('/wb/login/',target='_self')
            }else{
                // console.log(response)
                $('.g_r_num_d1_c').attr('value',response['number'])
            }
        })
    })
    // 减操作
    $('.g_r_num_d1_l').on('click',function () {
        var goodsid = $(this).attr('goodsid')

        $.get('/wb/subtocart/',{'goodsid':goodsid},function(response){
            console.log(response)
            if(response['status'] == '1'){
                $('.g_r_num_d1_c').attr('value',response['number'])
            }
        })
    })

})