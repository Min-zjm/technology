$(function() {
	var str = "移动互联网，商机无限，创新链接，尽在指间!|";
	$(".span11 .span").text("");       //text为空
	var i = 0;
	var y = setInterval(function() {
		i++;                                             //*****  text.substr(0,i)
		$(".span11 .span").text(str.substr(0, i) );     //+ "|"
//		if(i==22){
//			  $(".span11 .span").text(str.substring(i) )
//		}
	}, 800)
	

})
$(function() {          //原本 -img所在 css中位置
	$(".banner img").css({
		left:270,
		width:412
	})
	$(".banner img").eq(0).animate({
		left:0,
		width:372
	})
	$(".banner img").eq(2).animate({
		left:600,
		width:372
	})

	$(".banner img").on("click", function() {
		                //console.log($(this).index())
		var index = $(this).index() //******输出哪张--$(this).index()：
		if(index == 0){            // 左边-那张--顺时针
			$(".banner img").eq(0).css({
				       zIndex:1
			}) 
			$(".banner img").eq(0).animate({
				left:600,
				        zIndex:1
			},function(){
			   $(this).parent().append($(this))    //parent()父级.append
			})
			$(".banner img").eq(1).css({
				       zIndex:2
			})
			$(".banner img").eq(1).animate({
				left:0,
				width:372
			})
			$(".banner img").eq(2).css({
				       zIndex:3                    //向后append后，的层级：zIndex;
			})
			$(".banner img").eq(2).animate({
				left:270,
				        width:412                   //大小   
			})
		
		}else if(index == 2){         // 右边-那张--
			 $(".banner img").eq(2).css({
			 	       zIndex:1
			 })
			 $(".banner img").eq(2).animate({
			 	left:0
			 },function(){
			 	 $(this).parent().prepend($(this))            //！ 
			 })
			 $(".banner img").eq(0).css({
			 	       zIndex:3                        //！
			 })
			 $(".banner img").eq(0).animate({
			 	       left:300,                      //！
			 	       width:412                      //！
			 })
			 $(".banner img").eq(1).css({      //中间那张-移动后  的层级：zIndex;
			 	       zIndex:2  
			 })
			 $(".banner img").eq(1).animate({
			 	left:600
			 })
		}
	})
})

     var x=setInterval(function(){
        	 $(".banner img").eq(2).css({          // 右边-那张--的动画
			 	       zIndex:1
			 })
			 $(".banner img").eq(2).animate({
			 	left:0
			 },function(){
			 	 $(this).parent().prepend($(this))            //！ 
			 })
			 $(".banner img").eq(0).css({
			 	       zIndex:3                              //！
			 })
			 $(".banner img").eq(0).animate({
			 	       left:300,                            //！
			 	       width:412                            //！
			 })
			 $(".banner img").eq(1).css({      //中间那张-移动后  的层级：zIndex;
			 	       zIndex:2  
			 })
			 $(".banner img").eq(1).animate({
			 	left:600
			 })
        },1000)
    
    $(".banner img").on("mouseover",function(){
    	   clearInterval(x)
    })
    $(".banner img").on("mouseout",function(){
    	  x=setInterval(function(){
        	 $(".banner img").eq(2).css({          // 右边-那张--的动画
			 	       zIndex:1
			 })
			 $(".banner img").eq(2).animate({
			 	left:0
			 },500,function(){
			 	 $(this).parent().prepend($(this))            //！ 
			 })
			 $(".banner img").eq(0).css({
			 	       zIndex:3                        //！
			 })
			 $(".banner img").eq(0).animate({
			 	       left:300,                      //！
			 	       width:412                      //！
			 },500)
			 $(".banner img").eq(1).css({      //中间那张-移动后  的层级：zIndex;
			 	       zIndex:2  
			 })
			 $(".banner img").eq(1).animate({
			 	left:600
			 },500)
        },1000)
    })
     
 
 
 
 $(function(){
 	          //var i=0;                        //！！测试
		 $(document).scroll(function(){        //整个文本：header--scroll
		     // i++;console.log(i);           //！！测试
		     var top = $(document).scrollTop();
		     if(top>=100){
		     	  $(".header").css({
		     	  	        position:"fixed",
		     	  	        zIndex:500 ,            //span22?????
		     	  	        backgroundColor:'rgba(22 ,115, 200 ,0.3)'    //!
		     	  })
		     } else{
	     	       $(".header").css({
		     	  	        position:"static",
		     	  	        backgroundColor:'rgba(22 ,115, 200 ,1)'   //! opacity:'0.4'
		     	  }) 
	        }
        })
		 
		
		
 })