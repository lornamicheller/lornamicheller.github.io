/* global $ */


// menu

$('.btn').on('click',function(){
  $('.menu').toggleClass('show');
});


// sign in function

$(document).ready(function () {
  var arrow = $('.arrow-up');
  var form = $('.sign-in-form');
  var status = false;
  $('#sign-in').click(function (event) {
    event.preventDefault();
    if (status == false){
        arrow.fadeIn();
        form.fadeIn();
        status = true;
      }else{
        arrow.fadeOut();
        form.fadeOut();
        status = false;
      }
  })
})

// create account

$(document).ready(function () {
  var arrow2 = $('.arrow-up2');
  var form2 = $('.account-form');
  var status2 = false;
  $('#createOne').click(function (event) {
    event.preventDefault();
    if (status2 == false){
        arrow2.fadeIn();
        form2.fadeIn();
        status2 = true;
      }else{
        arrow2.fadeOut();
        form2.fadeOut();
        status2 = false;
      }
  })
})

// sign in go back



// search

$(document).ready(function () {
  var arrow3 = $('.arrow-up3');
  var form3 = $('.search-form');
  var status3 = false;
  $('#search-button').click(function (event) {
    event.preventDefault();
    if (status3 == false){
        arrow3.fadeIn();
        form3.fadeIn();
        status3 = true;
      }else{
        arrow3.fadeOut();
        form3.fadeOut();
        status3 = false;
      }
  })
})