$(function(){
  $('#btn1').on('click',blueFlagDown);
  $('#btn2').on('click',whiteFlagDown);
  $('#btn3').on('click',dotBlueDown);
});

function blueFlagDown(){    
   $('.blue').addClass('down');
   setTimeout(flagReset,1000)
}


function whiteFlagDown(){  
  $('.white').addClass('down');
  setTimeout(flagReset,1000)
}

function dotBlueDown(){
  $('.blue.dot').addClass('down');
  setTimeout(flagReset,1000)
}

function flagReset(){
  $('.flag').removeClass('down')
}