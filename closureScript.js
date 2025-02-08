// Closure function to create a counter
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function () {
      count++;
      document.getElementById("count").innerText = count;
    },
    decrement: function () {
      count--;
      document.getElementById("count").innerText = count;
    },
    reset: function () {
      count = 0;
      document.getElementById("count").innerText = count;
    },
  };
}
console.dir(createCounter());
// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  const counter = createCounter();
  document
    .getElementById("increase")
    .addEventListener("click", counter.increment);
  document
    .getElementById("decrease")
    .addEventListener("click", counter.decrement);
  document.getElementById("reset").addEventListener("click", counter.reset);
});
