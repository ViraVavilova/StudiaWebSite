	function dropDownMenu() {
	    document.getElementById("mainDropDownMenu").classList.toggle("show");
	}

	
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

	    var dropdowns = document.getElementsByClassName("menu");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	} 

	window.currentYPosition = function() {
		if (self.pageYOffset) return self.pageYOffset;
		if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
	}

	window.elmYPosition = function(eID) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}

window.smoothScroll = function(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
	
window.onload = function() {

	var menuBtns = document.getElementById("mainDropDownMenu").getElementsByTagName("a");
	for (var i = 0; i < menuBtns.length; i++) {
		menuBtns[i].addEventListener("click", function(){
			var id = this.getAttribute("href").substring(1);
			smoothScroll(id);
		});
	}

	document.getElementById("send-message-a").addEventListener("click", function () {
		var name = document.getElementById("name").value,
			email = document.getElementById("email").value,
			message = document.getElementById("message").value;
		
		var xmlhttp = new XMLHttpRequest();   
		xmlhttp.open("POST", "/");
		xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlhttp.send(JSON.stringify({
			name: name,
			email: email,
			message: message
		}));
		if (xmlhttp.status != 200) {
		  alert( xmlhttp.status + ': ' + xmlhttp.statusText );
		} else {
		  alert( xmlhttp.responseText );
		}
	});

	window.filterSelection=function(c) {
	  var x, i;
	  x = document.getElementsByClassName("pict");
	  if (c == "all") c = "";
	  for (i = 0; i < x.length; i++) {
	    removeClass(x[i], "show");
	    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	  }
	}
	filterSelection("all")


	function addClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
	    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	  }
	}

	function removeClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
	    while (arr1.indexOf(arr2[i]) > -1) {
	      arr1.splice(arr1.indexOf(arr2[i]), 1);     
	    }
	  }
	  element.className = arr1.join(" ");
	}

	var btnContainer = document.getElementById("btnContainerPortfolio");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function(){
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}
}
