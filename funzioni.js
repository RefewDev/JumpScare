	function go_full_screen(){
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    };
	
   function audioplay() {
      var sound = document.getElementById("audio");
         sound.play();
         sound.loop = true;
   };

   function attiva() {
      visual();
      audioplay();
   };
   
	function visual() {
      var show = document.getElementById("jumpscare");
      var hide = document.getElementById("fakesite");
      hide.style.display = "none";
	  show.style.display = "block";
      document.getElementById("message").innerHTML = "<h1><strong><em>WELCOME TO DARKNET!</em></strong></h1>"
   };
   
