$('.ball').click(function() {
  var num = parseInt($('.clicks').text());
  $('.clicks').text(num+1);

  if (num <= 9) {
  	$('.ball-chat').text("You have weak, useless clicks.");
	
} else if (num >= 9 && num < 19){
	$('.ball-chat').text("Nice try, buddy");

} else if (num >= 19 && num < 29){
	$('.ball-chat').text("OK, you've made your point");

} else if (num >= 30 && num < 39){
	$('.ball-chat').text("You can stop clicking now");


} else if (num >= 40 && num < 49){
	$('.ball-chat').text("Argh! That's enough!");


} else if (num >= 50 && num < 59){
	$('.ball-chat').text("You\'ll regret this");


} else if (num >= 60 && num < 69){
	$('.ball-chat').text("Don't say I didn\t warn you!");
}

else if (num >= 70 && num < 85) {
	$('.ball').attr("id","fastball");
	$('.ball-chat').text("MWAHAHAHA! Fast Ball motherfuckers!");
}

else if (num >= 86 && num < 1000) {
	$('.ball').removeAttr("id").attr("id","ultrafastball");
	$('.ball-chat').text("MWAHAHAHA! Fast Ball motherfuckers!");
}

});