$(document).ready(function() {

	function Person(firstName, lastName, birthYear, deathYear, ageAtDeath) {
		this.firstName	 		 = firstName;
		this.lastName				 = lastName;
		this.birthYear       = birthYear;
		this.deathYear			 = deathYear;
		this.ageAtDeath		   = ageAtDeath;
	}

	var barber    	 = new Person("Samuel",  "Barber",       1910, 1981, 80),
			bernstein 	 = new Person("Leonard", "Bernstein",    1918, 1990, 81),
			cage				 = new Person("John",    "Cage",         1912, 1992, 79),
			copland	 		 = new Person("Aaron",   "Copland",      1900, 1990, 90),
			gershwin 		 = new Person("George",  "Gershwin",     1898, 1937, 38),
			ives 		  	 = new Person("Charles", "Ives",         1874, 1954, 79),
			shostakovich = new Person("Dmitri",  "Shostakovich", 1906, 1975, 69),
			stravinsky	 = new Person("Igor",  	 "Stravinsky",   1882, 1971, 89);

	var composers = [barber, bernstein, cage, copland, gershwin, ives, shostakovich, stravinsky];
	var images	 	= ['images/barber.jpg', 'images/bernstein.jpg', 'images/cage.jpg', 'images/copland.jpg',
										'images/gershwin.jpg', 'images/ives.jpg', 'images/shostakovich.jpg', 'images/stravinsky.jpg'];
	var listArray	= ['man1', 'man2', 'man3', 'man4', 'man5', 'man6', 'man7', 'man8'];

	var nums = [1,2,3,4,5,6,7,8];

	//for (i=0; i < nums.length; i++) {
	//	$("#composers-list").append("<li class='composer-element'>" + nums[i] + "</li>");
	//}

	for (i=0; i < composers.length; i++){
		if (composers[i].lastName === "Barber"){
			$("#composers-list").append("<li id='man1' data-ageAtDeath='" + composers[i].ageAtDeath + "' class='composer-element'>" + "<img alt=barb src='images/barber.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Bernstein"){
			$("#composers-list").append("<li id='man2' data-ageAtDeath='95' class='composer-element'>" + "<img alt=bernie src='images/bernstein.jpg'/>" +
																		"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Cage"){
			$("#composers-list").append("<li id='man3' data-ageAtDeath='9' class='composer-element'>" + "<img alt=cage src='images/cage.jpg'/>" + 
																		"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Copland"){
			$("#composers-list").append("<li id='man4' data-ageAtDeath='42' class='composer-element'>" + "<img alt=copl src='images/copland.jpg'/>" +
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Gershwin"){
			$("#composers-list").append("<li id='man5' data-ageAtDeath='1000' class='composer-element'>" + "<img alt=gersh src='images/gershwin.jpg'/>" + 
																  "<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Ives"){
			$("#composers-list").append("<li id='man6' data-ageAtDeath='555' class='composer-element'>" + "<img alt=ives src='images/ives.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Shostakovich"){
			$("#composers-list").append("<li id='man7' data-ageAtDeath='60' class='composer-element'>" + "<img alt=shost src='images/shostakovich.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Stravinsky"){
			$("#composers-list").append("<li id='man8' data-ageAtDeath='800' class='composer-element'>" + "<img alt=strav src='images/stravinsky.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}

} 

function mergeSort($ul, property) {
    if ($ul.find("li").length < 2)
      return $ul;
 
 		splitUl($ul);
 		var $newUl = $ul.next();

    return merge(mergeSort($ul, property), mergeSort($newUl, property), property);
}

function splitUl($ul) {
  var $secondUl  = $("<ul class='composers'></ul>");
  var length = $ul.children().length;
  $secondUl.append($ul.children().eq(length/2-1).nextAll());
  $secondUl.insertAfter($ul);
}

 
function merge($leftUl, $rightUl, property) {
    var $resultUl = $("<ul class='composers'></ul>");
 
    while ($leftUl.children().length && $rightUl.children().length) {
        if ($leftUl.children().first().data(property) <= $rightUl.children().first().data(property)) {
            $resultUl.append($leftUl.children().first());
        } else {
            $resultUl.append($rightUl.children().first());
        }
    }
 
    while ($leftUl.children().length)
        $resultUl.append($leftUl.children().first());
    while ($rightUl.children().length)
        $resultUl.append($rightUl.children().first());
 
 		$resultUl.insertBefore($leftUl);
 		$leftUl.remove();
 		$rightUl.remove();
    return $resultUl;
}

 var shuffle = function(m) {
 		
			var $elemA, elemB;
			//get random item by index number
			elemB = Math.floor(Math.random() * m--);
			//swap it with current position
			$elemA = $(".composer-element:eq(" + m + ")"); //concats the val of m into selector
			$elemB = $(".composer-element:eq(" + elemB + ")");
			$elemA.before($elemB);
			$(".composer-element:eq(" + elemB + ")").before($elemA);
			if(m) {
				setTimeout(shuffle, 150, m);
			}
			
	};
 
	$("#shuffle").on("click", function() { 
		shuffle($("li").length);
		
	});

	$("#birth").on("click", function() {
		mergeSort($("ul#composers-list"), "birthYear");
	})

	$("#death").on("click", function() {
		mergeSort($("ul#composers-list"), "deathYear");
	})

	$("#age-at-death").on("click", function() {
		mergeSort($("ul#composers-list"), "ageAtDeath");
	})

});