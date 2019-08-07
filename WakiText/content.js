var fontfile = chrome.extension.getURL("font.ttf");

$(function (){
  $('head').append('<style>@font-face {font-family:"Waki-Crayon-Font"; src: url( "' + fontfile + '" )}');
  var style={"font-family":"Waki-Crayon-Font","font-size":"25px","line-height": "24px","letter-spacing":"2px"};
  $("a.replyusername:contains('WAKIdesigns')").css(style).parent().siblings(".comtext").css(style);
});
