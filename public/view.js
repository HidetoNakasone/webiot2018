window.onload = function () {

  setInterval(function() {
    $.ajax({
      type: 'get',
      url: 'http://192.168.11.30:4567/get_msg',
      // url: 'http://localhost:4567/get_msg',
      dataType: 'json',
      success: function(json) {
        // $('#result').append('<p>' + json.hoge + '</p>');
        // document.write(json.hoge);
        // result.innerHTML = '<h1>' + json + '</h1>'

        // console.log(json)
        for (var item in json) {
          // console.log(json[item]["id"])
          result.innerHTML = '<h1>' + json[item]["msg"] + '</h1>'
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
