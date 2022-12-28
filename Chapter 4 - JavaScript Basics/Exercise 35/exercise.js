function canPlay() {
  let sport = " Football";
  let personName;

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();

/* Error explained */
/*
  Problem: 
    "personName" is only defined within "if" block scope, hence using it outside of this scope will 
    result in undefined error. 

  Solution:
    Move the let personName declaration to be outside (on top) of the "if" scope and make the assign in the "if".
    Also meaning that we split the declaration and the assigning.

    let personName;
    if(true) {
      perosnName = "Cosimo"
    }
*/