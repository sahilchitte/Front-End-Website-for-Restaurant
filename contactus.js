/*Query.noConflict()(function ($) {
$(document).ready(function(){
    $("#firstname").hover(function(){
    $(this).css("background-color","red");
    });
    });
  });
  */
    function validateForm() {
      var x = document.forms["form"]["firstname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
      else{
        var y = document.forms["form"]["lastname"].value;
      if (y == "") {
        alert("Date of Birth must be filled out");
        return false;
      }
      else{
        var z = document.forms["form"]["telnum"].value;
              if (isNaN(z) || z == ""){
                alert("ENter a valid number");
                
                return false;
              }
              else{
                var email=document.forms["form"]["emailid"].value;
                var atposition=email.indexOf("@");  
                var dotposition=email.lastIndexOf(".");
                if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || email == "") {
                  alert("Please Enter a Valid Email Address");
                  return false;
              }
              else{
                alert("response submitted");
              }
              }
        
      }
      }

    }
    Query.noConflict()(function ($) {
      $(document).ready(function(){
        $("#firstname").mouseover(function(){
          var div = $(this);  
          div.animate({fontSize: '1.5em'}, "slow");
          $(this).css("background-color", "yellow");
        });
        $("#firstname").mouseout(function(){
          var div = $(this);  
          div.animate({fontSize: '1em'}, "slow");
          $(this).css("background-color", "lightgray");
        });
      });


          $(document).ready(function(){
            $("#lastname").mouseover(function(){
              var div = $(this);  
              div.animate({fontSize: '1.5em'}, "slow");
              $(this).css("background-color", "yellow");
            });
            $("#lastname").mouseout(function(){
              var div = $(this);  
              div.animate({fontSize: '1em'}, "slow");
              $(this).css("background-color", "lightgray");
            });
          });
            
        
                $(document).ready(function(){
                  $("#telnum").mouseover(function(){
                    var div = $(this);  
                    div.animate({fontSize: '1.5em'}, "slow");
                    $(this).css("background-color", "yellow");
                  });
                  $("#telnum").mouseout(function(){
                    var div = $(this);  
                    div.animate({fontSize: '1em'}, "slow");
                    $(this).css("background-color", "lightgray");
                  });
                });
              });
