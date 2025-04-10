// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Jacob Lamb"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

let total = 0;

let gbQty = document.querySelector("#qty-gb");
let ccQty = document.querySelector("#qty-cc");
let sugarQty = document.querySelector("#qty-sugar");

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector("#add-cc");

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector("#add-sugar");

// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector("#minus-gb");

const ccMinusBtn = document.querySelector("#minus-cc");

const sugarMinusBtn = document.querySelector("#minus-sugar");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function (e) {
  gb++;
  // gb = gb + document.querySelector('#qty-gb')
  function updateGbQty(displayGbQuantity) {
    let gbQty = document.querySelector("#qty-gb");
    gbQty.innerHTML = displayGbQuantity;
  }
  gbQty = gb;
  updateGbQty(gbQty);

  total++;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }

  updateTotalQty(total);

  // HINT: You can delete this console.log after you no longer need it!
  console.log("Gingerbread + button was clicked!");

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

ccPlusBtn.addEventListener("click", function (e) {
  cc++;
  // gb = gb + document.querySelector('#qty-gb')
  function updateGbQty(displayCcQuantity) {
    let ccQty = document.querySelector("#qty-cc");
    ccQty.innerHTML = displayCcQuantity;
  }
  ccQty = cc;
  updateGbQty(ccQty);

  total++;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }
  updateTotalQty(total);

  // HINT: You can delete this console.log after you no longer need it!
  console.log("Chocolate Chip + button was clicked!");

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});
// TODO: Hook up event listeners for the rest of the buttons

sugarPlusBtn.addEventListener("click", function (e) {
  sugar++;
  // gb = gb + document.querySelector('#qty-gb')
  function updateGbQty(displaySugarQuantity) {
    let sugarQty = document.querySelector("#qty-sugar");
    sugarQty.innerHTML = displaySugarQuantity;
  }
  sugarQty = sugar;
  updateGbQty(sugarQty);

  total++;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }

  updateTotalQty(total);

  // HINT: You can delete this console.log after you no longer need it!
  console.log("Sugar Sprinkle + button was clicked!");

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

gbMinusBtn.addEventListener("click", function (e) {
  gb--;
  function updateGbQty(displayGbQuantity) {
    let gbQty = document.querySelector("#qty-gb");
    gbQty.innerHTML = displayGbQuantity;
  }
  gbQty = gb;
  updateGbQty(gbQty);

  total--;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }

  updateTotalQty(total);
});

ccMinusBtn.addEventListener("click", function (e) {
  cc--;
  function updateGbQty(displayCcQuantity) {
    let ccQty = document.querySelector("#qty-cc");
    ccQty.innerHTML = displayCcQuantity;
  }
  ccQty = cc;
  updateGbQty(ccQty);

  total--;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }

  updateTotalQty(total);
});

sugarMinusBtn.addEventListener("click", function (e) {
  sugar--;
  function updateSugarQty(displaySugarQuantity) {
    let sugarQty = document.querySelector("#qty-sugar");
    sugarQty.innerHTML = displaySugarQuantity;
  }
  sugarQty = sugar;
  updateSugarQty(sugarQty);

  total--;
  function updateTotalQty(displayTotalyQuantity) {
    let totalQty = document.querySelector("#qty-total");
    totalQty.innerHTML = displayTotalyQuantity;
  }

  updateTotalQty(total);
});
