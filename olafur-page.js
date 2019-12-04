$("#hover-this").hover(function () {
  console.log('here')
  $(this).fadeOut(1000);
  $(this).fadeIn(1000);
});