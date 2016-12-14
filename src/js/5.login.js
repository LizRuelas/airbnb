var iniSesion = document.getElementById("sesion");
window.fbAsyncInit = function() {
   FB.init({
     appId      :'120133371812328',
     cookie     : true,                 
     xfbml      : true,  
     version    : 'v2.2' 
   });

   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });
  };

  (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   js.src = "http://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  	function statusChangeCallback(response) {
		var fbLogin = document.getElementById('facebookLogin'),
		    fbLogout = document.getElementById('facebookLogout'),
			status = document.getElementById("status");

	  if (response.status === 'connected') {
	    fbLogout.style.display = 'inline';
	    status.style.display  = 'inline';
	    status.style.float  = 'right';
	    fbLogout.style.float = 'right';
	    getUserInfo();
	    
	  } else {
	    // The person is not logged into Facebook, so we're not sure if
	    // they are logged into this app or not.
	    fbLogin.style.display = 'inline';
	    fbLogout.style.display = 'none';
	    status.style.display  = 'none';
	   
	  }
	}

	function getUserInfo() {
		  FB.api('/me', function(response) {
		  	console.log('getUserInfo',response);
		  var str="<b>Name</b> : "+response.name+"<br>";
		  	  str += "<img  src='https://graph.facebook.com/" + response.id + "/picture'>";
		  	  console.log('asd',document.getElementById("status"));
		  	  document.getElementById("status").innerHTML=str; 	    
	   		 });
	}
	document.getElementById("facebookLogin").addEventListener("click",function(){
    iniSesion.style.display= "none";
		FB.login(function(response) {
		    FB.getLoginStatus(function(response) {
		      statusChangeCallback(response);
		    });
		}, {scope: 'public_profile, email'});
	});
	document.getElementById("facebookLogout").addEventListener("click", function(){
    iniSesion.style.display= "inline";
		FB.logout(function(response) {
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response);
	    });
	  });
	});



	var googleUser = {};
 		var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '982412277215-1ml59sp449v29rmntqab4ht13m7lpp3h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
         document.getElementById("outGmail").innerHTML = '<a href="#" onclick="signOut();">Sign out</a>'
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.getElementById("statusGmail").style.display = "none";	
    });
  }
$(document).ready(function(){
	startApp();
});
