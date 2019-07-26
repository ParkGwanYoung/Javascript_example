$(function(){
    var allhtml = $("#para1").html();
    $("#rem").click(function(){
        $("#para2").html("");
    });
    $("#cre").click(function(){
        $("#para2").html(allhtml)
    });
    $("#pas").click(function(){
        $("#para2").html("");
        $("#para1").html( $("#para1").html() + " " + allhtml);
    });
});
$(function(){
    $("#btn1").click(function(){
        var name = $("#name").val();
        $("#boxbox").val(name);
    });
    $("#btn2").click(function(){
        var comment = $("#comment").val();
        $("#boxbox").val(comment);
    });
    $("#btn3").click(function(){
        var city = $("#city").val();
        $("#boxbox").val(city);
    });
});

$(function(){
    $("#checkbtn").click(function(){
        
        $(".check").each(function(){
            if (this.checked == false){
                this.checked = true;
            } else {
            this.checked = false;
        }
        });
    });
});

