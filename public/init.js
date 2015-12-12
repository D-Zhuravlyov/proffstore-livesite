function getSelectionText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
  }

  if (text != '')
    return text;
}

$(function() {
  var socket = io();
  var timer;
  var textChanges = '';
  var clicks = 0;
  var hovers = 0;
  var stamp = 0;
  

  $('#active-area > div[id^="post"]').mousemove(function(e) {
    hovers++;

    if(getSelectionText())
      textChanges = getSelectionText();
    
    if ($('#active-area').attr('data-active') !== e.target.id && e.target.id !== '') {
      $('#active-area').attr('data-active', e.target.id);
      // send data & clear
      console.log(textChanges);
      console.log(clicks);
      console.log(hovers/100);
      textChanges = '';
      clicks = 0;
      hovers = 0;
      stamp = 0;
    }
  });

  $('#active-area > div[id^="post"]').click(function(e) {
    clicks++;
  });

  // user cookies data
  /*socket.emit('start', {
    cookieId: 'id'
  });


  $('#active-area').mousemove(function(e) {
    timer = Date.now();
    socket.emit('change', {
      x: e.pageX,
      y: e.pageY,
      stamp: e.timeStamp,
      target: e.target.id || e.target.localName,
      type: 'move'
    });
  });

  $('#active-area > #finish-container').hover(function(e) {
    /*socket.emit('finish', {
      x: e.pageX,
      y: e.pageY,
      stamp: Date.now() - timer,
    });
  }, function() {
    //
  });

  $(document).click(function(e) {
    console.log(e);
    socket.emit('change', {
      id: $(this).prop('id'),
      x: e.pageX,
      y: e.pageY,
      stamp: e.timeStamp,
      type: 'click',
      params: {
        button: e.button,
        tagname: e.tagName
      }
      // other props from settings
    })
  });

  socket.on('result', function(data) {
    result = data < 0.5 ? 'low' : 'higth';
    $('#result').html('Result:' + data + ',' + result);
  });*/


});
