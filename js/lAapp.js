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
			$TopDown.removeClass('current');
		}else{
			$this.addClass('current');
			$TopDown.addClass('current');
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
					$(this).addClass('active');
				}else{
					$(this).removeClass('active');
				}
			}
		});
	});
	//展开左侧边栏
	$('.Calleft').off('touchstart').on('touchstart',function(){
		var sidebar = $('.sidebar');
		var $osname = plus.os.name;
		if( $osname == 'Android'){
			if(sidebar.hasClass('showA')){
				sidebar.removeClass('showA').addClass('hideA');
			}else{
				$('#RemoveLeft').show();
				sidebar.removeClass('hideA').addClass('showA');
			}	
		}else{
			if(sidebar.hasClass('show')){
				sidebar.hide();
				sidebar.removeClass('show').addClass('hide');
			}else{
				sidebar.show();
				$('#RemoveLeft').show();
				sidebar.removeClass('hide').addClass('show');
			}
		}		
	});
	$('#RemoveLeft').off('touchstart').on('touchstart',function(){
		var sidebar = $('.sidebar');
		var $osname = plus.os.name;
		if($osname == 'Android'){
			sidebar.addClass('hideA').removeClass('showA');
		}else{
			sidebar.addClass('hide').removeClass('show');
		}
		$(this).hide();
	})
	//设置流程页面滑动展开删除
	$('li.hsaRevoke .LiOut','.process').off('touchstart').on('touchstart',function(){
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
	//开关状态切换
	$('.BtnONF').off('touchstart').on('touchstart',function(){
		event.preventDefault();
		$this = $(this);
		if($this.hasClass('BtnOff')){
			$this.removeClass('BtnOff').addClass('BtnOn');
		}else{
			$this.removeClass('BtnOn').addClass('BtnOff');
		}
	});
	//拖动查看详细审批流程
	$('.processlist .choose').off('touchstart').on('touchstart',function(){
		event.preventDefault();
		$this = $(this);
		if($this.hasClass('choosed')){
			$this.removeClass('choosed');
		}else{
			$this.addClass('choosed').siblings().removeClass('choosed');
		}		
	});
	$('#sendAction').off('touchend').on('touchend',function(){
		event.preventDefault();
		clicked('formico.html');
	});
	$('#cancelSendAction').off('touchend').on('touchend',function(){
		event.preventDefault();
		back();
	});
	
});






























