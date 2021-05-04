function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = interest;

    //Set default highlight in the Amount input field
    document.getElementById("principal").setAttribute("class", "grey-focus");
    
    /* Asks user to enter a positive number in case the input is zero or negative
       and highlights the Amount input field red to attract user's attention */
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").setAttribute("class", "alert-focus");
        document.getElementById("principal").focus();
    }
    
    //Prints out the result after received satisfying input
    if (principal > 0) {
        document.getElementById("result").innerHTML=
            "If you deposit " + "<span class='textHighlight'>" + principal + "</span>" +
            ",\<br\>at an interest rate of " + "<span class='textHighlight'>" + rate + "%" + "</span>" +
            "\<br\>You will receive an amount of " + "<span class='textHighlight'>" + amount + "</span>" +
            ",\<br\>in the year " + "<span class='textHighlight'>" + year + "</span>" +
            "\<br\>"
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        
