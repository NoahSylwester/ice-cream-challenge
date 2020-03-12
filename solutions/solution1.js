/*
This is a very simple solution, just using straight jQuery
to select the list and append items to it
*/

const iceCreamList = $(".ice-cream-list");
iceCreamFlavors.forEach((flavor) => iceCreamList.append(`<li class='ice-cream-flavor'>${flavor}</li>`));