// <!-- script for burger Menu -->
  var toggle=false;
  
  function burgerMenu(){

    toggle=!toggle;
    if(toggle){
      $('.navbar-collapse').addClass('show')
      $('.navbar-toggler-icon').addClass('icon-x')

    }else{
      $('.navbar-collapse').removeClass('show')
      $('.navbar-toggler-icon').removeClass('icon-x')


    }

  }





