console.log("Let's get to know the document!")

console.log(document)

let body = document.body;
console.log(body)

// We can add CSS Inline Styling via the .style property!
console.log(body.style);
body.style.backgroundColor = 'crimson';


// Get an element's children via the .children property 
let children = body.children;
console.log(children);
// this will return the children with their INDEX of the body - which we can use...

let header = children[0];
console.log(header);
header.style.backgroundColor = 'blue';


//                                          >> Popular Methods with the Document Objects <<

// Methods to get element(s)

// document.getElementById('id') -- will return the first element that matches the string 'id'

let home = document.getElementById('home');
console.log(home)
home.style.backgroundColor = 'green'

// document.getElementsByTagName('tagName') -- return HTML collection (Array-like) of all elements that match 'tagName'
let allImages = document.getElementsByTagName('img');
console.log(allImages)

// documents.getElementsByClassName('callName') -- return HTML collection (Array-like) of all elements that match 'className'
let invisibleDivs = document.getElementsByClassName('is-invisible');
console.log(invisibleDivs)


// document.querySelector('selector')  .... think back to CSS selectors
// returns the FIRST element that matches the specified 'selector'
let firstNavItem = document.querySelector('.nav-item'); // simple-selector of the div with this class
console.log(firstNavItem);


let middleBubble = document.querySelector('#outerBubble div') // combinator-selector
// grabbing the first div that is a DESCENDANT of another with the id of outerbubble
console.log(middleBubble)


// document.querySelectorAll('selector') -- will return a Node List (Array-like) of elements that match the specified selector
let navItems = document.querySelectorAll('.nav-items');
console.log(navItems);

// ** Difference between a NodeList and HTML Collection - NodeList is static, HTMLCollection is dynamic(meaning it will change as you change the source code)


// >> CREATE ELEMENTS with the Document

// document.createElement('tagName') -- create a new element with the given tag name!
let newHeader = document.createElement('h3');
newHeader.innerHTML = 'Header created by Lexie with the help of JavaScript'
newHeader.className = 'text-center text-danger';
console.log(newHeader)


// Adding the element to the HTML document! (as the above will only show in console)

let heroText = document.getElementsByClassName('hero-text')[0]
// console.log(heroText);

// Element.append(elementToAdd) -- append the elementToAdd as the LAST CHILD of Element
// heroText.append(newHeader)

// Element.prepend(elementToAdd) -- append the elementToAdd as the FIRST CHILD of Element
// heroText.prepend(newHeader)

// Element.after(elementToAdd) -- add the elementToAdd AFTER (as a sibling) the Element
// heroText.after(newHeader);

// Element.before(elementToAdd) -- add the elementToAdd BEFORE (as a sibling) the Element
heroText.before(newHeader);