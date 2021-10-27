function stringBuilder(p, r, t, y){
    var res = "If you deposit \<mark\>" + p + 
        "\<\/mark\>\<br\> at an interest rate of \<mark\>" + r + 
        "%\<\/mark\>,\<br\> you will recieve an amount of \<mark\>" + t + 
        "\<\/mark\>\<br\> in the year \<mark\>" + y + "\<\/mark\>.\<br\>";
    return res
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0){
        let p = document.getElementById("principal");
        alert("Principal must be a positive number");
        p.focus();
    } 
    else {
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);

        var res = stringBuilder(principal, rate, interest, year);
        document.getElementById("result").innerHTML = res;
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval.toString() + "%";
}


/* Validation occurs on form submission. This function is unnecessary.

function valPrincipal(){
    let p = document.getElementById("principal");
    if (p.value <= 0){
        alert("Principal must be a positive number");
        p.focus();
    }
}
*/
        