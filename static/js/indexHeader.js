/**
 * Created by Administrator on 2016/9/21.
 */
$(function () {

    //手机万表下拉二维码
    $(".loginBtn_ph").mouseover(function () {
        $(".login_r_ph_qr").show();
    })
    $(".loginBtn_ph").mouseout(function () {
        $(".login_r_ph_qr").hide();
    })


    //menu鼠标移入显示子级菜单
    $(".subMenuList").mouseover(function () {
        $(this).find(".subMenuList_m1").show();
    })
    $(".subMenuList").mouseout(function () {
        $(this).find(".subMenuList_m1").hide();
    })


    $(".submenuNav_").mouseover(function () {
        $(this).find(".submenuNav_sub1").show();
    })
    $(".submenuNav_").mouseout(function () {
        $(this).find(".submenuNav_sub1").hide();
    })
    $(".submenuNav_sub1 li").mouseover(function () {
        $(this).css("background","#ccc");
    })
    $(".submenuNav_sub1 li").mouseout(function () {
        $(this).css("background","");
    })

})