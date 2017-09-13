// JavaScript Document

function Effect(){
	
	//主体自适应
	this.mainAuto = function(){
		var wWidth = $(window).width()+$('#main .left').width();
		var wHeight = $(window).height();
		
		$('#main').css({
			width: wWidth +'px',
			height: wHeight +'px'
		});
	}
	
	//右侧内容区自适应
	this.rightAuto = function(){
		var wWidth = $(window).width();
		
		$('#main .right').css({
			width: wWidth +'px'
		});
	}
	
	//左侧面板伸缩
	this.leftPanelMove = function(){
		//伸缩按钮单击事件
		$('#main .left .r-button').click(function(e) {
			var status = $('#main .left').attr('status');//获取左侧面板状态
			var tarLeft = $('#main .left .l-function').width();//获取左侧面板宽度
			
			if(status == 'show'){
				//隐藏左侧面板
				$('#main').animate({
					left: -tarLeft +'px'
				},{
					complete:function(){
						//改变左侧面板状态
						$('#main .left').attr('status', 'hidden');
						$('#main .left').stop();
						$('#main .left').animate({
							boxShadow: '0 0 0 0'
						});
					}
				});
				
				//切换伸缩按钮图标
				$('#main .left .r-button').css({
					backgroundPosition: '-16px center'
				});
			}else{
				//显示左侧面板
				$('#main').animate({
					left: 0
				},{
					complete:function(){
						//改变左侧面板状态
						$('#main .left').attr('status', 'show');
						$('#main .left').stop();
						$('#main .left').animate({
							boxShadow: '-2px 0 20px 2px #000'
						});
					}
				});
				
				//切换伸缩按钮图标
				$('#main .left .r-button').css({
					backgroundPosition: '0 center'
				});
			}
        });
	}
	
	//左侧面板分类容器边框修饰
	this.leftCategory = function(){
		var lis = $('#main .left .l-function .down ul li');
		var a = $('#main .left .l-function .down ul li a');
		
		//li
		for(var i=0;i<lis.length;i++){
			if(i==0 || i==1 || i==2){
				lis.eq(i).css('border-top', '1px solid #000');
			}
			
			if((i+1)%3 == 0){
				lis.eq(i).css('border-right', 'none');
			}
		}
		
		//a
		for(var i=0;i<a.length;i++){
			a.eq(i).attr('index', i);			
			a.eq(i).mouseover(function(e){
				a.eq($(this).attr('index')).css('background-color', '#000');
			});
			
			a.eq(i).mouseout(function(e){
				a.eq($(this).attr('index')).css('background-color', '#333');
			});
		}
	}
	
	//右侧中间列表区自适应
	this.rightMiddleAuto = function(){
		var rightTop = $('#main .right .top').height();
		var rightBottom = $('#main .right .bottom').height();
		
		$('#main .right .middle').css({
			minHeight: $(window).height()-(rightTop+rightBottom) +'px'
		});
	}
	
	//右侧内容区自定义滚动条样式
	this.rightCustomScrollBar = function(){
		$('#main .right').mCustomScrollbar({
			//scrollInertia:1000,//设置滚动条运动量
			autoHideScrollbar:true//自动隐藏滚动条
		});
	}
	
	//文章列表效果
	this.arcList = function(){
		var lis = $('#main .right .middle ul li');//获取列表项
		var images = $('#main .right .middle ul li .cover img');//获取封面图
		var imageWidth = images.width();
		var imageHeight = images.height();
		var imageTop = parseInt(images.css('top'));
		var imageLeft = parseInt(images.css('left'));
		
		for(var i=0;i<lis.length;i++){
			lis.eq(i).attr('index', i);
			lis.eq(i).mouseover(function(e){
				//阴影
				lis.eq($(this).attr('index')).stop();
				lis.eq($(this).attr('index')).animate({
					'box-shadow':'0 5px 10px 0 #999'
				},'fast');
				
				//放大
				images.eq($(this).attr('index')).stop();
				images.eq($(this).attr('index')).animate({
					width: imageWidth+30+ 'px',
					top: imageTop-15+ 'px',
					left: imageLeft-15+ 'px'
				},{
					duration:300
				});
			});
			
			lis.eq(i).mouseout(function(e){
				//阴影
				lis.eq($(this).attr('index')).stop();
				lis.eq($(this).attr('index')).animate({
					'box-shadow':'0 0 0 0'
				},'fast');
				
				//缩小
				images.eq($(this).attr('index')).stop();
				images.eq($(this).attr('index')).animate({
					width: imageWidth+ 'px',
					top: imageTop,
					left: imageLeft
				},{
					duration:300
				});
			});
		}
	}
}
