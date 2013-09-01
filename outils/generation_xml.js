exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.linknx;
  var tts;
  



  tts = 'Le script est fini';
  callback({'tts': tts});
}