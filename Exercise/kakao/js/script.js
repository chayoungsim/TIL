$(function(){
   $('#send').on('click',msgSend);
})

function msgSend(){
  var msg = $('textarea').val();

  if(msg===''){
    
  } else{
    $('.chatbox').append('<div class="my-bubble">'+msg+'</div>');
  }

  $('textarea').val('');
}