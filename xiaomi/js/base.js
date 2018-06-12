$(document).ready(function(){
	var index=0;
	var buttonSlide=$(".button-slide");
	var slide=$(".slide");
	var timer;
	$(".icon-search").bind("mouseover mouseout",function(){
		$(".icon-search").toggleClass("searchButton-hover");
		$("#searchButton").toggleClass("searchButton-hover");
	});
	$(".bar li:even").hover(function(){
		$(".list:even").show();
	},function(){$(".list:even").hide();
});
	$(".bar li:odd").hover(function(){
		$(".list:odd").show();
	},function(){$(".list:odd").hide();
});
	$("#nextButton").click(next);
	$("#preButton").click(pre);
	slide.hover(stopAutoSlide,autoSlide);
	autoSlide();
	//轮播底部按钮事件绑定
	for(var i=0;i<buttonSlide.length;i++){
		buttonSlide[i].onclick=function(num){
			return function(){
				if(num!=index){
					close();
					$(".slide:eq("+num+")").fadeIn(1000);
					$(".slide:eq("+index+")").fadeOut(1000);
					index=num;
					show();
				}
			}
		}(i);
	}

	//轮播下一张
	function next(){
		var currImg=$(".slide:eq("+index+")");
		currImg.fadeOut(1000);
		if(index==4){
			index=0;
			var nextImg=$(".slide:eq("+index+")");
			nextImg.fadeIn(1000);
			close();		
			show();
		}else{
			currImg.next().fadeIn(1000);
			close();
			
			index+=1;
			show();
		}
	}
	//轮播上一张
	function pre(){
		var currImg=$(".slide:eq("+index+")");
		currImg.fadeOut(1000);
		if(index==0){
			index=4;
			var preImg=$(".slide:eq("+index+")");
			preImg.fadeIn(1000);
			close();		
			show();			
		}else{
			currImg.prev().fadeIn(1000);
			close();
			index-=1;
			show();
		}
	}
	//点亮轮播底部按钮
	function show(){
		$(".button-slide:eq("+index+")").css("background","rgba(255,255,255,0.6)");
	}
	//关闭轮播底部按钮
	function close(){
		for(var i=0;i<buttonSlide.length;i++){
			$(".button-slide:eq("+i+")").css("background","#424242");
		}
	}
	//自动轮播
	function autoSlide(){
		timer=setInterval(next,3000);
	}
	//暂停自动轮播
	function stopAutoSlide(){
		clearInterval(timer);
	}



	
	
});