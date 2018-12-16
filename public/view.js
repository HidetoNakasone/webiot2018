window.onload = function () {
  var temp = "テスト"

  setInterval(function() {
    $.ajax({
      type: 'get',
      // url: 'http://192.168.11.30:4567/get_msg',
      // url: 'http://192.168.0.3:4567/get_msg',
      // url: 'http://192.168.11.52:4567/get_msg',
      url: 'localhost:4567/get_msg',
      dataType: 'json',
      success: function(json) {

        for (var item in json) {
          result.innerHTML = '<h1>' + json[item]["msg"] + "： " + json[item]["dateinfo"] + '</h1>'
          temp = json[item]["msg"]
        }

      },
      error: function() {
        // $('#result').append('error');
        // document.write("error");
        result.innerHTML = '<h1>error</h1>'
      }
    });
  }, 500);

}
