function compute()
{
    //Defining variables
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    
    // Converting current year into integer, then adding the selected number of years as integet
    future = parseInt(new Date().getFullYear()) + parseInt(years);
    
    //Appending the result span element to show the calculation upon clicking the Compute button
    document.getElementById("result").innerHTML = '<br/>If you deposit <span class="results">'+ principal +'</span><br/> at an interest rate of <span class="results">' + rate + '</span> <br/> You will receive an amount of <span class="results">' + interest + '</span> <br/> in the year <span class="results">' + future + '</span><br/>';
    
    //Validating principal is a positive number, then setting the focus to the principal field
    if(parseInt(principal) <=0 || parseInt(principal) == '') {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
    }
}

//New function to show rate percentage in the slider element dynamically
function showrate(x) {
    document.getElementById("slider").innerHTML = x;
}
