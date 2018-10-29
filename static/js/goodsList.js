/**
 * Created by Administrator on 2016/9/21.
 */
$(function () {
    $.getJSON("/static/json/goodsList.json", function (data) {
        $.each(data, function (i) {
            var li=$("<li class='gdList_r_m_list_li'></li>");
            var id=$("<i class='id' style='display: none'></i>");
            var dl=$("<dl class='gdList_r_m_list_dl'></dl>");
            var dd=$("<dd><a href='addShopCart.html?"+data[i].id+"'><img src=\'"+data[i].src+"\' alt=''></a></dd>");
            var dt=$("<dt><p class='gdList_r_m_list_dl_p1'><a href='#'>"+data[i].name+"</a></p><p class='gdList_r_m_list_dl_p2'><b class='gdList_price'>"+data[i].price+"</b><i class='gdList_red'>"+data[i].red+"</i><em class='gdList_num'>"+data[i].num+"</em></p></dt>");
            id.appendTo(li);
            dl.appendTo(li);
            dd.appendTo(dl);
            dt.appendTo(dl);
            li.appendTo(".gdList_r_m_list ul");
        })
        console.log(data[1].id);
    })

    var goods=JSON.parse($.cookie("cart"));
    var goodsSum=0;
    for(var i=0;i<goods.length;i++)
    {
        goodsSum+=parseInt(goods[i].num);
    }
    console.log(goods[0].num);
    $(".goodsNumx").html(goodsSum);
})
