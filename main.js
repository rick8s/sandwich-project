/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

var sandwich {};

sandwich.pickle = false;
sandwich.lettuce = false;
sandwich.tomato = false;
sandwich.ketchup = false;
sandwich.mustard = false;
sandwich.mayo = false;
sandwich.turkey = false;
sandwich.ham = false;
sandwich.pepperoni = false;


function addPickle(send) {
  if(send > 0) {
    sandwich.pickle = true;
  } else {
    sandwich.pickle = false;
  }
  
}
function addLettuce(send) {
  if(send > 0) {
    sandwich.lettuce = true;
  } else {
    sandwich.lettuce = false;
  }
}

function addTomato(send) {
  if(send > 0) {
    sandwich.tomato = true;
  } else {
    sandwich.tomato = false;
  }
}

function addKetchup(send) {
  if(send > 0) {
    sandwich.ketchup = true;
  } else {
    sandwich.ketchup = false;
  }
}

function addMustard(send) {
  if(send > 0) {
    sandwich.mustard = true;
  } else {
    sandwich.mustard = false;
  }
}

function addMayo(send) {
  if(send > 0) {
    sandwich.mayo = true;
  } else {
    sandwich.mayo = false;
  }
}

function addTurkey(send) {
  if(send > 0) {
    sandwich.turkey = true;
  } else {
    sandwich.turkey = false;
  }
}

function addHam(send) {
  if(send > 0) {
    sandwich.ham = true;
  } else {
    sandwich.ham = false;
  }
}

function addPepperoni(send) {
  if(send > 0) {
    sandwich.pepperoni = true;
  } else {
    sandwich.pepperoni = false;
  }
}



function makeMeASandwich (pickle, lettuce, tomato, ketchup, mustard, mayo, turkey, ham, pepperoni) {
  if(pickle){
    addPickle();
  }
}



var output = "";

if (sandwich.pickle) {
  output += "pickle, "
}
