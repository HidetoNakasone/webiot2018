
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';
// 録音終了時トリガー
recognition.addEventListener('result', function(event){
  var text = event.results.item(0).item(0).transcript;
  $("#result_text").val(text);

//
  // ajax
  $.ajax({
    type: 'get',
    // url: 'http://192.168.11.30:4567/set_msg/' + text,
    // url: 'http://192.168.0.3:4567/set_msg/' + text,
    url: 'localhost:4567/set_msg/' + text,
    dataType: 'json',
    success: function(json) {
      console.log(json.msg)
      // 読み上げ
      const uttr = new SpeechSynthesisUtterance(json.msg)
      uttr.pitch = 1.3
      speechSynthesis.speak(uttr)

    },
    error: function(json) {
      console.log("ajaxエラー")
    }
  });
//

}, false);
// 録音開始
function record()
{
  recognition.start();
}
