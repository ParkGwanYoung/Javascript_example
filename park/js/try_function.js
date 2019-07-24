function f_compare(a, b) {
    var result = document.getElementById("compare_output");
    var output;
    if (a < b) {
        output = b;

    }
    else {
        output = a;
    }
    result.innerHTML = output;
    return output;
}


function f_subStringWithText(a, b) {
    var result = a.split(b);
    document.getElementById("substring_output").innerHTML = result[0];
    return result;
}

function f_getTextAndreplace(a, b, c) {
    var temp = "dddd";
    var result = a.replace(c, temp);
    var result2 = result.replace(b, c);
    var result3 = result2.replace(temp, b);
    document.getElementById("replace_output").innerHTML = result3;
    return result3;
}
