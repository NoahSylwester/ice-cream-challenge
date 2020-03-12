/*
THIS IS A SILLY SOLUTION!
I'm hoping that this can make someone laugh.
This is the worst way I can think of to do this.
*/

// First we extract the html of the body tag as a string
let bodyHtmlStr = $('body').html();

/*
Second we'll need to find the index at which we insert our list items
--
We'll use regex to search for the literal class definition,
and use that index to slice our str and search for the first closing tag bracket,
(which is the end of our .ice-cream-list opening tag).
Once we have the position of the closing bracket, we add one to make our index the opposite side of the bracket,
then add our original searched index to place the index back into the original bodyHtmlStr context
*/
const searchIndex = bodyHtmlStr.slice(bodyHtmlStr.search(/class="ice-cream-list"/)).search(/>/) + 1 + bodyHtmlStr.search(/class="ice-cream-list"/);

/*
Third we insert our list items
--
We'll be inserting items repeatedly to the same index, which will functionally reverse our list,
so we'll reverse it beforehand to compensate.
Then, for each flavor we'll use string literals to redefine our html
*/
iceCreamFlavors.reverse().forEach((flavor) => bodyHtmlStr = `${bodyHtmlStr.slice(0, searchIndex)}<li class='ice-cream-flavor'>${flavor}</li>${bodyHtmlStr.slice(searchIndex)}`)

// Finally we overwrite the previous html with our processed version
$('body').html(bodyHtmlStr)