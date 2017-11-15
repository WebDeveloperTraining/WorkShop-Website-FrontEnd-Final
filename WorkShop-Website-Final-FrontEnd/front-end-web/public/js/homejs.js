(function( $ ) {

    //Function to animate slider captions 
  function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  //Variables on page load 
  var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
  //Initialize carousel 
  $myCarousel.carousel();
  
  //Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);
  
  //Pause carousel  
  $myCarousel.carousel('pause');
  
  
  //Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });  
    $('#carousel-example-generic').carousel({
        interval:3000,
        pause: "false"
    });
  
})(jQuery); 

(function($){
  /* trigger when page is ready */
  $(document).ready(function (){
    
        //Tabs functionality
        //Firstly hide all content divs
        $('#generic-tabs div').hide();
        //Then show the first content div
        $('#generic-tabs div:first').show();
        //Add active class to the first tab link
        $('#generic-tabs ul#tabs li:first').addClass('active');
        //Functionality when a tab is clicked
        $('#generic-tabs ul#tabs li a').click(function(){
          //Firstly remove the current active class
            $('#generic-tabs ul#tabs li').removeClass('active');
            //Apply active class to the parent(li) of the link tag
            $(this).parent().addClass('active');
            //Set currentTab to this link
            var currentTab = $(this).attr('href');
            //Hide away all tabs
            $('#generic-tabs div').hide();            
            //show the current tab
            $(currentTab).show();
            //Stop default link action from happening
            return false;
        }); 
  });
})(window.jQuery);

$(document).ready(function(){
  $("#btn-send-contacts").click(function(){
    var innputname = $.trim($("#input-name").val());
    var innputemail = $.trim($("#input-email").val());
    var innputsubject = $.trim($("#input-subject").val());
    var innputmessage = $.trim($("#input-message").val()); 
    if(innputname==""){
      $("#input-name").focus();
      $("#inv-inpt").css("display","inline-block");
    }
    else{
      if(innputemail==""){
        $("#input-email").focus();
        $("#inv-inpt").css("display","inline-block");
      }else{
        if(innputsubject==""){
          $("#input-subject").focus();
          $("#inv-inpt").css("display","inline-block");
        }
        else{
          if(innputmessage==""){
            $("#input-message").focus();
            $("#inv-inpt").css("display","inline-block");
          }
        }
      }
    }
  });
  $("#input-name").focus(function(){
    $("#inv-inpt").css("display","none");
  })
  $("#input-email").focus(function(){
    $("#inv-inpt").css("display","none");
  })
  $("#input-subject").focus(function(){
    $("#inv-inpt").css("display","none");
  })
  $("#input-message").focus(function(){
    $("#inv-inpt").css("display","none");
  })

  $("#btnloginpage").click(function(){
    var username = $.trim($("#usernamelogin").val());
    var pass = $.trim($("#passlogin").val());
    if(username==""){
      $("#usernamelogin").focus();
      $("#sttslogin").css("display","inline-block");
    }
    else{
      if(pass==""){
        $("#passlogin").focus();
        $("#sttslogin").css("display","inline-block");
      }
    }
  });
    $("#usernamelogin").focus(function(){
    $("#sttslogin").css("display","none");
  })
  $("#passlogin").focus(function(){
    $("#sttslogin").css("display","none");
  })

  $("#btnregispage").click(function(){
    var name = $.trim($("#usernameregis").val());
    var pass = $.trim($("#passregis").val());
    var cofpass = $.trim($("#confipassregis").val());
    var mail = $.trim($("#mailregis").val()); 
    if(name==""){
      $("#usernameregis").focus();
      $("#sttslogin").css("display","inline-block");
    }
    else{
      if(pass==""){
        $("#ipassregis").focus();
         $("#sttslogin").css("display","inline-block");
      }else{
        if(cofpass!=pass){
          $("#confipassregis").focus();
          $("#sttspas").css("display","inline-block");
        }
        else{
          if(mail==""){
            $("#mailregis").focus();
            $("#sttslogin").css("display","inline-block");
          }
        }
      }
    }
  });

   $("#usernameregis").focus(function(){
    $("#sttslogin").css("display","none");
     $("#sttspas").css("display","none");
  })
  $("#passregis").focus(function(){
    $("#sttslogin").css("display","none");
     $("#sttspas").css("display","none");
  })
   $("#confipassregis").focus(function(){
    $("#sttslogin").css("display","none");
     $("#sttspas").css("display","none");
  })
  $("#mailregis").focus(function(){
    $("#sttslogin").css("display","none");
     $("#sttspas").css("display","none");
  })

})