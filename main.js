$(document).ready(function() {

	function Person(firstName, lastName, birthYear, deathYear, ageAtDeath) {
		this.firstName	 		 = firstName;
		this.lastName				 = lastName;
		this.birthYear       = birthYear;
		this.deathYear			 = deathYear;
		this.ageAtDeath		   = ageAtDeath;
	}

	//could i make a prototype for deciding whether or not each person is child or adult?

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

	for (i=0; i < composers.length; i++){
		if (composers[i].lastName === "Barber"){
			$("#composers-list").append("<li class='li img'>" + "<img alt=barb src='images/barber.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Bernstein"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=bernie src='images/bernstein.jpg'/>" +
																		"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Cage"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=cage src='images/cage.jpg'/>" + 
																		"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Copland"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=copl src='images/copland.jpg'/>" +
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" + "</li>");
		}
		else if (composers[i].lastName === "Gershwin"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=gersh src='images/gershwin.jpg'/>" + 
																  "<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Ives"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=ives src='images/ives.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Shostakovich"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=shost src='images/shostakovich.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}
		else if (composers[i].lastName === "Stravinsky"){
			$("#composers-list").append("<li class='composer-image'>" + "<img alt=strav src='images/stravinsky.jpg'/>" + 
																	"<div class='namePlates'><div>" + composers[i].firstName + "</div>" + 
																	"<div>" + composers[i].lastName + "</div></div>" +"</li>");
		}

}




});