// Create an array of menu items for the top menu
const topMenuItems = [
  { name: 'Home', link: '#' },
  { name: 'Discover', link: '#' },
  { name: 'Photos', link: '#', subMenu: ['Animals', 'Landscapes', 'People'] },
  { name: 'Explore', link: '#', subMenu: ['Places', 'Foods', 'Cultures'] }, 
  { name: 'Upload', link: '#', subMenu: ['Pictures','Videos'] },
  { name: 'License', link: '#', subMenu: ['Dates', 'Country'] }
];

// Create an array of menu items for the footer menu
const footerMenuItems = [
  { name: 'About', link: '#' },
  { name: 'Account', link: '#' },
  { name: 'Calendar', link: '#' }
];

// Function to create menu items
// Define a function named createMenuItems that takes menu and items as parameters.
function createMenuItems(menu, items) {
  const menuElement = document.getElementById(menu);
// Create a new 'ul'  element and store it in the 'ul' variable 
  const ul = document.createElement('ul');
// For each 'item' in the 'items' array
// Create a new 'a' element and store it in the 'a' variable. 
  items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
// Set the 'href' attribute of the anchor element ('a') to the 'link' property of the current 'item'
    a.href = item.link;
    a.textContent = item.name;
// Append the anchor element ('a') as a child to the list item ('li')
    li.appendChild(a);
// Check if the item has a submenu
    if (item.subMenu) {
      const subUl = document.createElement('ul');
// Add a class to style the submenu
      subUl.classList.add('submenu');
// Initially hide submenu 
      subUl.style.display = 'none'; 

// Iterate through each item in the subMenu array
item.subMenu.forEach(subItem => { 
// Create a new list item for the submenu
  const subLi = document.createElement('li');
// Create a new anchor element for the submenu item link
  const subA = document.createElement('a');
// Update the href attribute of the anchor element
  subA.href = '#';
// Set the text content of the anchor element to the submenu item 
  subA.textContent = subItem;
// Append the anchor element to the list item
  subLi.appendChild(subA);
// Append the list item to the submenu's unordered list
  subUl.appendChild(subLi);
});

// Append the submenu's unordered list to the main list item
li.appendChild(subUl);
// Event listener to toggle submenu display on click
      li.addEventListener('click', function (event) {
        // Prevent event bubbling
        event.stopPropagation(); 
        subUl.style.display = subUl.style.display === 'block' ? 'none' : 'block';
      });

// Hide submenu when mouse leaves the item
li.addEventListener('mouseleave', function () {
// When the mouse leaves the 'li' element, execute the following function:
// Set the 'display' CSS property of 'subUl' to 'none', hiding the submenu.
  subUl.style.display = 'none';
 
});
}
// Append the 'li' element to the 'ul' element.
ul.appendChild(li);
});
// Append the 'ul' element to the 'menuElement'.
menuElement.appendChild(ul);
}    

// Call the function to create top menu items
createMenuItems('top-menu', topMenuItems);

// Handle click on the Join button
const joinButton = document.getElementById('join-button');
joinButton.addEventListener('click', function() {
  alert('Sorry, you can only join at the end of the cohort107!');
// Add your logic here for the action upon clicking the Join button
});
// Call the function to create footer menu items
createMenuItems('footer-menu', footerMenuItems);
// Get references to the search box and search button
const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const searchForm = document.getElementById('search-form');
const searchResultDiv = document.getElementById('search-result');

// Handle form submission for search
// When the 'submit' event occurs on the searchForm element, execute the following function
searchForm.addEventListener('submit', function(event) {
// Prevent the default behavior of form submission, which is to reload the page
  event.preventDefault();
   const searchTerm = searchBox.value.trim();
// If the searchTerm is empty (falsy) 
   if (!searchTerm) {
// Show an alert message indicating that an entry should be provided
     alert('Please provide an entry');
     return;
   }
// Add a click event listener to the search button
searchButton.addEventListener('click', function() {
// Remove the entered text from the search box
 searchBox.value = '';
// Change the search button color to green
 searchButton.style.backgroundColor = 'green';
 });
});
  
