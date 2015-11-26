

function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    $(".login").hide();
    testAPI();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    $(".logout").hide();
  }
}

(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1189074134470014',
    cookie     : true,  // enable cookies to allow the server to access 
              // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use version 2.2


  });

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
}



function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
 
  FB.api('/me', function(response) {
    console.log(response);
    console.log('Successful login for: ' + response.name);
    
  });

  FB.api(
  "/132769576762243/posts",
  function (response) {
    if (response && !response.error) {
      console.log(response);
      /* handle the result */
  }
});
}

$('.login').click(function(){
  $(".logout").show();
  $(".login").hide();
   FB.login(function(response){
    statusChangeCallback(response);
  });
});


$('.logout').click(function(){
  $(".login").show();
  $(".logout").hide();
  FB.logout(function(response){
    statusChangeCallback(response);
  });

});


console.log("logout 12");
