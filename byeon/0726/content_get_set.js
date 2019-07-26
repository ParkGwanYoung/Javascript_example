$(function () {
    var para1 = $("#para1").html();
    var para2 = $("#para2").html();
    clickToChange("#btn1", "#para1", "")
    clickToChange("#btn1", "#para2", para2);
    clickToChange("#btn2", "#para1", para1);
    clickToChange("#btn2", "#para2", para2);
    clickToChange("#btn3", "#para2", "");
    clickToChange("#btn3", "#para1", para1 + para2);

    $("#chkall").change(function () {
        if ($(this).prop('checked') == true) {
            $("#chk01,#chk02,#chk03,#chk04").prop('checked', true);
        } else {
            $("#chk01,#chk02,#chk03,#chk04").prop('checked', false);
        }
    });

    getValue("#btn4", "#name", "#res1");
    getValue("#btn5", "#comment", "#res2");
    getValue("#btn6", "#city", "#res3");

    function clickToChange(selector, target, set) {
        $(selector).click(function () {
            $(target).html(set);
        });
    };
    function getValue(btn, from, res) {
        $(btn).click(function () {
            $(res).html($(btn).text() + ': ' + $(from).val());
        });
    }
});