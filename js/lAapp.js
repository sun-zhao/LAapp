var myScroll;			
$(document).ready(function(){
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	//点击放大镜展开搜索框
	$('#Search').off('touchstart').on('touchstart',function(){
		$SearchBox = $('.SearchBox');
		$TopDown = $('.TopDown');
		$ToggleDown = $('#ToggleDown');
		$TopDown.removeClass('active');
		$ToggleDown.removeClass('current');
		if($SearchBox.hasClass('current')){
			$SearchBox.removeClass('current');
		}else{
			$SearchBox.addClass('current');	
		}
	});
	$('#back_ser').off('touchstart').on('touchstart',function(){
		$SearchBox = $('.SearchBox');
		$TopDown = $('.TopDown');
		$ToggleDown = $('#ToggleDown');
		$TopDown.removeClass('active');
		$ToggleDown.removeClass('current');
		if($SearchBox.hasClass('current')){
			$SearchBox.removeClass('current');
		}else{
			$SearchBox.addClass('current');	
		}
	});
	//搜索框焦点事件
	var $serint = $('.SearchBox input');
	$serint.blur(function(){
		$this=$(this);
		var val = $serint.val();
		if(val != ""){
			$this.addClass('nobg');
		}else{
			$this.removeClass('nobg');
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
//				$('.content').css({'z-index':'15'});
			},600);
		}else{
//			$('.content').css({'z-index':'0'});
			setTimeout(function(){
				$this.addClass('current');
				$maskB.show(1,function(){
					$maskB.addClass('current');
				});
			},200)
		}
	});
	
	//向左滑动li展开撤销
//	$('li','.list').off('touchstart').on('touchstart',function(){
//		event.preventDefault();
//		var startTouch  = event.touches[0];
//		startX = startTouch.pageX;
//		startY = startTouch.pageY;
//		var endX=startX;
//		$SearchBox = $('.SearchBox');
//		$TopDown = $('.TopDown');
//		$ToggleDown = $('#ToggleDown');
//		$TopDown.removeClass('active');
//		$ToggleDown.removeClass('current');
//		$SearchBox.removeClass('current');
//		$(this).off('touchmove').on('touchmove',function(){
//			event.preventDefault();
//			var moveTouch  = event.touches[0];
//			endX = moveTouch.pageX;
//			endY = moveTouch.pageY;
//		});
//		$(this).off('touchend').on('touchend',function(){
//			event.preventDefault();
//			x = endX - startX;
//			y = endY - startY;
//			if(Math.abs(x) > Math.abs(y)){
//				if(x<0){
//					$(this).addClass('active');
//				}else{
//					$(this).removeClass('active');
//				}
//			}
//		});
//	});
	$('.app_list li').off('touchstart').on('touchstart',function(){
		if($(this).hasClass('show_preview')){
			$(this).removeClass('show_preview')
		}else{
			$(this).addClass('show_preview').siblings().removeClass('show_preview');
		}
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
				sidebar.removeClass('show').addClass('hide');
			}else{
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
	$('li.hsaRevoke','.process').off('touchstart').on('touchstart',function(){
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
	//多选择
	$('.processlist.doubleCheck .choose').off('touchstart').on('touchstart',function(){
		event.preventDefault();
		$this = $(this);
		if($this.hasClass('choosed')){
			$this.removeClass('choosed');
		}else{
			$this.addClass('choosed');
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
	//表单详情页面滑动展开按钮组
	$('.content').off('touchstart').on('touchstart',function(){
		event.preventDefault();
		var startTouch  = event.touches[0];
		startX = startTouch.pageX;
		startY = startTouch.pageY;
		var endX=startX;
		var BottomRbox = $('.BottomRbox');
		var BottomIn = $('.BottomIn');
		var btn5 = $('.btn5');
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
			if(Math.abs(x) < Math.abs(y)){
				if(y<-50){
					BottomRbox.addClass('show');
					BottomIn.stop().animate({top:30},300);
				    setTimeout(function(){
				    	btn5.addClass('current');
				    },800);
				}
			}
		});
	});
	$btn5 = $('.btn5');
	$btn5.off('touchend').on('touchend',function(){
		event.preventDefault();
		var BottomRbox = $('.BottomRbox');
		var BottomIn = $('.BottomIn');
		$btn5.removeClass('current');
		BottomIn.stop().animate({top:430},200);
//		setTimeout(function(){
//	    	BottomIn.stop().animate({top:430});
//	    },400);
	    setTimeout(function(){
	    	BottomRbox.removeClass('show');
	    },400);
	});
});






























