//文本框中的事件应用
$(function() {
            $("#txtEmail").trigger("focus");//默认时文本框获取焦点

            $("#txtEmail").focus(function() {//文本框获取焦点事件
                $(this).removeClass("txtBlur").addClass("txtInit");
                $("#email").removeClass("divBlur").addClass("divFocu");
                $("#spnTip").removeClass("spnBlur")
                .removeClass("spnSucc").html("请输入您常用邮箱地址！");
            })

            $("#txtEmail").blur(function() {//文本框丢失焦点事件
                var vtxt = $("#txtEmail").val();
                if (vtxt.length == 0) {
                    $(this).removeClass("txtInit").addClass("txtBlur");
                    $("#email").removeClass("divFocu").addClass("divBlur");
                    $("#spnTip").addClass("spnBlur").html("邮箱地址不能为空！");
                }
                else {
                    if (!chkEmail(vtxt)) {//检测邮箱格式是否正确
                        $(this).removeClass("txtInit").addClass("txtBlur");
                        $("#email").removeClass("divFocu").addClass("divBlur");
                        $("#spnTip").addClass("spnBlur").html("邮箱格式不正确！");
                    } 
                    else {//如果正确
                        $(this).removeClass("txtBlur").addClass("txtInit");
                        $("#email").removeClass("divFocu");
                        $("#spnTip").removeClass("spnBlur").addClass("spnSucc").html("");
                    }
                }
            })
            /*
             *验证邮箱格式是否正确
             *参数strEmail，需要验证的邮箱
            */
            function chkEmail(strEmail) {
                if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(strEmail)) {
                    return false;
                }
                else {
                    return true;
                }
            }
        })



//下拉列表框中的事件应用		
$(function() {  
          function objInit(obj) {//下拉列表框初始化  
              return $(obj).html("<option>请选择</option>");  
          }  
          var arrData = { //定义一个数组保存相关数据  
              厂商1: { 品牌1_1: "型号1_1_1,型号1_1_2", 品牌1_2: "型号1_2_1,型号1_2_2" },  
              厂商2: { 品牌2_1: "型号2_1_1,型号2_1_2", 品牌2_2: "型号2_2_1,型号2_2_2" },  
              厂商3: { 品牌3_1: "型号3_1_1,型号3_1_2", 品牌3_2: "型号3_2_1,型号3_2_2" }  
          };  
  
          $.each(arrData, function(pF) { //遍历数据增加厂商项  
              $("#selF").append("<option>" + pF + "</option>");  
          });  
           
		   //三級列表
          $("#selF").change(function() { //厂商列表框选项改变事件  
              objInit("#selT");  
              objInit("#selC");  
                  
              $.each(arrData, function(pF, pS) {  
                  if ($("#selF option:selected").text() == pF) { //如果厂商选中项与数据匹配  
  
                      $.each(pS, function(pT, pC) { //遍历数据增加品牌项  
                          $("#selT").append("<option>" + pT + "</option>");  
                      });  
  
                      $("#selT").change(function() { //品牌列表框选项改变事件  
                          objInit("#selC");  
                          $.each(pS, function(pT, pC) {  
  
                              if ($("#selT option:selected").text() == pT) { //如果品牌选中项与数据匹配  
  
                                  $.each(pC.split(","), function() { //遍历数据增加型号项  
                                      $("#selC").append("<option>" + this + "</option>");  
                                  });  
                              }  
                          });  
                      });  
  
                  }  
              });  
          });  
               
		 //	   为何要单击两次?
          $("#Button1").click(function() { //注册按钮单击事件  

              var strValue = "您选择的厂商:";  
              strValue += $("#selF option:selected").text();  
              strValue += " 您选择的品牌:";  
              strValue += $("#selT option:selected").text();  
              strValue += " 您选择的型号:";  
              strValue += $("#selC option:selected").text();  
              $("#divTip")  
              .show()  
              .addClass("clsTip")  
              .html(strValue); //显示提示信息并增加样式  
          });  
      })  		