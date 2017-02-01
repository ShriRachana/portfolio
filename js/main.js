// **** SCRIPT MANAGING EXPAND COLLAPSE *****


$(document).ready(function(){

$('#menu').slicknav({

// Label for menu button. 
// Use an empty string for no label.
'label' : '', 

// If true, the mobile menu is a copy of the original.
'duplicate': true, 

// The duration of the sliding animation.
'duration': true, 

// Easing used for open animations.
'easingOpen': 'swing', 

// Easing used for close animations.
'easingClose': 'swing', 

// open / close symbols
closedSymbol: '&#9658;',
openedSymbol: '&#9660;',

// Element, jQuery object, or jQuery selector string to prepend the mobile menu to.
'prependTo': '.column2', 

// Element, jQuery object, or jQuery selector string to append the mobile menu to.
appendTo: '',

// Element type for parent menu items.
'parentTag': 'a', 

// Close menu when a link is clicked.
'closeOnClick': true,

// Allow clickable links as parent elements.
allowParentLinks: false,

// If false, parent links will be separated from the sub-menu toggle.
nestedParentLinks: true,

// Show children of parent links by default.
showChildren: false,

// Remove IDs from all menu elements.
removeIds: true,

// Remove classes from all menu elements.
removeClasses: false,

// Remove styles from all menu elements.
removeStyles: false,

// Add branding to menu bar.
brand: '',

// <a href="http://www.jqueryscript.net/animation/">Animation</a> library. Currently supports "jquery" and "velocity".
animations: 'jquery',

// Called after SlickNav creation
init: function () {},

// Called before menu or sub-menu opened
beforeOpen: function () {},

// Called before menu or sub-menu closed
beforeClose: function () {},

// Called after menu or sub-menu opened.
afterOpen: function () {},

// Called after menu or sub-menu closed.
afterClose: function () {}

});

});

// toggle the menu
$('#menu').slicknav('toggle');

// open the menu
$('#menu').slicknav('open');  

// close the menu
$('#menu').slicknav('close'); 

