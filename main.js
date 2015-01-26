$(document).ready(function() {

	function Person(firstName, lastName, birthYear, deathYear, ageAtDeath, imageURL) {
		this.firstName	 		 = firstName;
		this.lastName				 = lastName;
		this.birthYear       = birthYear;
		this.deathYear			 = deathYear;
		this.ageAtDeath		   = ageAtDeath;
		this.imageURL				 = imageURL;
	}

	var barber    	 = new Person("Samuel",  "Barber",       1910, 1981, 80, 'images/barber.jpg'),
			bernstein 	 = new Person("Leonard", "Bernstein",    1918, 1990, 81, 'images/bernstein.jpg'),
			cage				 = new Person("John",    "Cage",         1912, 1992, 79, 'images/cage.jpg'),
			copland	 		 = new Person("Aaron",   "Copland",      1900, 1990, 90, 'images/copland.jpg'),
			gershwin 		 = new Person("George",  "Gershwin",     1898, 1937, 38, 'images/gershwin.jpg'),
			ives 		  	 = new Person("Charles", "Ives",         1874, 1954, 79, 'images/ives.jpg'),
			shostakovich = new Person("Dmitri",  "Shostakovich", 1906, 1975, 69, 'images/shostakovich.jpg'),
			stravinsky	 = new Person("Igor",  	 "Stravinsky",   1882, 1971, 89, 'images/stravinsky.jpg');

	var composers = [barber, bernstein, cage, copland, gershwin, ives, shostakovich, stravinsky];
	
	for(var i=0; i < composers.length; i++){
		$("#composers-list").append("<li data-ageAtDeath='" + composers[i].ageAtDeath + 
			"'data-birthyear='" + composers[i].birthYear + 
			"'data-deathyear='" + composers[i].deathYear + "'class='composer-element'>" + "<img alt=barb src='" + composers[i].imageURL + "'/>" + 
			"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
			"<div>" + composers[i].lastName + "</div></div>" + "</li>");
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
		mergeSort($("ul#composers-list"), "birthyear");
	})

	$("#death").on("click", function() {
		mergeSort($("ul#composers-list"), "deathyear");
	})

	$("#age-at-death").on("click", function() {
		mergeSort($("ul#composers-list"), "ageatdeath");
	})

});