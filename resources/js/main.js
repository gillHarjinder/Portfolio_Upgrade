$('document').ready(function(){
	// naviagtion bar appear on small screen on button clicked
	$('#navButton').click(function(){
		if($('#menuList').hasClass("collapse")){
			$('#menuList').removeClass("collapse");
		}else{
			$('#menuList').addClass("collapse");
		}
	});
});