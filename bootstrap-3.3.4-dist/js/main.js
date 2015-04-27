$(window).load(function(){

  var days = new Array("日","月","火","水","木","金","土");

  var date = new Date();
  var now;

  var yyyy = date.getFullYear();
  var mm = date.getMonth()+1;
  var dd = date.getDate();
  $("#today").html( mm + "/" + dd + "(" + days[date.getDay()] + ")");
  if(mm < 10){
    mm = "0" + mm;
  }
  var today = yyyy + "" + mm + "" + dd;
  alert(today);

  try{
    now = Number(date.getHours().toString() + date.getMinutes().toString());
  }
  catch(e){
    alert("Nuber error:now");
  }

  //Send JSON
  $.ajax({
    type : 'get',
    url : "https://peaceful-tundra-2847.herokuapp.com/channels/"+ today +".json",
    dataType : 'JSON',
    scriptCharset: 'utf-8',
    success : function(data) {


      var i;
      for(i = 0; i < data.iepgs.length; i++){
        try{
          var channel = data.iepgs[i];
          var start = Number(channel.start_time.replace(":", ""));
          var end = Number(channel.end_time.replace(":", ""));

          //Now On Air Channels
          if((start < now) && (now < end)){
            var c = "<button type=\"button\" class=\"col-xs-6 col-sm-4 btn btn-primary btn-lg mybutton\">"+ channel.title +"</button>";

            $("#nowOnAir").append(c);
            //alert(channel.title);
          }
        }
        catch(e){
          alert("Nuber error:channel");
        }
      }
    },
    error : function(data) {
      alert("error:" + data);
    }
  });



});
