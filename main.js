'use strict';
//Data ==========================================
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var everycookieshop = [];
//Get cookie sold to table 
var shopTable = document.getElementById('cookies-sold');
//Get to add shop to form
var shopForm = document.getElementById('add-shop-form');
//funmctionally ==================================
//Constructor for store sales data
function CookieShops(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookieSalePH = [];
  everycookieshop.push(this);

}
//Testing Error on CookiesShop
debugger;
CookieShops.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShops.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShops.prototype.render = function() { 
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  var cookiesSold = 0;
  var totalCookiesSold = 0;

  for (var i = 0; i < operationHour.length; i++) {

    cookiesSold = this.cookiesPerHr();

    var tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.cookieSalePH.push(cookiesSold);

    totalCookiesSold += cookiesSold;
  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  shopTable.appendChild(trElement);
};

function makeHeaderRow() { // Header Row Function
  var theadElement = document.createElement('thead');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (var i = 0; i < operationHour.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = operationHour[i];
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);

  shopTable.appendChild(theadElement);
}

function totalCookiesPerHour() { // Bottom Totals
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Totals';
  trElement.appendChild(thElement);

  var grandTotalCookies = 0;

  for (var i = 0; i < operationHour.length; i++) {
    var totalCookies = 0;
    for( var j = 0; j < everycookieshop.length; j++) {
      totalCookies += everycookieshop[j].cookiesSoldPerHr[i];
      grandTotalCookies += everycookieshop[j].cookiesSoldPerHr[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);

  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotalCookies;
  trElement.appendChild(tdElement);
  shopTable.appendChild(trElement);
}
//Calls function to generate arrays with random number of cookies
new CookieShops('Seattle', 23, 65, 6.3);
new CookieShops('Tokyo', 3, 24, 1.2);
new CookieShops('Dubai', 11, 38, 3.7);
new CookieShops('Paris', 20, 38, 2.3);
new CookieShops('Lima', 2, 16, 4.6);

function renderallcookieshops() {
  for(var i in everycookieshop) {
    everycookieshop[i].render();
  }
}
// code to add new shop 
function addNewCookieShop(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target.shopLocation);
  console.log
  // Get target of event 
  (event.target.shopLocation.value);
  var newLoc = 
  //The parseInt() function parses a string and returns an integer.
  event.target.shopLocation.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);
// New Keyword to call to function creates a new object
  new CookieShops(newLoc, newMinCust, newMaxCust, newCookiesPerSale);

// Access & Update text with TextContent to Table 
  shopTable.innerHTML = '';
  makeHeaderRow();
  renderallcookieshops();
  totalCookiesPerHour();
}
//Event Listener to Form
shopForm.addEventListener('submit', addNewCookieShop);

makeHeaderRow();
renderallcookieshops();
totalCookiesPerHour();
