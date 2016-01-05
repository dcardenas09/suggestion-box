$(".btn").click(function(){
    $.ajax({
        url: "http://104.131.17.187:4004/suggestions",
        success: function(resp,txt,xhr){
            console.log(resp);
            document.getElementById("submit").innerHTML = (resp);
        },
        method: "POST",
        data: {fname: document.getElementsByName("fname")[0].value,
               lname: document.getElementsByName("lname")[0].value,
               message: document.getElementsByName("message")[0].value,
               serviceName: document.getElementsByName("serviceName")[0].value,
              }
               
        
    });
});

