$(function(){
  $('#btn1').on('click',blueFlagDown);
  $('#btn2').on('click',whiteFlagDown);
  $('#btn3').on('click',dotBlueDown);
});

function blueFlagDown(){    
   $('.blue').not('.dot').css({'transform' : 'rotate(45deg)'}); 
   setTimeout(blueFlagUp,1000)
}

function blueFlagUp(){
  $('.blue').not('.dot').css({'transform' : 'rotate(0)'});
}

function whiteFlagDown(){  
  $('.white').css({'transform':'rotate(45deg'});
  setTimeout(whiteFlagUp,1000)
}

function whiteFlagUp(){  
  $('.white').css({'transform':'rotate(0)'});
}

function dotBlueDown(){
  $('.blue.dot').css({'transform':'rotate(45deg'});
  setTimeout(dotBlueUp,1000)
}

function dotBlueUp(){
  $('.blue.dot').css({'transform':'rotate(0)'});
}