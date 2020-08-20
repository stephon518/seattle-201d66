/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.innerHTML = ''; 
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbody = document.getElementById('cart'); 
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.length; i++){
    // TODO: Create a TR
    var tableRow = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity, and the item
    var tableData = document.createElement('td');
    var deleteButton= tableData.textContent = ('X'); // cart.html refereced clicking an X
    var quantity = tableData.textContent = (event.target.quantity.value);
    var productName = tableData.textContent = (name);
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbody.appendChild(tableRow);
  tableRow.appendChild(deleteButton);
  tableRow.appendChild(quantity);
  tableRow.appendChild(productName);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
