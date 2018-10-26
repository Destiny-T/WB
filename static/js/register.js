/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {
    $(".regMsg_b_int1").blur(function () {
        var strName=$(".regMsg_b_int1").val();
        var regName=/^[a-zA-Z\u4e00-\u9fa5]{4,20}$/gi;
        if(strName=="")
        {
            $(".regMsg_b_p1").html("用户名不能为空").css("color","red");
        }
        else if(regName.test(strName)==false)
        {
            $(".regMsg_b_p1").html("用户名应为字母或者是中文开头,只能输入4-20个中英文字符").css("color","red");
        }
        else {
            $(".regMsg_b_p1").html("");
        }
        console.log(regName.test(strName)) ;
    })
    $(".regMsg_b_int2").blur(function () {
        var strPwd=$(".regMsg_b_int2").val();
        var regPwd=/^[a-zA-Z0-9]{6,20}$/gi;
        if(strPwd=="")
        {
            $(".regMsg_b_p2").html("请输入密码").css("color","red");
        }
        else if(regPwd.test(strPwd)==false)
        {
            $(".regMsg_b_p2").html("密码的长度大于6位或者小于20位").css("color","red");
        }
        else {
            $(".regMsg_b_p2").html("");
        }
        console.log(regPwd.test(strPwd)) ;
    })

    $(".regMsg_b_int3").blur(function () {
        var strPwd=$(".regMsg_b_int2").val();
        var strPwds=$(".regMsg_b_int3").val();
        //var regPwd=/^[a-zA-Z0-9]{6,20}$/gi;
        if(strPwds=="")
        {
            $(".regMsg_b_p3").html("请确认密码").css("color","red");
        }
        else if(strPwds!=strPwd)
        {
            $(".regMsg_b_p3").html("您输入的密码和确认密码不匹配，请重新输入").css("color","red");
        }
        else {
            $(".regMsg_b_p3").html("");
        }
        //console.log(strPwds.test(strPwd)) ;
    })
    $(".regMsg_b_int5").click(function () {
        var strName=$(".regMsg_b_int1").val();
        var strPwd=$(".regMsg_b_int2").val();
        var strPwds=$(".regMsg_b_int3").val();
        if(strName==""||strPwd==""||strPwds=="")
        {
            $(".regMsg_b_p1").html("用户名不能为空").css("color","red");
            $(".regMsg_b_p2").html("请输入密码").css("color","red");
            $(".regMsg_b_p3").html("请确认密码").css("color","red");
        }
        else
        {
            location.href="login.html";
        }
    })
})