
//使用js
//window.onload=function(){
//    alert('hello world!');
//}

//使用Jquery $-jQuery:内置的一个全局对象，$(参数)：根据参数选择对象返回jQuery对象
//
/*
$(document).ready(function(){
   // $(".box").css("height","200").css("background","red").hide(5000).show(5000);
})*/






$(function(){
	
	<!-- //练习：实现table的隔行换色 -->
	
    //使用过滤器
    $("table tr:even").css("background","red");
    
    $("table tr:odd").css("background","blue");

   // var obj=$("table tr");

    //obj.each(function(index,val){
    //
    //   if(index%2==0)
    //     $(val).css("background","red");
    //    else
    //       $(val).css("background","blue");
    //
    //})


    //$.each(obj,function(index,val){
    //
    //    if(index%2==0)
    //        $(val).css("background","red");
    //    else
    //        $(val).css("background","blue");
    //
    //})


    //$("table tr").each(function(i,v){
    //    alert(i+","+ v.tagName);
    //})




    //$("a").first().click(function(){
    //
    //    //var i=1;
    //    //var s="";
    //    //for(i;i<=9;i++)
    //    //{
    //    //    for(var j=1;j<=i;j++)
    //    //    {
    //    //         s+=j+"*" +i+"="+j*i+"&nbsp;&nbsp;&nbsp;&nbsp;";
    //    //    }
    //    //    s+="<br/>";
    //    //}
    //    //
    //    //$("#cfb").html(s);
    //
    //})

    
     //定义一个数组，遍历数组，赋给下拉列表，呈现出来
    //var json = [
    //    {"value":"1","text":"apple"},
    //    {"value":"2","text":"orange"},
    //    {"value":"3","text":"banana"},
    //    {"value":"4","text":"watermelon"},
    //    {"value":"5","text":"pineapple"}
    //];
    //
    //var s="";
    //s =s+"<select >";
    //$.each(json, function(idx, obj) {
    //
    //    s+="<option value="+obj.value+">"+obj.text+"</option>";
    //
    //});
    //s+="</select>";
    //  $("#cfb").html(s);


    //js定义数组 var定义变量
    //var a1="a";
    //var a2=["abc","abc","efg","广州",3];  //本质上都是object数组，一维数组
    //var a3=[
    //    ["北京","天津"],
    //    ["南京","苏州","南通","常州"],
    //    ["福州","福安"],
    //    ["广州","潮阳","潮州","澄海"],
    //    ["兰州","白银","定西","敦煌"]
    //];     //二维数组
    //var a4=[{"name":"張三","age":"18"},
    //        {"name":"李四","age":"20"},
    //        {"name":"小明","age":"50"},
    //        {"name":"小红","age":"30"}
    //        ];  //对象数组
    //
    ////each(index(索引),value（值）),匿名函数的参数是占位符，
    //$.each(a4,function(index,value){
    //        alert("索引:"+index+",值："+value.name);
    //})
    ////两层each遍历
    //$.each(a3,function(i1,v1){
    //    $.each(v1,function(i2,v2){
    //      alert(v2);
    //    })
    //})



    
  //定义两个数组，一个存省份，一个市，实现两个下拉表二级联动

    //一位数组存储省份
    var pro=["直辖市","江苏","福建","广东","甘肃"];

    //二维数组存储市
    var city=[
        ["北京","天津","上海","重庆"],
        ["南京","苏州","南通","常州"],
        ["福州","福安","龙岩","南平"],
        ["广州","潮阳","潮州","澄海"],
        ["兰州","白银","定西","敦煌"]
    ];
    jzpro(pro);
    jzcity(city[0]);
    //使用id找到select
    $("#pro").change(function(){

        //dom操作
         $("#city").remove();  //删除自身元素
         jzcity(city[$(this).val()]);
    })


     //从元素开始，使用$(选择符)得到元素
     $("input[name=tj]").click(function(){

         var xm=$("input[name=xm]");  //表单选择器，jquery建议将对象先赋给变量做缓存
         if(xm.val()=="")
         {
             if(xm.next().is("span"))
                 xm.next().remove();
           xm.after ("<span style='color:red'>请输入姓名!</span>");
         }
         else {
             //提交
             $("form:first").submit();
         }
     })

   
     
      //实现checkbox多选，并输出选择得值   
      //实现多选  attr\prop区别：
      $("input[name=xzcb]").click(function(){

              // alert($(this).is(":checked"));

              // alert($(this).prop('checked'));
          if($(this).is(":checked"))
            $("input[name=xz]").prop("checked",true);
          else
              $("input[name=xz]").prop("checked",false);
      })


     $("#sc").click(function(){
         var v="";
         $("input[name=xz]").each(function(index,value){
             if($(value).prop("checked"))
               v+=$(value).val()+",";
         })
         $("#info").text("删除的元素为："+v)
     })










})


//下拉列表
function jzpro(pro){
    var pros="";
    pros +="<select id='pro'>";
    $.each(pro, function(idx, obj) {
        pros+="<option value="+idx+">"+obj+"</option>";
    });
    pros+="</select>";
    $("#xlb").append(pros);
}

function jzcity(cityarray){
    var citys="";
    //初始化的时候，默认加载
    citys +="<select id='city'>";
    $.each(cityarray, function(idx, obj) {
        citys+="<option value="+idx+">"+obj+"</option>";
    });
    citys+="</select>";
    //dom操作
    $("#xlb").append(citys);
}


 