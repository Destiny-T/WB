$(function () {

    total()
    function total(){
        var sum = 0

        $('.gds_tr2').each(function () {
            // console.log($(this))
            var $confirm = $(this).find('.gds_tr2_td5')

            
            // console.log($confirm)
            // var $content = $(this).find('.gds_tr2_td4')
            // console.log($content)



            var price = parseInt( $(this).find('.gds_tr2_td3_span').html())
            // console.log(price)
            var num = parseInt($(this).find('.gds_tr2_td4_int').attr('value'))
            // console.log(num)
            sum += num * price
            // console.log(sum)
            $('.odr_list_c_su').html(sum)

        })


    }
})
