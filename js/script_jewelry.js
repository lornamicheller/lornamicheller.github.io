/* global $ */


// menu

$('.btn').on('click', () => {
  $('.menu').toggleClass('show');
});


// sign in function

$(document).ready(function () {
  $('.sign-in-button').on('click', () => {
    $('.sign-in-form').toggle();
    $('.search-form').hide();
  });

  $('#createOne').on('click', () => {
    $('.sign-in-form').hide();
    $('.account-form').show();
  });

  $('.sign-in-button').on('click', () => {
    $('.account-form').hide();
    $('sign-in-form').hide();
  });

  $('#sign-in').on('.click', () => {
    ('.sign-in-form').show();
  });
});
// search

$(document).ready(function () {
  $('.search-button').on('click', () => {
    $('.search-form').toggle();
    $('.sign-in-form').hide();
  });
});

