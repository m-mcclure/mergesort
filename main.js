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

	






});