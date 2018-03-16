var ClozeCard = function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "... ");
    if ((this.text.search(this.cloze)) < 0) {
        console.log("the cloze deletion does _not_ appear in the input text");
    }
}

//var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

//var str = "Visit W3Schools!";
//var n = str.search("W3Schools");

//console.log("n =" + n);

// "George Washington"
//console.log(firstPresidentCloze.cloze);

// "... was the first president of the United States."
//console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
//console.log(firstPresidentCloze.text);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");



// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

//var DeclareIndependence = new ClozeCard("Thomas Jefferson wrote the Declaration of Independence.", "Thomas Jefferson");

module.exports = ClozeCard;
