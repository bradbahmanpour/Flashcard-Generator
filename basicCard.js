var BasicCard = function BasicCard(front,back) {
   this.front = front;
   this.back = back;
  };
  
  // module.exports is essentially an object that we can add data or variables to
  // We can access them from other files using the 'require' keyword.
  
  var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

  //  console.log(firstPresident);

// "Who was the first president of the United States?"
//console.log(firstPresident.front);

// "George Washington"
//console.log(firstPresident.back);


  
  module.exports = BasicCard;
    