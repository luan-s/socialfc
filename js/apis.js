

function httpGet(url) { 
  var xmlHttp = new XMLHttpRequest(); 
  xmlHttp.open( "GET", url, false ); // false para síncrono
  xmlHttp.send( null ); 
  return xmlHttp.responseText;
}


function separaId(id){
  aux = '';
  x = 0;
  for(var i = 0 ;i<id.length;i++){
    if(x){
      aux+=id[i];
    }

    if(id[i]=='_') x = 1;
  }
  aux = 'https://graph.facebook.com/'+aux+'/picture';
  return aux;
}


function checkImagem(url) {
    var img = '<img src="'+ url +'" />';
    $(img).load(function() {
      console.log("existe");
      return 1;
    }).bind('error', function() {
      console.log("nao existe");
      return 0;
    });
   }

//////// FACEBOOK ////////////
face = document.querySelector(".facebook");


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

  // Pegar imagem https://graph.facebook.com/%7Bobject-id-from-feed%7D/picture
  console.log('Welcome!  Fetching your information.... ');
 
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    
  });

  FB.api(
  "/132769576762243/posts",
  function (response) {
    

    for(var i = 0; i<5;i++){
      
      var image = separaId(response.data[i].id);

      div1 = document.createElement("div");
      div1.className = "panel panel-primary";

      div2 = document.createElement("div");
      div2.className = "panel-heading";

      h1 = document.createElement("h1");
      h1.textContent = "♥ ";
      h1.className = "panel-title";

      div3 = document.createElement("div");
      div3.className = "panel-body";

      img = document.createElement('img');
      img.className = "facePhotos";
      img.src = image;
      

      div2.appendChild(h1);
      div2.appendChild(div3).appendChild(img);
      div1.appendChild(div2);
      face.appendChild(div1);

    }

    



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


console.log("logout 03");

/////////// INSTAGRAM ///////////

insta = document.querySelector(".instagram");


var accessToken = '246134358.5b9e1e6.4b4fa7dc216046798d313db2e45feb49';
var username= "corinthians";
var limit = 5; //Limite máximo de fotos
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
      console.log('https://api.instagram.com/v1/users/'+ userID +'/media/recent/?access_token='+ accessToken);
      var getImagesURL = 'https://api.instagram.com/v1/users/'+ userID +'/media/recent/?access_token='+ accessToken;
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: getImagesURL,
        success: function(data) {
          console.log(data);

          for(var i = 0; i<5;i++){
        
            div1 = document.createElement("div");
            div1.className = "panel panel-primary";

            div2 = document.createElement("div");
            div2.className = "panel-heading";

            h1 = document.createElement("div");
            h1.textContent = "♥ " + data.data[i].likes.count.toString();
            h1.className = "panel-title";

            div3 = document.createElement("div");
            div3.className = "panel-body";

            img = document.createElement('img');
            img.className = "instaPhotos";
            img.src = data.data[i].images.low_resolution.url;

            div2.appendChild(h1);
            div2.appendChild(div3).appendChild(img);
            div1.appendChild(div2);
            insta.appendChild(div1);


           }
         }
        
      });
    }
  }
}();
 
$(document).ready(function() {
    instagram.init();
});

////////////TWITTER//////////////



window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

twttr.widgets.createTimeline (
  "600720083413962752",
  document.querySelector(".twitter"),
  {
    Nome de tela: "tecido"
  }
);

