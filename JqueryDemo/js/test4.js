$(function(){
      $("#btnFind").click(function(){
           //查找元素节点
          var getValue= $("ul li:eq(1)").text();//获取第二个元素的值
          alert(getValue);

          //查找属性节点 attr()方法的参数可以是一个，也可以是两个，当参数是一个时，则是要查询的属性的名字，两个时，则是赋值
          var para=$("p");
          var p_text=para.attr("title");//获取<p>元素节点属性的title
          alert(p_text);
          alert(para.attr("title","改变你最喜欢的水果").attr("title"));//首先改变title的值，然后在取title的值
      });

      //创建节点 append(),prepend()加载元素的内部，为父子关系，after(),before()加在元素的前后，为兄弟光系
      $("#btnCreate").click(function(){
          var html=$("<li title= '桃子'>桃子</li><li title= '菠萝'> 菠萝</li>");
		  var html2=$("<hr/>");
		  $("ul").prepend(html2); //在前面创建
         // $("ul").append(html);//默认会加在ul最后面
         // var li2=$("ul li:eq(1)").after(html);//加在第二个li后面
          var li2=$("ul li:eq(1)").before(html);//加在第二个li前面
      });

      $("#btnDelete").click(function(){
         var li2=$("ul li:eq(1)").remove();//删除第二个li元素
         //$("ul").append(li2);//把刚才删除的节点又重新添加到ul元素里

       //  var li2=$("ul li:eq(1)").empty();//清空第二个节点
      });

      $("#btnCopy").click(function(){
         //$("p").clone().appendTo("ul");  //p每次都增多
		 $("strong:first").clone().appendTo("ul li:last").append("<br/>");  //先复制再追加
		 
      });

      $("#btnReplace").click(function(){
         $("p").replaceWith("<strong>你最不喜欢的水果是？哈哈</strong>");
      });

      $("#btnWrap").click(function(){
       // $("strong").wrap("<i></i>");//用<b>标签把<strong>元素包裹起来,是将所有的元素进行单独包裹
       // $("strong").wrapAll("<i></i>");//wrapAll()是将所有的元素进行一起包裹，可以通过firebug查看
         $("strong").wrapInner("<i></i>");//是将strong的内容（包括文本节点）用<b>进行包裹
      });

   })
