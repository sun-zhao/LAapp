var myScroll;			
$(document).ready(function(){
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	//点击下拉出审核状态选择
	$('#ToggleDown').off('touchstart').on('touchstart',function(){
		$TopDown = $('.TopDown');
		$this = $(this);
		if($this.hasClass('current')){
			$this.removeClass('current');
			$TopDown.stop().animate({top:"-50px"},300);
		}else{
			$this.addClass('current');
			$TopDown.stop().animate({top:"48px"},300);
		}
	});
	//点击侧滑出左侧菜单
	$('.opens').off('touchstart').on('touchstart',function(){
		var sidebar = $('.sidebar');
		if(sidebar.hasClass('show')){
			sidebar.removeClass('show').addClass('hide');
		}else{
			sidebar.removeClass('hide').addClass('show');
		}
	});
	//点击右侧扇形菜单
	$('.BottomRBtn').off('touchstart').on('touchstart',function(){
		$this = $(this);
		var $maskB = $('.maskB');
		if($this.hasClass('current')){			
			$this.removeClass('current');
			$maskB.css({"transform":"rotate(100deg)"});
			$maskB.removeClass('current');
			setTimeout(function(){
				$('.content').css({'z-index':'15'});
			},600);
		}else{
			$('.content').css({'z-index':'0'});
			setTimeout(function(){
				$this.addClass('current');
				$maskB.show(1,function(){
					$maskB.addClass('current');
				});
			},200)
		}
	});
	//点击放大镜展开搜索框
	$('#Search').off('touchstart').on('touchstart',function(){
		var SearchBox = $('.SearchBox');
		if(SearchBox.hasClass('current')){
			SearchBox.removeClass('current');
			SearchBox.slideUp(100);
			//SearchBox.stop().animate({height:"0",marginTop:"0",marginBottom:"0"},60);
		}else{
			SearchBox.addClass('current');
			SearchBox.slideDown(100);
			//SearchBox.stop().animate({height:"30px",marginTop:"5px",marginBottom:"5px"},60);
		}
	});
	//向左滑动li展开撤销
	$('li','.list').off('touchstart').on('touchstart',function(){
		event.preventDefault();
		var startTouch  = event.touches[0];
		startX = startTouch.pageX;
		startY = startTouch.pageY;
		var endX=startX;
		$(this).off('touchmove').on('touchmove',function(){
			event.preventDefault();
			var moveTouch  = event.touches[0];
			endX = moveTouch.pageX;
			endY = moveTouch.pageY;
		});
		$(this).off('touchend').on('touchend',function(){
			event.preventDefault();
			x = endX - startX;
			y = endY - startY;
			if(Math.abs(x) > Math.abs(y)){
				if(x<0){
					$(this).addClass('active').animate({left:"-50px"},60);
				}else{
					$(this).removeClass('active').animate({left:"0"},60);
				}
			}
		});
	});
	//展开左侧边栏
	$('.Calleft').off('touchstart').on('touchstart',function(){
		var sidebar = $('.sidebar');
		if(sidebar.hasClass('show')){
			sidebar.removeClass('show').addClass('hide');
		}else{
			$('#RemoveLeft').show();
			sidebar.removeClass('hide').addClass('show');
		}	
	});
	$('#RemoveLeft').off('touchstart').on('touchstart',function(){
		var sidebar = $('.sidebar');
		if(sidebar.hasClass('show')){
			sidebar.removeClass('show').addClass('hide')
		}
		$(this).hide();
	})
});