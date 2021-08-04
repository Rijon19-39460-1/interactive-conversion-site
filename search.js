    function result(pForm)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function()
        {
            document.getElementById("his").innerHTML = this.responseText;
        }
        xhttp.open("POST", pForm.action + "?rate=" + pForm.rate.value,true);
        xhttp.send();
    }