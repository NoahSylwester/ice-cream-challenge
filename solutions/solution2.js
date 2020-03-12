/*
Here is a slightly different flow -
here I construct the array of tags before appending to the list
*/

const flavorTagArr = iceCreamFlavors.map((flavor) => $('<li>').text(flavor).addClass('ice-cream-flavor'));

$(".ice-cream-list").append(flavorTagArr);

