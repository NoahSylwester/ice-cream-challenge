/* 
Here I'm using the reduce method to construct 
an html string that I then write as the content of the ice cream list
*/

const flavorTagStr = iceCreamFlavors.reduce((flavorHtml, flavor) => flavorHtml += `<li class='ice-cream-flavor'>${flavor}</li>`, '');

$(".ice-cream-list").html(flavorTagStr);