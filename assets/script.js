// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jacob Lamb" // HINT: Replace this with your own name!



// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbQty = document.querySelector('#qty-gb')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')


// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    gb++
    // gb = gb + document.querySelector('#qty-gb')
    function updateGbQty(displayGbQuantity) {
        let gbQty = document.querySelector('#qty-gb')
        gbQty.innerHTML = displayGbQuantity
    }
    gbQty = gb
    updateGbQty(gbQty)


    
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

})
ccPlusBtn.addEventListener('click', function(e) {
    cc++
    // gb = gb + document.querySelector('#qty-gb')
    function updateGbQty(displayCcQuantity) {
        let ccQty = document.querySelector('#qty-cc')
        ccQty.innerHTML = displayCcQuantity
    }
    ccQty = cc
    updateGbQty(ccQty)


    
// HINT: You can delete this console.log after you no longer need it!
console.log('Chocolate Chip + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

})
// TODO: Hook up event listeners for the rest of the buttons