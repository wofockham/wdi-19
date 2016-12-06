/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

var tellFortune = function (numChildren, partnerName, geographicLocation, jobTitle) {
  var fortune = "Perhaps you will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numChildren + " kids.";

  console.log(fortune);
};

tellFortune(1, 'Jonesy', 'Hawaii', 'chimney sweep');
tellFortune(2, 'Mary', 'Katoomba', 'unemployed');
tellFortune(3, 'Petey', 'outback Australia', 'bar tender');
