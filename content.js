BAD_PHRASES = ["as hitler", "like hitler", "than hitler", "as nazis", "as the nazis", "than the nazis", "than nazis", "you're a nazi", "youre a nazi", "you are a nazi"]
$(document).ready(function(){
  body_text = $('body').text().toLowerCase();
  for (i=0; i < BAD_PHRASES.length; i++) {
    if (body_text.includes(BAD_PHRASES[i])) {
      chrome.runtime.sendMessage("godwin")
    }
  }
})