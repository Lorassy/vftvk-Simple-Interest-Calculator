function compute(){

    //Get the values and calculate
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Check for positive values
    var principal = document.getElementById("principal").value;
    var check = parseInt(principal) > 0;
    if (!check) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    //Create the Interest text
    document.getElementById("result").innerHTML = "If you deposit <mark>"+ principal +"</mark>,<br/>" +
        "at an interest rate of <mark>"+ rate +"%</mark>.<br/>" +
        "You will receive an amount of <mark>"+ interest +"</mark>,<br/>" +
        "in the year <mark>"+ year +"</mark>.<br/><br/>";
    
}

function updateRate(){
    //Update the rate of slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}