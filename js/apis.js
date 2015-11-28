

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


console.log("logout 18");

/////////// INSTAGRAM ///////////


var accessToken = '246134358.5b9e1e6.4b4fa7dc216046798d313db2e45feb49';
var username= "_luuansouza";
var limit = 20; //Limite máximo de fotos
var setSize = "small";
 
var instagram = function() {
  return {
    init: function() {
      instagram.getUser();
    },
    getUser: function() {
      var getUserURL = 'https://api.instagram.com/v1/users/search?q='+ username +'&access_token='+ accessToken ;
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: getUserURL,
        success: function(data) {
          var getUserID = data.data[0].id;
          instagram.loadImages(getUserID);
        } 
      });
    },
    loadImages: function(userID) {
      var getImagesURL = 'https://api.instagram.com/v1/users/'+ userID +'/media/recent/?access_token='+ accessToken;
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: getImagesURL,
        success: function(data) {
          for(var i = 0; i < limit; i+=1) {
            if(setSize == "small") {
              var size = data.data[i].images.thumbnail.url;
            } else if(setSize == "medium") {
              var size = data.data[i].images.low_resolution.url;
            } else {
              var size = data.data[i].images.standard_resolution.url; 
            }
            $("#instagram").append("<li><a target='_blank' href='" + data.data[i].link +"'><img src='" + size +"'/></a>");
          }
        }
      });
    }
  }
}();
 
$(document).ready(function() {
    instagram.init();
});



