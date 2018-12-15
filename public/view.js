window.onload = function () {

  setInterval(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:4567/get_msg',
      // url: 'https://webiot2018.herokuapp.com/get_msg',
      dataType: 'json',
      success: function(json) {
        // $('#result').append('<p>' + json.hoge + '</p>');
        document.write(json.hoge);
        // result.innerHTML = '<h1>' + json + '</h1>'

        // result.innerHTML = '<h1>' + json[json.length - 1].msg + '</h1>'

      },
      error: function() {
        // $('#result').append('error');
        // document.write("error");
        result.innerHTML = '<h1>error</h1>'
      }
    });
  }, 100);



}
