$(document).ready(function(){

	function add_message(){
		Data = new Date();
		Year = Data.getFullYear();
		Month = Data.getMonth();
		Day = Data.getDate();
		switch (Month)
		{
		  case 0: fMonth="января"; break;
		  case 1: fMonth="февраля"; break;
		  case 2: fMonth="марта"; break;
		  case 3: fMonth="апреля"; break;
		  case 4: fMonth="мае"; break;
		  case 5: fMonth="июня"; break;
		  case 6: fMonth="июля"; break;
		  case 7: fMonth="августа"; break;
		  case 8: fMonth="сентября"; break;
		  case 9: fMonth="октября"; break;
		  case 10: fMonth="ноября"; break;
		  case 11: fMonth="декабря"; break;
		}
		var name = $('#name').text();
		var message = $('.form-control-messagebox').val();
		$('<li><strong class="name">'+name+'</strong><span class="date">'+Day+" "+fMonth+" "+Year+'</span><div class="comment-text"><p>'+message+'</p></li>').appendTo('.comment-block');
		$('.form-control-messagebox').val("");
	}

	function error(){
		$('.field-user .form-control-messagebox').css({"border-color":"#d8512d"});
		setTimeout(function() {
			$('.field-user .form-control-messagebox').removeAttr('style');
		}, 1000);
	}

	function checkInput(){
		$('.field-user .form-control-messagebox').each(function(){
			if($(this).val() != ""){
				add_message();
			} else {
				error();
			}
		});
	}

	$('.field-user .form-control-messagebox').keydown(function(e) {
		if (e.ctrlKey && e.keyCode == 13) {
			checkInput();
		}
	});

	$('.field-user .button').click(function() {
		checkInput();
		return false;
	});

});
