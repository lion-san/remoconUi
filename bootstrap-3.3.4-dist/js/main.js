$(window).load(function(){

  //Send JSON
  $.ajax({
    type : 'get',
    url : "https://peaceful-tundra-2847.herokuapp.com/channels/20150424.json",
    dataType : 'JSON',
    scriptCharset: 'utf-8',
    success : function(data) {
      alert("success:" + data);
    },
    error : function(data) {
      alert("error:" + data);
    }
  });



});
