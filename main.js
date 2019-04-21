$(document).ready(function(){
	$('#rectangle').mouseover(function(){
		$('#rectangle').css({
			'right': '40.19%'
		});
	});

	$('#rectangle').mouseout(function(){
		$('#rectangle').css({
			'right': '53.19%'
		});
	});

	$('#form').mouseover(function(){
		$('#rectangle').css({
			'right': '40.19%'
		});
	});

	$('#form').mouseout(function(){
		$('#rectangle').css({
			'right': '53.19%'
		});
	});

	$('#footer_button').mouseover(function(){
		$('#footer_button').css({
			'background': '#161616'
		});
	});

	$('#footer_button').mouseout(function(){
		$('#footer_button').css({
			'background': '#FFFFFF'
		});
	});
});