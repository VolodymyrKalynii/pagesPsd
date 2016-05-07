$(document).ready(function(){
	$('#btn2').click(function(){
		$('.product').animate({'float':'none','width':'100%','height':'213px'});
		$('.product img').animate({'marginBottom':'0','marginRight':'15px'});
		$(this).removeClass('ic-list-nactive');
		$(this).addClass('ic-list-active');
		$('#btn1').removeClass('squares-active');
		$('#btn1').addClass('squares-nactive');
	});	
	$('#btn1').click(function(){
		$('.product').animate({'float':'left','width':'211px','height':'100%'});
		$('.product img').animate({'marginBottom':'11px','marginRight':'0'});
		$(this).removeClass('squares-nactive');
		$(this).addClass('squares-active');
		$('#btn2').removeClass('ic-list-active');
		$('#btn2').addClass('ic-list-nactive');
	})
})