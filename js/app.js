$(".next").click(function () {
  $(".transform-contain").removeClass('active');
  $(".transform-contain:nth-child(2)").addClass('active');
});
$(".prev").click(function () {
  $(".transform-contain").addClass('active');
  $(".transform-contain:nth-child(2)").removeClass('active');
}); // var someDiv = $('.someDiv');
// someDiv.on('click', function() {
// 	someDiv.removeClass('active');
//   $(this).addClass('active');
// });