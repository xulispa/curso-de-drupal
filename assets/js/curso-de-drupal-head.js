// Facebook sdk

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.3&appId=317464955533272";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  
// Youtube events
  
function onYtEvent(payload) {
  if (payload.eventType == 'subscribe') {
    // Add code to handle subscribe event.
  } else if (payload.eventType == 'unsubscribe') {
    // Add code to handle unsubscribe event.
  }
  if (window.console) { // for debugging only
    window.console.log('YT event: ', payload);
  }
}