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

window.onload = function() {

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
