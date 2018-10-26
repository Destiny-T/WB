/**
 * Created by Administrator on 2016/9/21.
 */
$(function(){

    //判断是否存在该用户(匹配用户名和密码是否都一致)
    $(".lgMsg_f_m_li3_d_int3").click(function(){
        var users = $.cookie("users");
        if (users) {
            users = JSON.parse(users); //cookie中的所有注册过的用户

            var isExists = false; //表示是否存在该用户
            for (var i=0; i<users.length; i++) {
                if ( users[i].name == $(".lgMsg_f_m_int1").val() && users[i].pwd == $(".lgMsg_f_m_int2").val() ) {
                    console.log(" 登录成功! ");
                    alert("登入成功！");
                    isExists = true;
                    location.href="index.html";
                }
            }

            if (!isExists) {
                console.log("用户名或密码错误, 请重新输入!");
                alert("用户名或密码错误, 请重新输入!");
            }

        }
        else {
            console.log("不存在用户, 请先注册!");
            alert("不存在用户, 请先注册!");
        }
    })

})