

const getPrice = function() {
  const billInput = document.querySelector("#bill");
  const discountInput = document.querySelector("#discount");

  // Check if bill and discount inputs are valid numbers
  const bill = Number(billInput.value);
  const discount = Number(discountInput.value);
  if (isNaN(bill) || isNaN(discount)) {
    alert("Please enter valid numeric values for bill and discount.");
    return;
  }

  // Check if discount is between 0 and 100 (inclusive)
  if (discount < 0 || discount > 100) {
    alert(`Enter Discount is not correct:  ${discount}`);
    return;
  }

  const totalValue = bill - bill * (discount / 100);
  document.querySelector("#total").innerHTML = `Total Discount Amount: ${totalValue}`;
};
