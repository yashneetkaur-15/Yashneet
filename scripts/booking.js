/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Initialize variables for cost per day, number of days selected, and relevant elements
let costPerDay = 35; // Default to full-day rate
let dayCounter = 0; // Tracks the number of days selected

// Get references to necessary elements
const dayButtons = document.querySelectorAll('.day'); 
const clearButton = document.querySelector('#clear-button'); 
const halfDayButton = document.querySelector('#half'); 
const fullDayButton = document.querySelector('#full'); 
const calculatedCost = document.querySelector('#calculated-cost'); 

// Initialize the page with default values
function resetPage() {
      dayCounter = 0;
      costPerDay = 35; // Default to full-day
      calculatedCost.innerHTML = '$0';
      dayButtons.forEach(button => button.classList.remove('clicked')); // Clear all clicked states
      fullDayButton.classList.add('clicked'); // Default to full-day
      halfDayButton.classList.remove('clicked');
  }
  
  resetPage(); // Call on page load
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Toggle the "clicked" class
          if (!button.classList.contains('clicked')) {
              button.classList.add('clicked');
              dayCounter++; // Increment day count only if not already clicked
          } else {
              button.classList.remove('clicked');
              dayCounter--; // Decrement day count if already clicked
          }
          calculateTotal(); // Recalculate the total cost
      });
  });
  

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', () => {
      resetPage(); // Reset everything to default values
  });
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('click', () => {
      costPerDay = 20; // Set to half-day rate
      halfDayButton.classList.add('clicked'); // Add "clicked" class
      fullDayButton.classList.remove('clicked'); // Remove from full-day
      calculateTotal(); // Recalculate total cost
  });
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('click', () => {
      costPerDay = 35; // Set to full-day rate
      fullDayButton.classList.add('clicked'); // Add "clicked" class
      halfDayButton.classList.remove('clicked'); // Remove from half-day
      calculateTotal(); // Recalculate total cost
  });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotal() {
      const totalCost = dayCounter * costPerDay;
      calculatedCost.innerHTML = `$${totalCost}`; // Update displayed total cost
  }

