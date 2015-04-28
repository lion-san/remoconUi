var setting = function(){

  alert("hoge");
  $("#setting").html("設定完了");
  $("#setting").attr("onClick", "confirm()");
  $("#btnVU").removeAttr("disabled");
  $("#btnVD").removeAttr("disabled");
  $("#btnPW").removeAttr("disabled");
  $("#btn1").removeAttr("disabled");
  $("#btn2").removeAttr("disabled");
  $("#btn3").removeAttr("disabled");
  $("#btn4").removeAttr("disabled");
  $("#btn5").removeAttr("disabled");
  $("#btn6").removeAttr("disabled");
  $("#btn7").removeAttr("disabled");
  $("#btn8").removeAttr("disabled");
  $("#btn9").removeAttr("disabled");
  $("#btn10").removeAttr("disabled");
  $("#btn11").removeAttr("disabled");
  $("#btn12").removeAttr("disabled");
}


var confirm = function(){
  alert("よろしいですか？");
  $("#setting").html("設定");
  $("#setting").attr("onClick", "setting()");
  $("#btnVU").attr("disabled", "disabled");
  $("#btnVD").attr("disabled","disabled");
  $("#btnPW").attr("disabled","disabled");
  $("#btn1").attr("disabled","disabled");
  $("#btn2").attr("disabled","disabled");
  $("#btn3").attr("disabled","disabled");
  $("#btn4").attr("disabled","disabled");
  $("#btn5").attr("disabled","disabled");
  $("#btn6").attr("disabled","disabled");
  $("#btn7").attr("disabled","disabled");
  $("#btn8").attr("disabled","disabled");
  $("#btn9").attr("disabled","disabled");
  $("#btn10").attr("disabled","disabled");
  $("#btn11").attr("disabled","disabled");
  $("#btn12").attr("disabled","disabled");
}
