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
	    fbLogin.style.display = 'none';
	    fbLogout.style.display = 'inline';
	    status.style.display  = 'inline';
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
		FB.login(function(response) {
		    FB.getLoginStatus(function(response) {
		      statusChangeCallback(response);
		    });
		}, {scope: 'public_profile, email'});
	});
	document.getElementById("facebookLogout").addEventListener("click", function(){
		FB.logout(function(response) {
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response);
	    });
	  });
	});