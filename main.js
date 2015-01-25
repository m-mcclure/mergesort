$(document).ready(function() {

	function Person(fullName, age, isChild, sex, socialClass, boardedLifeboat, survivedEvent) {
		this.fullName 	 		 = fullName;
		this.age						 = age;
		this.isChild         = isChild;
		this.sex 			   		 = sex;
		this.socialClass 		 = socialClass;
		this.boardedLifeboat = boardedLifeboat;
		this.survivedEvent	 = survivedEvent;
	}

	//could i make a prototype for deciding whether or not each person is child or adult?

	var person1 = new Person("Johnson, Tom", 		 35, false,   "male", 1,  true,  true),
			person2 = new Person("Bailey, Beetle", 	 24, false,   "male", 2, false, false),
			person3 = new Person("Lehrer, Tom", 		 67, false,   "male", 3, false, false),
			person4 = new Person("Goulet, Robert", 	 52, false,   "male", 4,  true,  true),
			person5 = new Person("Mercury, Freddie", 31, false,   "male", 1,  true,  true),
			person6 = new Person("Henderson, Harry",  4,  true,   "male", 3, false, false),
			person7 = new Person("Franklin, Sheila",  8,  true, "female", 2,  true,  true),
			person8 = new Person("Martin, Mary",  	 62, false, "female", 1,  true, false),
			person9 = new Person("Thomas, Frida",     2,  true, "female", 1,  true, false),
			person10 = new Person("Bowles, Sally",   26, false, "female", 3, false, false);

//	console.log(person1.age, person2.fullName);

for(var prop in person1) {
	console.log("person1." + prop + " = " + person1[prop]);
}





});