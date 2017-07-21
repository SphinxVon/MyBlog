var oR = document.getElementById('return');
			window.onscroll = function(){
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
				oR.style.opacity = scrollTop>=500?'1':'0';
		
			};
			oR.onclick = function(){
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
				var timer = setInterval(function(){
							scrollTop -= 100;
							if ( scrollTop<=0)
							{
								scrollTop = 0;
								clearInterval(timer);
							}
							document.body.scrollTop = scrollTop;
							document.documentElement.scrollTop = scrollTop;
						},13);
				};