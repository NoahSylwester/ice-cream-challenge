/*
Here I'm just inverting the syntax and 
appending each flavor tag to the list on creation using the .appendTo method
*/

const iceCreamList = $(".ice-cream-list");
iceCreamFlavors.forEach((flavor) => $(`<li class='ice-cream-flavor'>${flavor}</li>`).appendTo(iceCreamList));