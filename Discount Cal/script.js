const getPrice = function () {
    const bill = Number(document.querySelector("#bill").value);
    const discount = Number(document.querySelector("#discount").value) / 100;
    var totalValue = bill - (bill * discount);
    document.querySelector("#total").innerHTML = `Total Discount Amount ==  ${totalValue}`;
  };
  