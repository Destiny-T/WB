// /**
//  * Created by Administrator on 2016/9/20.
//  */
// $(function () {
//
//     var goodsList= $.cookie("cart");
//     if(goodsList)
//     {
//         goodsList=JSON.parse(goodsList);
//         for (var i=0;i<goodsList.length;i++)
//         {
//             var goods=goodsList[i];
//             var tr=$("<tr class='gds_tr2'></tr>");
//             var td1=$("<td class='gds_tr2_td1'><dl class='gds_tr2_td1_dl'><dt><input type='checkbox' checked='checked'><a href='#'><img src='"+goods.img+" '></a></dt><dd><p class='gds_tr2_td1_dl_p1'><a href='#'>"+goods.name+"</a></p><p class='gds_tr2_td1_dl_p2'>附送说明书，全球联保卡</p></dd></dl></td>");
//             var td2=$("<td class='gds_tr2_td2'><p>￥<span>"+goods.priceM+"</span></p></td>");
//             var td3=$("<td class='gds_tr2_td3'><p>￥<span>"+goods.priceN+"</span></p></td>");
//             var td4=$("<td class='gds_tr2_td4'><p><span class='gds_tr2_td4_sp1'>-</span><input type='text' class='gds_tr2_td4_int' value=\'"+goods.num+"\'><span class='gds_tr2_td4_sp2'>+</span></p></td>");
//             var td5=$("<td class='gds_tr2_td5'><p><a href='#'>收藏</a><a href='#'>&nbsp;|&nbsp;</a><a href='#' class='delete'>删除</a></p></td>");
//             td1.appendTo(tr);
//             td2.appendTo(tr);
//             td3.appendTo(tr);
//             td4.appendTo(tr);
//             td5.appendTo(tr);
//             tr.appendTo($(".odr_goods tbody"));
//         }
//
//
//         var gdId=goods.id;
//         var gdName=goods.name;
//         var gdPriceM=goods.priceM;
//         var gdPriceN=goods.priceN;
//         var gdImg=goods.img;
//         $(".gds_tr2_td4_sp2").click(function () {
//             $(this).parent().find(".gds_tr2_td4_int").val(parseInt($(this).parent().find(".gds_tr2_td4_int").val())+1);
//             var goodsNum=parseInt($(this).parent().find(".gds_tr2_td4_int").val());
//             console.log(goodsNum);
//             var goodsId=gdId;
//             var goodsName=gdName;
//             var goodsPriceN=gdPriceN;
//             var goodsPriceM=gdPriceM;
//             var goodsImg=gdImg;
//             var goodsList= $.cookie("cart")?JSON.parse($.cookie("cart")):[];
//             var isExists=false;
//             for (var i=0;i<goodsList.length;i++)
//             {
//                 if(goodsList[i].id==goodsId)
//                 {
//                     //var x=parseInt(goodsList1[i].num);
//                     goodsList[i].num=parseInt(goodsNum);
//                     isExists=true;
//                 }
//             }
//             if(!isExists)
//             {
//                 var goods1={
//                     id:goodsId,
//                     name:goodsName,
//                     priceM:goodsPriceM,
//                     priceN:goodsPriceN,
//                     img:goodsImg,
//                     num:goodsNum
//                 };
//                 goodsList.push(goods1);
//             }
//             $.cookie("cart",JSON.stringify(goodsList),{
//                 expires:22,
//                 path:"/"
//             });
//             var goodsList= $.cookie("cart");
//             if(goodsList) {
//                 goodsList = JSON.parse(goodsList);
//                 //for (var i = 0; i < goodsList.length; i++) {
//                 //    var goods = goodsList[i];
//                 //}
//             }
//             console.log($.cookie("cart"));
//             var money=0;
//             var save=0;
//             for(var i=0;i<goodsList.length;i++)
//             {
//                 money+=parseInt(goodsList[i].priceN)*parseInt(goodsList[i].num);
//                 save+=parseInt(goodsList[i].priceM)*parseInt(goodsList[i].num);
//
//             }
//             var saveSum=save-money;
//             $(".odr_list_c_sum").html(money);
//             $(".odr_list_c_save").html(saveSum);
//         });
//
//         $(".gds_tr2_td4_sp1").click(function () {
//             $(this).parent().find(".gds_tr2_td4_int").val(parseInt($(this).parent().find(".gds_tr2_td4_int").val())-1);
//             var goodsNum=parseInt($(this).parent().find(".gds_tr2_td4_int").val());
//             var goodsId=gdId;
//             var goodsName=gdName;
//             var goodsPriceN=gdPriceN;
//             var goodsPriceM=gdPriceM;
//             var goodsImg=gdImg;
//             var goodsList= $.cookie("cart")?JSON.parse($.cookie("cart")):[];
//             var isExists=false;
//             for (var i=0;i<goodsList.length;i++)
//             {
//                 if(goodsList[i].id==goodsId)
//                 {
//                     //var x=parseInt(goodsList1[i].num);
//                     goodsList[i].num=parseInt(goodsNum);
//                     isExists=true;
//                 }
//             }
//             if(!isExists)
//             {
//                 var goods1={
//                     id:goodsId,
//                     name:goodsName,
//                     priceM:goodsPriceM,
//                     priceN:goodsPriceN,
//                     img:goodsImg,
//                     num:goodsNum
//                 };
//                 goodsList.push(goods1);
//             }
//             $.cookie("cart",JSON.stringify(goodsList),{
//                 expires:22,
//                 path:"/"
//             });
//             var goodsList= $.cookie("cart");
//             if(goodsList) {
//                 goodsList = JSON.parse(goodsList);
//                 //for (var i = 0; i < goodsList.length; i++) {
//                 //    var goods = goodsList[i];
//                 //}
//             }
//             console.log($.cookie("cart"));
//             var money=0;
//             var save=0;
//             for(var i=0;i<goodsList.length;i++)
//             {
//                 money+=parseInt(goodsList[i].priceN)*parseInt(goodsList[i].num);
//                 save+=parseInt(goodsList[i].priceM)*parseInt(goodsList[i].num);
//
//             }
//             var saveSum=save-money;
//             $(".odr_list_c_sum").html(money);
//             $(".odr_list_c_save").html(saveSum);
//
//         })
//         $(".gds_tr2_td4_int").change(function () {
//             var goodsNum=parseInt($(this).parent().find(".gds_tr2_td4_int").val());
//             var goodsId=gdId;
//             var goodsName=gdName;
//             var goodsPriceN=gdPriceN;
//             var goodsPriceM=gdPriceM;
//             var goodsImg=gdImg;
//             var goodsList= $.cookie("cart")?JSON.parse($.cookie("cart")):[];
//             var isExists=false;
//             for (var i=0;i<goodsList.length;i++)
//             {
//                 if(goodsList[i].id==goodsId)
//                 {
//                     //var x=parseInt(goodsList1[i].num);
//                     goodsList[i].num=parseInt(goodsNum);
//                     isExists=true;
//                 }
//             }
//             if(!isExists)
//             {
//                 var goods1={
//                     id:goodsId,
//                     name:goodsName,
//                     priceM:goodsPriceM,
//                     priceN:goodsPriceN,
//                     img:goodsImg,
//                     num:goodsNum
//                 };
//                 goodsList.push(goods1);
//             }
//             $.cookie("cart",JSON.stringify(goodsList),{
//                 expires:22,
//                 path:"/"
//             });
//             var goodsList= $.cookie("cart");
//             if(goodsList) {
//                 goodsList = JSON.parse(goodsList);
//                 //for (var i = 0; i < goodsList.length; i++) {
//                 //    var goods = goodsList[i];
//                 //}
//             }
//             console.log($.cookie("cart"));
//             var money=0;
//             var save=0;
//             for(var i=0;i<goodsList.length;i++)
//             {
//                 money+=parseInt(goodsList[i].priceN)*parseInt(goodsList[i].num);
//                 save=parseInt(goodsList[i].priceN)*parseInt(goodsList[i].num)-money;
//             }
//             $(".odr_list_c_sum").html(money);
//             $(".odr_list_c_save").html(save);
//         })
//         $(".delete").click(function () {
//             $(this).closest("tr").remove();
//             $(".odr_list_c_sum").html($(this).parent().parent().parent().find(".gds_tr2_td3 p span").html());
//             //$(".odr_list_c_save").html(saveSum);
//             $.cookie("cart","",{
//                 path:"/",
//                 expires:0
//             })
//         });
//
//         console.log(goodsList.length);
//         var money=0;
//         var save=0;
//         for(var i=0;i<goodsList.length;i++)
//         {
//              money+=parseInt(goodsList[i].priceN)*parseInt(goodsList[i].num);
//              save+=parseInt(goodsList[i].priceM)*parseInt(goodsList[i].num);
//
//         }
//         var saveSum=save-money;
//         $(".odr_list_c_sum").html(money);
//         $(".odr_list_c_save").html(saveSum);
//     }
//     else {
//         $(".odr_list_c_sum").html(0);
//         $(".odr_list_c_save").html(0);
//     }
//
//
//
// });

$(function () {


    total()


    $('.gds_tr2_td5').on('click',function () {
        // console.log($(this))
        var cartid = $(this).attr('cartid')
        var $that = $(this)

        $.get('/wb/changecartstatus/',{'cartid':cartid},function (response) {
            // console.log(response)
            if (response['status'] == '1') {
                var isselect = response['isselect']
                $that.attr('isselect', isselect)


                $that.children().remove()
                // console.log($(this))
                if (isselect) {
                    $that.append('<span class="cd">*</span>')
                } else {
                    $that.append('<span class="no"></span>')
                }

                total()
             }
        })
    })

    function total(){
        var sum = 0

        $('.gds_tr2').each(function () {
            // console.log($(this))
            var $confirm = $(this).find('.gds_tr2_td5')
            // console.log($confirm)
            // var $content = $(this).find('.gds_tr2_td4')
            // console.log($content)


            if ($confirm.find('.cd').length){
                // console.log($(this))
                var price = parseInt( $(this).find('.gds_tr2_td3_span').html())
                // console.log(price)
                var num = parseInt($(this).find('.gds_tr2_td4_int').attr('value'))
                console.log(num)
                sum += num * price
                // console.log(sum)
            }
        })
        $('.odr_list_c_sum').html(sum)
    }
})