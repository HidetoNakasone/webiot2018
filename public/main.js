
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';
// 録音終了時トリガー
recognition.addEventListener('result', function(event){
  var text = event.results.item(0).item(0).transcript;
  $("#result_text").val(text);

  // 読み上げ
  const uttr = new SpeechSynthesisUtterance(text)
  uttr.pitch = 1.4
  speechSynthesis.speak(uttr)

//
  $.ajax({
    type: 'get',
    url: 'http://192.168.11.30:4567/set_msg/' + text,
    // url: 'http://localhost:4567/set_msg/' + text,
    // url: 'https://webiot2018.herokuapp.com/get_msg' + text,

    dataType: 'json',
    success: function(json) {
      $('#result').append('<p>' + json.msg + '</p>');
    },
    error: function() {
      $('#result').append('error');
    }
  });
//


}, false);
// 録音開始
function record()
{
  recognition.start();
}
