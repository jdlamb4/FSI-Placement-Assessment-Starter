// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Jacob Lamb"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

let total = 0;
function updateTotal(displayTotal) {
  let totalQty = document.querySelector("#qty-total");
  totalQty.textContent = displayTotal;
}

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinutBtn = document.querySelector("#minus-gb");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  // HINT: You can delete this console.log after you no longer need it!
  console.log("Gingerbread + button was clicked!");
  gb++;
  function updateGb(displayQuantity) {
    let gbQty = document.querySelector("#qty-gb");
    gbQty.textContent = displayQuantity;
  }
  gbQty = gb;

  /* I believe I don't need to do string interpolation because this ID is a number*/
  updateGb(gbQty);
  total = gb + cc + sugar;
  updateTotal(total);

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

gbMinutBtn.addEventListener("click", function () {
  if (gb > 0) {
    gb--;
    function updateGb(displayQuantity) {
      let gbQty = document.querySelector("#qty-gb");
      gbQty.textContent = displayQuantity;
    }
    gbQty = gb;
    updateGb(gbQty);
    total = gb + cc + sugar;
    updateTotal(total);
  }
});

// TODO: Hook up event listeners for the rest of the buttons
