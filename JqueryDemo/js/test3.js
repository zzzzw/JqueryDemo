//选择符综合演示
//简写：
/* 
$().ready(function(e) {
    
});

$(function(e){
	alert("aaa");
})

*/
$(function(){
	
	$(".content ul li:gt(2):not(:last)").hide();
			 $(".more a").text("更多");
			 
    $(".main span").click(function(e) {
          if($(".main span").text()=='展开')
		  {
			$(".content").css("display","none");
			$(".more").css("display","none");  
			$(".main span").text("收缩");
			}
		  else
		  {
			$(".content").css("display","block");
			$(".more").css("display","block");
			$(".main span").text("展开");  
		   }
    });	
	
	$(".more a").click(function(e) {
         if($(".more a").text()=='简化')
		 {
			 $(".content ul li:gt(2):not(:last)").hide();
			 $(".more a").text("更多");
			 }
		 else
		 {
			  $(".content ul li:gt(2):not(:last)").show().css("background","red");
			 $(".more a").text("简化");
			 }
    });
})

	
 