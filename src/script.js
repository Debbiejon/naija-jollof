function order() {
  let name = prompt("What is Your Name?");
  let email = prompt("What is Your Email Address?");
  let order = prompt("How many bowls would you like to order?");
  let location = prompt("Where are you located?");
  if (location === "London" || location === "Milton Keynes") {
    alert("We deliver to your area!");
  } else {
    alert("Sorry, We do not deliver to your area!");
  }
}
let orderButton = document.querySelector(".order-button");
orderButton.addEventListener("click", order);
