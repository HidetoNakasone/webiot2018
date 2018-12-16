
window.onload = function(){
  vr_function()
};

var flag_speech = 0;

function vr_function() {
  window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'ja';
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onsoundstart = function() {
    document.getElementById('status').innerHTML = "認識中";
  };
  recognition.onnomatch = function() {
    document.getElementById('status').innerHTML = "もう一度試してください";
  };
  recognition.onerror = function() {
    document.getElementById('status').innerHTML = "エラー";
    if(flag_speech == 0)
    vr_function();
  };
  recognition.onsoundend = function() {
    document.getElementById('status').innerHTML = "停止中";
    vr_function();
  };
  recognition.onresult = function(event) {
    var results = event.results;
    for (var i = event.resultIndex; i < results.length; i++) {

      if (results[i].isFinal)
      {
        document.getElementById('result_text').innerHTML = results[i][0].transcript;

        var text = results[i][0].transcript;

        // ajax
        $.ajax({
          type: 'get',
          url: 'http://192.168.11.30:4567/set_msg/' + text,
          // url: 'http://192.168.0.3:4567/set_msg/' + text,
          // url: 'http://192.168.11.52:4567/set_msg/' + text,
          // url: 'localhost:4567/set_msg/' + text,
          dataType: 'json',
          success: function(json) {
            console.log(json.msg)
            // 読み上げ
            const uttr = new SpeechSynthesisUtterance(json.msg)
            uttr.pitch = 1.4
            uttr.rate = 1.1
            speechSynthesis.speak(uttr)

            uttr.onboundary = function(event) {
              vr_function();
            }

          },
          error: function(json) {
            console.log("ajaxエラー")
          }
        });

        // vr_function();

      }
      else
      {
        document.getElementById('result_text').innerHTML = "[途中経過] " + results[i][0].transcript;
        flag_speech = 1;
      }
    }
  }
  flag_speech = 0;
  document.getElementById('status').innerHTML = "start";
  recognition.start();

}
