/**
 * Created by Administrator on 2016/9/20.
 */
$(function(){

    //如果已经存在该用户, 不能注册
    //不存在则注册, 保存到cookie

    $(".regMsg_b_int5").click(function(){
        var strName=$(".regMsg_b_int1").val();
        var strPwd=$(".regMsg_b_int2").val();
        var strPwds=$(".regMsg_b_int3").val();
        //注册(cookie存储)
        var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
        //先判断是否存在该用户
        for (var i=0; i<users.length; i++) {
            if ( users[i].name == strName) {
                alert("用户名已存在! 不能注册相同的用户");
                console.log("用户名已存在! 不能注册相同的用户");
                return;
            }
        }

        //注册用户
        var user = {
            name: strName,
            pwd: strPwd,
            pwds:strPwds
        }
        users.push(user);

        $.cookie("users", JSON.stringify(users), {expires:22, path:"/"});
        console.log( $.cookie("users") );
    })

})