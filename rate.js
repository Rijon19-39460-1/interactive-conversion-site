    function isValid(){
    var flag = true;
    var rate=document.forms["rate"]["rate"].value;
    var value=document.forms["rate"]["value"].value;
    var res=document.forms["rate"]["res"].value;
    if(rate ==="")
    {
        flag = false;
        document.getElementById('rateErr').innerHTML="  Conversion type can not be empty.";
    }
    if(value ==="")
    {
        flag = false;
        document.getElementById('valueErr').innerHTML=" Value can not be empty.";
        
    }
    if(res ==="")
    {
        flag = false;
        document.getElementById('resErr').innerHTML=" Result can not be empty.";
        
    }
    return flag;
    }
    function convert(pForm)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", pForm.action + "?rate=&value=&res=" + pForm.rate.value + pForm.value.value + pForm.res.value ,true);
        xhttp.send();
    }
